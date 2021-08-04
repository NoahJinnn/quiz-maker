import { BaseConfig } from '@configs/base';
import { colorByIndex } from '@configs/color';
import { cx, Image, Input, SpinView, Toggle, Tooltip, XyzGroup } from '@library/haloLib';
import { ChangeEventHandler, DragEventHandler, useEffect, useRef, useState } from 'react';

export const QuizContent: IComponent<{
  crrQuiz: null | IQuiz;
  isUploading?: boolean;
  onUploadFile?: (f: File) => void;
  updateQuizAnswer?: (idx: number, content: string) => void;
  handleOnChageQuizContent: (ev) => void;
  handleChangeCorrectAnswer: (idx: number) => void;
}> = ({
  handleOnChageQuizContent,
  crrQuiz,
  isUploading,
  onUploadFile,
  updateQuizAnswer,
  handleChangeCorrectAnswer,
}) => {
  const [isDragging, setDragging] = useState(false);
  const [isHoverImage, setHoverImage] = useState(false);
  const uploadImgRef = useRef<HTMLInputElement | null>(null);

  const handleOnDrag: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setDragging(false);
    setHoverImage(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      onUploadFile?.(droppedFiles.item(0));
    }
  };
  const handleOnDragPrevent: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setDragging(true);
    setHoverImage(true);
  };
  const handleOnDragLeave: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setDragging(false);
    setHoverImage(false);
  };

  const handleUploadImage: ChangeEventHandler<HTMLInputElement> = (ev) => {
    const { files } = ev.target;
    if (files.length > 0) {
      onUploadFile?.(files.item(0));
    }
  };

  const handlePressImageUpload = () => {
    uploadImgRef.current?.click();
  };

  const handleHoverImage = () => setHoverImage(true);
  const handleBlurImage = () => setHoverImage(false);

  useEffect(() => {
    window.addEventListener('dragover', handleOnDragPrevent as any, false);
    window.addEventListener('drop', handleOnDragPrevent as any, false);
    return () => {
      window.removeEventListener('dragover', handleOnDragPrevent as any);
      window.removeEventListener('drop', handleOnDragPrevent as any);
    };
  }, []);

  return (
    <div className="flex flex-auto flex-column pa6">
      <input
        multiple
        ref={uploadImgRef}
        className="dn"
        type="file"
        accept="image/x-png, image/gif, image/jpeg"
        onChange={handleUploadImage}
      />
      <Input
        prefixIcon={<span className="nowrap fw6 gray">Câu hỏi</span>}
        onChange={handleOnChageQuizContent}
        value={crrQuiz?.quizContent || ''}
        placeholder="Đây là cái gì?"
      />
      <div className="flex flex-auto flex-column mt3">
        <SpinView
          spinning={isUploading}
          tip="Đang tải lên..."
          wrapperClassName="flex flex-auto w-100 center-items">
          <div
            aria-hidden
            onMouseEnter={handleHoverImage}
            onMouseLeave={handleBlurImage}
            onClick={handlePressImageUpload}
            onDrop={handleOnDrag}
            onDragOver={handleOnDragPrevent}
            onDragEnter={handleOnDragPrevent}
            onDragLeave={handleOnDragLeave}
            className="mv3 w-100"
            style={{ height: '40vh' }}>
            <div
              className={cx(
                'br3 ba b--dashed h-100 center-items gray pointer noselect transition__faster overflow-hidden relative',
                {
                  'b--gray': !isDragging,
                  'b--green': isDragging,
                }
              )}>
              {crrQuiz?.mediaLink && (
                <>
                  <XyzGroup xyz="fade down-4" className="absolute bottom-0 left-0 w-100">
                    {isHoverImage && (
                      <div className="w-100 bg-dark-green tc pv1 shadow-3">
                        <p className="ma0 white label">Thêm ảnh mới</p>
                      </div>
                    )}
                  </XyzGroup>
                  <Image
                    alt={crrQuiz.id}
                    src={`${BaseConfig.endPoint}${crrQuiz.mediaLink}`}
                    customClassName="w-100 h-100"
                    customStyles={{ objectFit: 'contain' }}
                    fallbackSrc={<span className="ph7">Kéo thả hoặc chọn để thêm hình ảnh</span>}
                  />
                </>
              )}
              {!crrQuiz?.mediaLink && (
                <span className="ph7">Kéo thả hoặc chọn để thêm hình ảnh</span>
              )}
            </div>
          </div>
        </SpinView>
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
                      <textarea
                        className="h-100 w-100 bn outline-0 pa3 f7"
                        onChange={(ev) => updateQuizAnswer(idx, ev.target.value)}
                        value={crrQuiz?.answers[idx] || ''}
                      />
                    </div>
                    <div
                      className={cx('h-100 center-items ph3 bl b--light-gray transition__faster', {
                        'bg-lightest-green': crrQuiz?.rightAnswer === idx,
                      })}>
                      <Tooltip title="Chọn câu đúng">
                        <Toggle
                          size="large"
                          checked={crrQuiz?.rightAnswer === idx}
                          onChange={() => handleChangeCorrectAnswer(idx)}
                        />
                      </Tooltip>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
