import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { createUser } from '@apis/user';
import { Button, Input, showToastAlert } from '@library/haloLib';
import { typeRule } from '@library/haloLib/utils/validator/validators/type';
import { atomUserInfo } from '@recoil/app';

const LayoutPlayQuiz: IComponent = ({ children }) => {
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);
  // const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  // const handleUserNameChange = (ev: ChangeEvent<HTMLInputElement>) => setUserName(ev.target.value);
  const handleUserIdChange = (ev: ChangeEvent<HTMLInputElement>) => setUserId(ev.target.value);

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
          title: 'Có lỗi xảy ra',
          subTitle: 'Vui lòng thử lại sau',
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
      document.body.addEventListener('mousemove', function () {
        try {
          audio.play();
        } catch (error) {}
      });
    }
  }, []);

  if (!userInfo) {
    return (
      <div className="flex h-100 w-100 center-items flex-column animate__animated animate__fadeIn">
        <p className="ma0 mw8 fe3 fw6 tc pb3">
          Tiếp nối hoạt động A-tươi-mới, đổi khung ảnh đại diện để lan tỏa thông điệp Tin Yêu trên
          Facebook, chào mừng bạn đến với hoạt động thứ 2 mừng Sinh nhật Aviva lên 4 - A-thông-thái
        </p>
        <p className="ma0 fe5 tc">
          Hãy điền email để tham gia thể hiện sự Thông thái của bạn đi nào!
        </p>
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
    );
  }
  return <div className="w-100 vh-100 bg-med">{children}</div>;
};

export { LayoutPlayQuiz };
