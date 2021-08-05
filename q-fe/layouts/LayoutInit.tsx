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

  useEffect(() => {
    window.addEventListener('RIGHT', playRight, true);
    window.addEventListener('WRONG', playWrong, true);
    return () => {
      window.removeEventListener('RIGHT', playRight);
      window.removeEventListener('WRONG', playWrong);
    };
  }, []);

  return (
    <div className="w-100 vh-100 bg-med">
      <audio id="rightSound" src="/audios/right_answer.mp3" />
      <audio id="wrongSound" src="/audios/wrong_answer.mp3" />
      {children}
      <Portal>
        <AlertToastContainer />
      </Portal>
    </div>
  );
};

export { LayoutInit };
