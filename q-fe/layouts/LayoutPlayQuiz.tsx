import { createUser } from '@apis/user';
import { Button, Input, showToastAlert } from '@library/haloLib';
import { atomUserInfo } from '@recoil/app';
import React, { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';

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

  if (!userInfo) {
    return (
      <div className="flex h-100 w-100 center-items flex-column animate__animated animate__fadeIn">
        <p className="ma0 fe3 fw6 tc">Cho mình xin thông tin nhé!</p>
        <p className="ma0 fe5 tc">Vui lòng điền email nhân viên</p>
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
