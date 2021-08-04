import { createQuiz, deleteQuiz, updateQuiz } from '@apis/quiz';
import { showToastAlert, useActionDebounce } from '@library/haloLib';
import { atomAllQuiz, atomCurrentListId } from '@recoil/app';
import { SpinView, XyzGroup } from 'library/haloLib';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { defaultQuiz, fakeQuizs } from './common';
import { QuizContent } from './QuizContent';
import { QuizList } from './QuizList';
import { QuizSetting } from './QuizSetting';
/**
 * Declare screen props
 */
interface IScreenProps {}

export const CreateScreen: IComponent<IScreenProps> = () => {
  const currentListId = useRecoilValue(atomCurrentListId);
  const allQuiz = useRecoilValue(atomAllQuiz);
  const [crrId, setCrrId] = useState<null | string>(fakeQuizs[0].id);
  const [quiz, setQuiz] = useState<IQuiz[]>([]);
  const [isUploading, setUploading] = useState(false);

  const debounceEdit = useActionDebounce(400, true);

  const crrQuiz = cloneDeep(quiz.find((v) => v.id === crrId));

  const handlePressQuiz = (id: string) => setCrrId(id);

  const handleUpdateCrrQuiz = (q: IQuiz) => {
    setQuiz(
      quiz.map((v) => {
        if (v.id !== crrId) return v;
        return q;
      })
    );
  };

  const callUpdateQuiz = (q: IQuiz) => {
    debounceEdit(async () => {
      await updateQuiz(q);
    });
  };

  const handleChangePoint = (point: number) => {
    if (crrQuiz && crrQuiz?.point !== point) {
      crrQuiz.point = point;
      callUpdateQuiz(crrQuiz);
      handleUpdateCrrQuiz(crrQuiz);
    }
  };

  const handleChangeQuizTime = (time: number) => {
    if (crrQuiz && crrQuiz?.timeLimit !== time) {
      crrQuiz.timeLimit = time;
      callUpdateQuiz(crrQuiz);
      handleUpdateCrrQuiz(crrQuiz);
    }
  };

  const handleChangeCorrectAnswer = (idx: number) => {
    if (crrQuiz) {
      crrQuiz.rightAnswer = idx;
      handleUpdateCrrQuiz(crrQuiz);
      callUpdateQuiz(crrQuiz);
    }
  };

  const handleOnChageQuizContent = (ev) => {
    if (crrQuiz) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      crrQuiz.quizContent = ev.target.value;
      handleUpdateCrrQuiz(crrQuiz);
      callUpdateQuiz(crrQuiz);
    }
  };

  const updateQuizAnswer = (idx: number, content: string) => {
    if (crrQuiz) {
      crrQuiz.answers[idx] = content;
      handleUpdateCrrQuiz(crrQuiz);
      callUpdateQuiz(crrQuiz);
    }
  };

  const handlePressDel = (id: string) => {
    void deleteQuiz(id).then(() => {
      if (quiz.length === 1) {
        window.dispatchEvent(new CustomEvent('REFRESH_QUIZ'));
      } else {
        setQuiz(quiz.filter((q) => q.id !== id));
      }
    });
  };

  const handlePressAdd = () => {
    void createQuiz({
      ...defaultQuiz,
      quizListId: currentListId,
      quizContent: Date.now().toString(),
    }).then((data) => {
      setQuiz([...quiz, data]);
    });
  };

  const handleUploadFile = (file: File) => {
    setUploading(true);
    void updateQuiz(crrQuiz, file)
      .then((data) => {
        if (data) {
          setQuiz(
            quiz.map((v) => {
              if (v.id !== crrId) return v;
              return data;
            })
          );
          setUploading(false);
        }
      })
      .catch(() => {
        showToastAlert({
          title: 'Có lỗi xảy ra',
          subTitle: 'Vui lòng thử lại sau',
          duration: 3000,
          type: 'warning',
          position: 'top-right',
        });
        setUploading(false);
      });
  };

  useEffect(() => {
    if (allQuiz) {
      setQuiz(allQuiz.filter((q) => q.quizListId === currentListId));
    }
  }, [allQuiz, currentListId]);

  return (
    <div className="w-100 flex-auto relative flex flex-row">
      <QuizList
        crrId={crrId}
        quiz={quiz}
        onPressQuiz={handlePressQuiz}
        onPressAdd={handlePressAdd}
      />
      <SpinView
        blurContent
        isEmpty={!crrQuiz}
        wrapperClassName="w-100 h-100 relative"
        placeholder={<div className="w-100 h-100 center-items gray">Vui lòng chọn quiz</div>}>
        <div className="absolute top-0 left-0 w-100 h-100 flex flex-row flex-auto">
          <QuizContent
            crrQuiz={crrQuiz}
            isUploading={isUploading}
            onUploadFile={handleUploadFile}
            updateQuizAnswer={updateQuizAnswer}
            handleChangeCorrectAnswer={handleChangeCorrectAnswer}
            handleOnChageQuizContent={handleOnChageQuizContent}
          />
          <XyzGroup xyz="fade right-1" className="flex h-100">
            {crrId && (
              <QuizSetting
                crrQuiz={quiz.find((v) => v.id === crrId)}
                onChangeTime={handleChangeQuizTime}
                onChangePoint={handleChangePoint}
                onPressDelete={handlePressDel}
              />
            )}
          </XyzGroup>
        </div>
      </SpinView>
    </div>
  );
};
