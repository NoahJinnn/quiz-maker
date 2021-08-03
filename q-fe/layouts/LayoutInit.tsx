import React from 'react';

const LayoutInit: IComponent = ({ children }) => {
  return <div className="w-100 vh-100 bg-med">{children}</div>;
};

export { LayoutInit };
