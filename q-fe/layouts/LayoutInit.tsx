import { AlertToastContainer, Portal } from '@library/haloLib';
import React from 'react';

const LayoutInit: IComponent = ({ children }) => {
  return (
    <div className="w-100 vh-100 bg-med">
      {children}
      <Portal>
        <AlertToastContainer />
      </Portal>
    </div>
  );
};

export { LayoutInit };
