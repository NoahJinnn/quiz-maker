import { Button } from '@library/haloLib';
import Image from 'next/image';

import BackgroundImage from '../public/background.png';
import Map1Image from '../public/map1.png';

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
  return (
    <div className="w-100 h-100 relative center-items">
      <div className="w-100 h-100">
        <Image src={Map1Image} layout="fill" placeholder="blur" objectFit="contain" />
      </div>
      <div className="absolute right-1 bottom-1">
        <Button customClassName="nowrap" primary type="info" onClick={onPress}>
          Tiếp tục
        </Button>
      </div>
    </div>
  );
};
