import { updateQuiz } from '@apis/quiz';
import { colorByIndex } from '@configs/color';
import { QuizScore } from '@configs/score';
import { TimeLimit } from '@configs/time';
import { cx, Icon, Input, Option, Select, Tag, Tooltip, XyzGroup } from 'library/haloLib';
import React, { useMemo, useState } from 'react';
/**
 * Declare screen props
 */
interface IScreenProps {}

const defaultQuiz = {
  id: null,
  quizListId: null,
  quizContent: '',
  answers: ['', '', '', ''],
  rightAnswer: 0,
  timeLimit: 20,
  point: 100,
  mediaLink: '',
};

const fake = [
  {
    id: '61081e0dd004e008c831a301',
    quizListId: 0,
    quizContent: 'tao đang tét',
    answers: ['tét', 'hé hé', 'dé', 'dé'],
    rightAnswer: 0,
    timeLimit: 10,
    point: 0,
    mediaLink: '',
  },
  {
    id: '61081e0dd004e008c831a302',
    quizListId: 0,
    quizContent: 'tao đang tét',
    answers: ['tét', 'hé hé', 'dé', 'dé'],
    rightAnswer: 0,
    timeLimit: 10,
    point: 0,
    mediaLink: '',
  },
  {
    id: '61081e0dd004e008c831a303',
    quizListId: 0,
    quizContent: 'tao đang tét',
    answers: ['tét', 'hé hé', 'dé', 'dé'],
    rightAnswer: 0,
    timeLimit: 10,
    point: 0,
    mediaLink: '',
  },
];

const QuizList: IComponent<{ crrId: string; onPressQuiz: (id: string) => void; quiz: IQuiz[] }> = ({
  crrId,
  quiz,
  onPressQuiz,
}) => {
  const renderQuiz = useMemo(() => {
    return quiz.map((q, idx) => {
      const onSel = () => onPressQuiz(q.id);
      return (
        <button
          type="button"
          key={q.id}
          onClick={onSel}
          className={cx(
            'w-100 br3 ba flex flex-column mv2 pa2 grow pointer bg-transparent tl relative',
            {
              'b--gray': crrId !== q.id,
              'b--green': crrId === q.id,
            }
          )}>
          <div className="flex">
            <Tag title={`Câu ${idx + 1}`} />
          </div>
          <div className="h2 mw2 w-100 ba br-pill absolute top-0 right-0 ma1 center-items b--transparent shadow-4">
            <Tooltip title="Thời gian">{q.timeLimit}</Tooltip>
          </div>
          <div
            style={{ textOverflow: 'ellipsis', wordWrap: 'break-word' }}
            className="nowrap pt2 gray w-100 overflow-hidden">
            {q.quizContent}
          </div>
        </button>
      );
    });
  }, [quiz, crrId]);

  return (
    <div className="h-100 overflow-auto shadow-4 pa3" style={{ width: 250 }}>
      <p className="mv2 fw6">Danh sách</p>
      <XyzGroup xyz="stagger-1 fade left-1" className="flex flex-column">
        {renderQuiz}
      </XyzGroup>
      <div className="br3 ba b--dashed tc pv4 grow pointer b--gray center-items gray">
        <Icon name="AddIcon" className="mr2" />
        Thêm câu hỏi
      </div>
    </div>
  );
};

const QuizSetting: IComponent<{
  crrQuiz: IQuiz;
  onChangePoint?: (p: numner) => void;
  onChangeTime?: (t: number) => void;
}> = ({ crrQuiz, onChangePoint, onChangeTime }) => {
  return (
    <div className="xyz-in h-100 overflow-auto shadow-4 pa3" style={{ width: 250 }}>
      <p className="mv2 fw6">Cài đặt</p>
      <p className="mt4 ma0 mb1 label">Giới hạn thời gian</p>
      <Select value={crrQuiz.timeLimit} onChange={onChangeTime}>
        {TimeLimit.map((sec) => {
          return (
            <Option key={sec.count} value={sec.count}>
              {sec.title}
            </Option>
          );
        })}
      </Select>
      <p className="mt4 ma0 mb1 label">Điểm số</p>
      <Select value={crrQuiz.point} onChange={onChangePoint}>
        {QuizScore.map((s) => {
          return (
            <Option key={s.title} value={s.value}>
              {s.title}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export const CreateScreen: IComponent<IScreenProps> = () => {
  const [crrId, setCrrId] = useState<null | string>(null);
  const [quiz, setQuiz] = useState<IQuiz[]>(fake);

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
