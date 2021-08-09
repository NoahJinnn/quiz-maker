import axios from 'axios';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { createUser } from '@apis/user';
import { Background, MapContent } from '@components/Background';
import { Button, Icon, Input, showToastAlert } from '@library/haloLib';
import { atomUserInfo } from '@recoil/app';

import BackgroundImage from '../public/login.png';

const LayoutPlayQuiz: IComponent = ({ children }) => {
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  // const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [passCheckpoint, setPassCheckpoint] = useState(false);
  const [img, setImg] = useState<string | null>(null);

  const bgPlayingRef = useRef(false);

  // const handleUserNameChange = (ev: ChangeEvent<HTMLInputElement>) => setUserName(ev.target.value);
  const handleUserIdChange = (ev: ChangeEvent<HTMLInputElement>) => setUserId(ev.target.value);

  const handlePressCheckpoint = () => setPassCheckpoint(true);

  const handlePressStart = () => {
    if (!userId) {
      showToastAlert({
        title: 'Yêu cầu',
        subTitle: 'Nhập đầy đủ thông tin',
        duration: 3000,
        position: 'top-right',
        type: 'warning',
      });
      return;
    }
    void createUser('', userId)
      .then((data) => {
        setUserInfo(data);
      })
      .catch(() => {
        showToastAlert({
          title: 'Email đã thực hiện vòng chơi!',
          subTitle: 'Vui lòng nhập 1 email khác',
          duration: 3000,
          position: 'top-right',
          type: 'warning',
        });
      });
  };

  useEffect(() => {
    const audio: HTMLAudioElement = document.getElementById('bgSound') as any;
    audio.volume = 0.5;
    if (audio) {
      // Should be on click
      document.body.addEventListener('mousedown', () => {
        try {
          if (bgPlayingRef.current === false) {
            void audio.play();
            bgPlayingRef.current = true;
          }
        } catch (error) {
          // Should handle this err
        }
      });
    }
    void axios
      .get(`/login.png`, { responseType: 'blob' })
      .then((response) => {
        const image = response.data as Blob;
        setImg(URL.createObjectURL(image));
      })
      .catch((e) => console.log(e));
  }, []);

  if (!userInfo) {
    return !!img ? (
      <div className="flex h-100 w-100 center-items flex-column animate__animated animate__fadeIn relative">
        <Background />
        <p style={{ paddingTop: '20%' }} className="ma0 mw8 fe5 fw6 tc pb3">
          Chào mừng bạn đến với hoạt động thứ 2 mừng Sinh nhật Aviva _ 4 năm Tin Yêu
        </p>
        <p className="ma0 fe5 tc">
          Hãy điền email để tham gia thể hiện sự “Thông thái” của bạn về Aviva đi nào!
        </p>
        <p className="ma0 fe5 tc">Ví dụ: a.nguyenvan@aviva.com.vn</p>
        <div className="pb5 pt5">
          <Input
            onChange={handleUserIdChange}
            value={userId}
            placeholder="Nhập đầy đủ email"
            required
          />
        </div>
        <Button customClassName="fe5" primary type="info" size="medium" onClick={handlePressStart}>
          Bắt đầu
        </Button>
      </div>
    ) : (
      <div className="flex flex-row center-items h-100">
        <Icon name="LoadingIcon" />
        <p className="pl3">Đang tải, vui lòng đợi chút...</p>
      </div>
    );
  }
  if (!passCheckpoint) {
    return <MapContent onPress={handlePressCheckpoint} />;
  }
  return <div className="w-100 vh-100 bg-white relative">{children}</div>;
};

export { LayoutPlayQuiz };
