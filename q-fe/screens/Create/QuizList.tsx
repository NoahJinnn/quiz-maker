import {
  Button,
  cx,
  Icon,
  showToastAlert,
  SpinView,
  Tag,
  Tooltip,
  XyzGroup,
} from '@library/haloLib';
import { useEffect, useMemo, useState } from 'react';

const QuizList: IComponent<{
  crrId: string;
  onPressQuiz: (id: string) => void;
  quiz: IQuiz[];
  onPressAdd?: () => void;
}> = ({ crrId, quiz, onPressQuiz, onPressAdd }) => {
  const [loading, setLoading] = useState(false);

  const handleCopyLink = () => {
    const link = `${window.location.origin}/play?listId=${quiz[0].quizListId}`;
    void navigator.clipboard.writeText(link).then(() => {
      showToastAlert({
        title: 'Thành công',
        subTitle: 'Đã copy link',
        position: 'top-right',
        duration: 3000,
        type: 'success',
      });
    });
  };

  const handlePressAdd = () => {
    setLoading(true);
    onPressAdd?.();
  };

  const renderQuiz = useMemo(() => {
    return quiz.map((q, idx) => {
      const onSel = () => onPressQuiz(q.id);
      return (
        <button
          type="button"
          key={q.id}
          onClick={onSel}
          className={cx(
            'w-100 br3 ba flex flex-column mv2 pa2 scale pointer bg-transparent tl relative',
            {
              'b--gray': crrId !== q.id,
              'b--blue': crrId === q.id,
              'shadow-3': crrId === q.id,
            }
          )}>
          <div className="flex">
            <Tag title={`Câu ${idx + 1}`} color="info" />
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

  useEffect(() => {
    setLoading(false);
  }, [quiz]);

  return (
    <div className="h-100 overflow-auto shadow-4 pa3" style={{ minWidth: 250, maxWidth: 250 }}>
      <SpinView spinning={loading} tip="Đang tải dữ liệu">
        <Button block primary onClick={handleCopyLink} type="info">
          Lấy link trả lời
        </Button>
        <p className="mv2 fw6">Danh sách</p>
        <XyzGroup xyz="stagger-0.5 fade left-1" className="flex flex-column">
          {renderQuiz}
        </XyzGroup>
        <button
          type="button"
          onClick={handlePressAdd}
          className="br3 ba b--dashed tc pv4 scale pointer b--gray center-items gray bg-transparent w-100">
          <Icon name="AddIcon" className="mr2" />
          Thêm câu hỏi
        </button>
      </SpinView>
    </div>
  );
};

export { QuizList };
