import { addPoint, getUserList } from '@apis/user';
import { BaseConfig } from '@configs/base';
import { answerColors } from '@configs/color';
import { Button, cx } from '@library/haloLib';
import { atomUserInfo } from '@recoil/app';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import TextTransition from 'react-text-transition';
import { useRecoilValue } from 'recoil';

/**
 * Declare screen props
 */
interface IScreenProps {
  quiz?: IQuiz[];
}

export const PlayScreen: IComponent<IScreenProps> = ({ quiz }) => {
  const userInfo = useRecoilValue(atomUserInfo);
  const [currentIdxCard, setCurrentIdxCard] = useState(-1);
  const [time, setTime] = useState(5);
  const [answIdx, setAnswIdx] = useState<number | null>(null);
  const [isTheEnd, setTheEnd] = useState(false);
  const [topScore, setTopScore] = useState([312, 12312, 13241]);
  const [, setUsers] = useState<IUser[]>([]);

  const timeRef = useRef<number>(5);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const answIdxRef = useRef<number | null>(null);
  const [currentScore, setCurrentScore] = useState(0);

  const getPointPercent = (point: number, quizTime) => {
    const percent = time / quizTime;

    return Math.round(percent * point);
  };

  const handleNextQuest = () => {
    if (quiz[currentIdxCard + 1]) {
      setCurrentIdxCard(currentIdxCard + 1);
      setAnswIdx(null);
      answIdxRef.current = null;
    } else {
      setTheEnd(true);
    }
  };

  const handleOnAnswerCard = (idx: number) => {
    if (answIdxRef.current !== null) {
      return;
    }
    answIdxRef.current = idx;
    setAnswIdx(idx);
    const quizInfo = quiz[currentIdxCard];
    if (quizInfo.rightAnswer === idx) {
      window.dispatchEvent(new CustomEvent('RIGHT'));
      const addScore = getPointPercent(quizInfo.point, quizInfo.timeLimit);
      setCurrentScore((prev) => prev + addScore);
      void addPoint({
        userId: userInfo.id,
        quizId: quizInfo.id,
        quizListId: quizInfo.quizListId,
        addPoint: addScore,
      });
    } else {
      window.dispatchEvent(new CustomEvent('WRONG'));
    }
  };

  const timeoutMTF = () => {
    if (currentIdxCard === -1) {
      setCurrentIdxCard(currentIdxCard + 1);
      setAnswIdx(null);
      answIdxRef.current = null;
    } else {
      answIdxRef.current = 5;
      setAnswIdx(5);
      window.dispatchEvent(new CustomEvent('WRONG'));
    }
  };

  const onPause = () => {
    if (answIdxRef.current === -2) {
      return;
    }
    answIdxRef.current = -2;
    setAnswIdx(-2);
    // setTimeout(() => {
    //   handleNextQuest();
    // }, 1500);
  };

  useEffect(() => {
    if (quiz && quiz[currentIdxCard]) {
      setTime(quiz[currentIdxCard].timeLimit);
      if (quiz[currentIdxCard]) {
        timeRef.current = quiz[currentIdxCard].timeLimit;
      }
    }
    timerRef.current = setInterval(() => {
      if (answIdxRef.current !== null) {
        onPause();
        return;
      }
      if (timeRef.current <= 0) {
        // handleNextQuest();
        timeoutMTF();
      }
      if (timeRef.current > 0) {
        setTime((prev) => prev - 0.2);
        timeRef.current -= 0.2;
      }
    }, 200);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentIdxCard]);

  const renderGame = useMemo(() => {
    if (currentIdxCard === -1) {
      return (
        <div className="flex flex-auto center-items flex-column">
          <h4>Bắt đầu trong</h4>
          <span className="fe4 fw6 gray">{Math.round(time)}</span>
        </div>
      );
    }
    if (!quiz || quiz.length === 0) {
      return <div />;
    }
    const quizInfo = quiz[currentIdxCard];
    const timePercent = (time * 100) / quizInfo.timeLimit;
    return (
      <div className="flex flex-auto center-items flex-column h-100 w-100 animate__animated animate__fadeIn">
        <div className="w-100 h3 flex">
          <div
            className={cx('h-100 transition__faster', {
              'bg-green': timePercent > 80,
              'bg-orange': timePercent > 30 && timePercent <= 80,
              'bg-red': timePercent <= 30,
            })}
            style={{
              width: `${timePercent}%`,
            }}
          />
        </div>
        <p className="fe4-ns f6 tc ph3 fw6">{quizInfo.quizContent}</p>
        <div className="w-100 flex-auto pa3 center-items" style={{ minHeight: '50vh' }}>
          <img
            style={{ objectFit: 'contain' }}
            alt={quizInfo.quizContent}
            className="h-100 w-100 w-75-m w-50-l br3 ba b--light-gray"
            src={`${BaseConfig.endPoint}${quizInfo.mediaLink}`}
          />
        </div>
        <div
          className="flex flex-auto flex-wrap w-100 h-100 relative center-items"
          style={{ minHeight: 120 }}>
          {answIdx !== null && (
            <div className="absolute h-100 w-100 bg-white-40 center-items animate__animated animate__fadeIn">
              <div className="fe7">
                <Button primary type="info" size="large" onClick={handleNextQuest}>
                  Câu hỏi tiếp theo
                </Button>
              </div>
            </div>
          )}
          {Array(4)
            .fill('')
            .map((_, idx) => {
              let colorBackground = answerColors[idx];
              if (answIdx !== null) {
                colorBackground = idx === quizInfo.rightAnswer ? 'green' : '#FE7161';
              }
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={idx} className="w-50 h-50 flex">
                  <button
                    type="button"
                    onClick={() => handleOnAnswerCard(idx)}
                    className="ma2 flex-auto br3 flex flex-row overflow-hidden b--light-gray ba shadow-3 scale bn bg-transparent pa0 pointer">
                    <div
                      className="flex flex-auto center-items white fw6 h-100"
                      style={{
                        background: colorBackground,
                      }}>
                      <p className="fe7 fe6-m fe5-l">{quizInfo.answers[idx]}</p>
                    </div>
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }, [currentIdxCard, time, answIdx]);

  useEffect(() => {
    if (isTheEnd) {
      void getUserList().then((data) => {
        setUsers(data);
        setTopScore(
          data
            .sort((a, b) => b.point - a.point)
            .slice(0, 3)
            .map((a) => a.point)
        );
      });
    }
  }, [isTheEnd]);

  if (!quiz || quiz.length === 0) {
    return (
      <div className="flex-auto h-100 center-items fe7 gray">
        <p>Màn chơi không tồn tại</p>
      </div>
    );
  }

  if (isTheEnd) {
    return (
      <div className="w-100 center-items flex-column vh-100 overflow-auto pa3">
        <p className="fe2-ns fe7 b gray tc">
          Chúc mừng bạn đã xuất sắc hoàn thành Thử thách A-thông-thái
        </p>
        {/* <p className="ma0 fe7">Hiện tại có {users.length} người tham gia</p> */}
        <p className="ma0 fe7 fe5-ns">Tổng số điểm của bạn là</p>
        <p style={{ fontSize: 64, color: '#004EDA' }} className="fw6">
          {currentScore}
        </p>
        <div className="w-100">
          <p className="label fe7 fe4-ns">Điểm số cao nhất hiện tại là</p>
          {topScore.map((score, idx) => {
            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="flex w-100 flex-row ph3 fe7 fe4-ns"
                style={{ background: idx % 2 === 0 ? '#eee' : 'transparent' }}>
                <p>A-thông-thái {idx + 1}</p>
                <div className="flex-auto" />
                <p>{score}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-100 h-100 relative flex center-items flex-column">
      {renderGame}
      <div className="w-100 center-items pa3 mt1 shadow-4">
        Score: <TextTransition className="ml2" text={currentScore} />
      </div>
    </div>
  );
};
