import { updateQuiz } from '@apis/quiz';
import { colorByIndex } from '@configs/color';
import { Input, XyzGroup } from 'library/haloLib';
import React, { useState } from 'react';

import { fakeQuizs } from './common';
import { QuizList } from './QuizList';
import { QuizSetting } from './QuizSetting';
/**
 * Declare screen props
 */
interface IScreenProps {}

export const CreateScreen: IComponent<IScreenProps> = () => {
  const [crrId, setCrrId] = useState<null | string>(null);
  const [quiz, setQuiz] = useState<IQuiz[]>(fakeQuizs);

  const crrQuiz = quiz.find((v) => v.id === crrId);

  const handlePressQuiz = (id: string) => setCrrId(id);

  const handleUpdateCrrQuiz = (q: IQuiz) => {
    setQuiz(
      quiz.map((v) => {
        if (v.id !== crrId) return v;
        return q;
      })
    );
  };

  const handleChangePoint = (point: number) => {
    if (crrQuiz.point !== point) {
      crrQuiz.point = point;
      void updateQuiz(crrQuiz);
      handleUpdateCrrQuiz(crrQuiz);
    }
  };

  const handleChangeQuizTime = (time: number) => {
    if (crrQuiz.timeLimit !== time) {
      crrQuiz.timeLimit = time;
      void updateQuiz(crrQuiz);
      handleUpdateCrrQuiz(crrQuiz);
    }
  };

  const handleOnChageQuizContent = (ev) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    crrQuiz.quizContent = ev.target.value;
    handleUpdateCrrQuiz(crrQuiz);
  };

  return (
    <div className="w-100 h-100 relative overflow-auto hover-scroll flex flex-row">
      <QuizList crrId={crrId} quiz={quiz} onPressQuiz={handlePressQuiz} />
      <div className="flex flex-auto flex-column pa6">
        <Input
          onChange={handleOnChageQuizContent}
          value={crrQuiz.quizContent}
          placeholder="Nhập câu hỏi"
        />
        <div className="flex flex-auto flex-column mt3">
          <div className="mv3 h-50 w-100 center-items">
            <div className="br3 ba b--dashed h-100 ph8 center-items b--gray gray pointer noselect">
              Kéo thả hoặc chọn để thêm hình ảnh
            </div>
          </div>
          <div className="mv3 flex flex-auto w-100 flex-wrap">
            {Array(4)
              .fill('')
              .map((_, idx) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={idx} className="w-50 h-50 flex">
                    <div className="ma2 flex-auto br3 flex flex-row overflow-hidden b--light-gray ba">
                      <div
                        style={{ background: colorByIndex[idx + 4] }}
                        className="h-100 w-100 mw2 ph3 center-items white">
                        {idx + 1}
                      </div>
                      <div className="flex flex-auto">
                        <input className="h-100 w-100 bn outline-0 pa3 f7" />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <XyzGroup xyz="fade right-1" className="flex h-100">
        {crrId && (
          <QuizSetting
            crrQuiz={quiz.find((v) => v.id === crrId)}
            onChangeTime={handleChangeQuizTime}
            onChangePoint={handleChangePoint}
          />
        )}
      </XyzGroup>
    </div>
  );
};
