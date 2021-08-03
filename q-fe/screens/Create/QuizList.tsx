import { cx, Icon, Tag, Tooltip, XyzGroup } from '@library/haloLib';
import { useMemo } from 'react';

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

export { QuizList };
