import { QuizScore } from '@configs/score';
import { TimeLimit } from '@configs/time';
import { Button, Option, Select } from '@library/haloLib';

const QuizSetting: IComponent<{
  crrQuiz: IQuiz;
  onChangePoint?: (p: number) => void;
  onChangeTime?: (t: number) => void;
  onPressDelete?: (id: string) => void;
}> = ({ crrQuiz, onChangePoint, onChangeTime, onPressDelete }) => {
  const handlePressDel = () => onPressDelete?.(crrQuiz.id);
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
      <Select value={crrQuiz ? crrQuiz.point : 100} onChange={onChangePoint}>
        {QuizScore.map((s) => {
          return (
            <Option key={s.title} value={s.value}>
              {s.title}
            </Option>
          );
        })}
      </Select>
      <div className="pt4 flex center-items">
        <Button onClick={handlePressDel} type="danger" block size="small">
          Xóa câu hỏi
        </Button>
      </div>
    </div>
  );
};

export { QuizSetting };
