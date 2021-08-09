/* eslint-disable jsx-a11y/media-has-caption */
import { AlertToastContainer, Portal } from '@library/haloLib';
import React, { useEffect } from 'react';

const LayoutInit: IComponent = ({ children }) => {
  const playRight = () => {
    const audio: HTMLAudioElement = document.getElementById('rightSound') as any;
    if (audio) {
      void audio.play();
    }
  };

  const playWrong = () => {
    const audio: HTMLAudioElement = document.getElementById('wrongSound') as any;
    if (audio) {
      void audio.play();
    }
  };

  const lowerBg = () => {
    const audio: HTMLAudioElement = document.getElementById('bgSound') as any;
    audio.volume = 0.2;
  };

  useEffect(() => {
    window.addEventListener('RIGHT', playRight, true);
    window.addEventListener('WRONG', playWrong, true);
    window.addEventListener('BACKGROUND', lowerBg, true);
    return () => {
      window.removeEventListener('RIGHT', playRight);
      window.removeEventListener('WRONG', playWrong);
      window.removeEventListener('BACKGROUND', lowerBg);
    };
  }, []);

  return (
    <div className="w-100 vh-100 bg-med">
      <audio preload="auto" id="rightSound" src="/audios/right_answer.mp3" />
      <audio preload="auto" id="wrongSound" src="/audios/wrong_answer.mp3" />
      <audio preload="auto" id="bgSound" src="/audios/background.mp3" />
      {children}
      <Portal>
        <AlertToastContainer />
      </Portal>
    </div>
  );
};

export { LayoutInit };
