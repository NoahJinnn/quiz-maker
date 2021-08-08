import { Button, Icon } from '@library/haloLib';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import BackgroundImage from '../public/background.png';

export const Background: IComponent<{ opa?: number; zIndex?: number }> = ({
  opa = 0.2,
  zIndex = -1,
}) => {
  return (
    <div className="absolute top-0 left-0 w-100 h-100" style={{ zIndex, opacity: opa }}>
      <Image src={BackgroundImage} layout="fill" placeholder="blur" />
    </div>
  );
};

export const Map1Content: IComponent<{ onPress: () => void }> = ({ onPress }) => {
  const [img, setImg] = useState<string | null>(null);

  useEffect(() => {
    void axios.get('/map1.png', { responseType: 'blob' }).then((response) => {
      const image = response.data as Blob;
      setImg(URL.createObjectURL(image));
    });
  }, []);

  return (
    <div className="w-100 h-100 relative center-items">
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
            <Button customClassName="nowrap" primary type="info" onClick={onPress}>
              Tiếp tục
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
