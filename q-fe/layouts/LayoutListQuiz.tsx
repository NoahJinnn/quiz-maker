import { createQuiz, getQuiz } from '@apis/quiz';
import { Option, Select } from '@library/haloLib';
import { atomAllQuiz, atomCurrentListId } from '@recoil/app';
import { defaultQuiz } from '@screens/Create/common';
import React, { useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';

const LayoutListQuiz: IComponent = ({ children }) => {
  const [quiz, setQuiz] = useRecoilState(atomAllQuiz);
  const [listId, setListId] = useRecoilState(atomCurrentListId);

  const handleRefesh = () => {
    void getQuiz().then((data) => {
      if (data) {
        const quizData = data.filter((q) => q.quizListId === listId);
        if (quizData.length === 0) {
          setListId(data[0].quizListId);
        }
        setQuiz(data);
      }
    });
  };

  const handleOnChangeListId = (id: number | 'new') => {
    if (id !== undefined) {
      if (id === 'new') {
        const newListId = Math.round(Date.now() % 100000);
        /**
         * Create first question
         */
        void createQuiz({
          ...defaultQuiz,
          quizListId: newListId,
          quizContent: Date.now().toString(),
        }).then((newQ) => {
          void getQuiz().then((data) => {
            if (data) {
              setQuiz(data);
              setListId(newQ.quizListId);
            }
          });
        });
      } else {
        setListId(id);
      }
    }
  };

  useEffect(() => {
    handleRefesh();
  }, []);

  const renderQuizListOption = useMemo(() => {
    const listIds: number[] = [];
    quiz.forEach((q) => {
      if (!listIds.includes(q.quizListId)) {
        listIds.push(q.quizListId);
      }
    });
    return (
      <Select
        className="miw5"
        defaultValue={0}
        value={listId}
        items={[quiz, listId]}
        onChange={handleOnChangeListId}>
        {listIds.map((id, idx) => {
          return (
            <Option key={id} value={id}>
              Bộ câu {idx + 1}
            </Option>
          );
        })}
      </Select>
    );
  }, [quiz, listId]);

  useEffect(() => {
    window.addEventListener('REFRESH_QUIZ', handleRefesh);
    return () => window.removeEventListener('REFRESH_QUIZ', handleRefesh);
  }, []);

  return (
    <div className="w-100 vh-100 flex flex-column bg-med">
      <div className="w-100 shadow-3 pa3 flex center-items">
        <p className="ma0 fe7 gray">
          <span className="fw6">EZ</span>Quiz
        </p>
        <div className="flex-auto" />
        {renderQuizListOption}
      </div>
      {children}
    </div>
  );
};

export { LayoutListQuiz };
