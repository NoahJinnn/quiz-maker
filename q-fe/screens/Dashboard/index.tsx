import React from 'react';
/**
 * Declare screen props
 */
interface IScreenProps {}

export const DashboardScreen: IComponent<IScreenProps> = () => {
  return (
    <div className="w-100 h-100 relative overflow-auto hover-scroll center-items">HELLO WORLD!</div>
  );
};
