import { Button, Icon } from '@library/haloLib';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import BackgroundEndImage from '../public/endgame.jpg';
import BackgroundImage from '../public/login.png';
import BackgroundGameImage from '../public/quizbg.jpg';

const Background: IComponent<{ opa?: number; zIndex?: number }> = ({ zIndex = -1 }) => {
  return (
    <div className="w-100" style={{ zIndex }}>
      <Image src={BackgroundImage} layout="fill" objectFit="contain" placeholder="blur" priority />
    </div>
  );
};

const BackgroundEnd: IComponent<{ opa?: number; zIndex?: number }> = () => {
  return (
    <div className="absolute w-100 h-100 top-0 left-0" style={{ zIndex: 0 }}>
      <Image
        src={BackgroundEndImage}
        layout="fill"
        objectPosition="top"
        objectFit="cover"
        placeholder="blur"
        priority
      />
    </div>
  );
};

const BackgroundGame: IComponent<{ opa?: number; zIndex?: number }> = ({ zIndex = 0 }) => {
  return (
    <div className="absolute top-0 left-0 w-100 h-100" style={{ zIndex }}>
      <Image
        src={BackgroundGameImage}
        layout="fill"
        objectPosition="top"
        objectFit="cover"
        placeholder="blur"
        priority
      />
    </div>
  );
};

const MapContent: IComponent<{ onPress: () => void }> = ({ onPress }) => {
  const [img, setImg] = useState<string | null>(null);

  useEffect(() => {
    void axios.get('http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh').then((res) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const currentDate = new Date(res.data.datetime);
      let mapName = 1108;
      switch (currentDate.getDate()) {
        case 12:
          mapName = 1208;
          break;
        case 13:
          mapName = 1308;
          break;
        default:
          mapName = 1108;
      }
      void axios
        .get(`/${mapName}.jpg`, { responseType: 'blob' })
        .then((response) => {
          const image = response.data as Blob;
          setImg(URL.createObjectURL(image));
        })
        .catch((e) => console.log(e));
    });
  }, []);

  return (
    <div className="vw-100 h-100 relative center-items">
      {!img && (
        <div className="flex flex-row center-items">
          <Icon name="LoadingIcon" />
          <p className="pl3">Đang tải, vui lòng đợi chút...</p>
        </div>
      )}
      {!!img && (
        <>
          <img
            alt="map-content"
            src={img}
            className="w-100 h-100"
            style={{ objectFit: 'contain' }}
          />
          <div className="absolute right-1 bottom-1">
            <Button
              customClassName="nowrap animate__animated animate__fadeInRight"
              primary
              type="info"
              onClick={onPress}>
              Tiếp tục
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

const MemoBg = React.memo(Background);
const MemoEnd = React.memo(BackgroundEnd);
const MemoGame = React.memo(BackgroundGame);
const MemoContent = React.memo(MapContent);

export {
  MemoBg as Background,
  MemoEnd as BackgroundEnd,
  MemoGame as BackgroundGame,
  MemoContent as MapContent,
};
