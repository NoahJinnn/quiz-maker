import { BaseConfig } from '@configs/base';
import { TimeLimit } from '@configs/time';
import { Button, Input, Option, Select } from '@library/haloLib';
import { ChangeEvent } from 'react';

const QuizSetting: IComponent<{
  crrQuiz: IQuiz;
  onChangePoint?: (p: number) => void;
  onChangeTime?: (t: number) => void;
  onPressDelete?: (id: string) => void;
}> = ({ crrQuiz, onChangePoint, onChangeTime, onPressDelete }) => {
  const handlePressDel = () => onPressDelete?.(crrQuiz?.id);

  const handleChangePoint = (ev: ChangeEvent<HTMLInputElement>) => {
    onChangePoint?.(parseInt(ev.target.value, 10));
  };

  return (
    <div className="xyz-in h-auto overflow-auto shadow-4 pa3" style={{ width: 250 }}>
      <p className="mv2 fw6">Cài đặt</p>
      <p className="mt4 ma0 mb1 label">Giới hạn thời gian</p>
      <Select value={crrQuiz?.timeLimit || 10} onChange={onChangeTime}>
        {TimeLimit.map((sec) => {
          return (
            <Option key={sec.count} value={sec.count}>
              {sec.title}
            </Option>
          );
        })}
      </Select>
      <p className="mt4 ma0 mb1 label">Điểm số</p>
      <Input
        value={crrQuiz ? crrQuiz?.point : BaseConfig.defaultPoint}
        placeholder="Nhập điểm số câu hỏi!"
        onChange={handleChangePoint}
      />
      <div className="pt4 flex center-items">
        <Button onClick={handlePressDel} type="danger" block size="small">
          Xóa câu hỏi
        </Button>
      </div>
    </div>
  );
};

export { QuizSetting };
