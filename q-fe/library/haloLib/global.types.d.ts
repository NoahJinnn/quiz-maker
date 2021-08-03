/// <reference types="react" />
export interface ISvgComponentProps {
    width?: string | number;
    height?: string | number;
    color?: string;
    viewBox?: string;
    opacity?: string | number;
    className?: string;
}
export declare type IComponent<T = {}> = React.FC<React.PropsWithChildren<T>>;
export declare type ISvgComponent<T = {}> = IComponent<ISvgComponentProps & T>;
export declare type TSize2Tier = 'small' | 'large';
export declare type TSize3Tier = 'small' | 'medium' | 'large';
export declare type TSize4Tier = 'xsmall' | 'small' | 'medium' | 'large';
export declare type TMarginSize = TSize3Tier | 'none';
export declare type TUserStatus = 'away' | 'online' | 'offline';
export declare type TComponentAlertColor = 'info' | 'danger' | 'success' | 'warning';
export declare type TComponentColor = TComponentAlertColor | 'blue' | 'red' | 'green' | 'orange' | 'gray' | 'black' | 'white';
export declare type TComponentColorAddon = TComponentColor | 'teal' | 'gray' | 'purple' | TUserStatus;
export declare type TDefaultPlacement = 'top' | 'left' | 'bottom' | 'right';
export declare type TComponentPlacement = 'default' | TDefaultPlacement | 'bottomRight' | 'bottomLeft' | 'topLeft' | 'topRight';
export declare type TComponentAnimateSpeed = 'normal' | 'fast' | 'faster' | 'fastest';
export declare type TComponentDropdownPlacement = TDefaultPlacement | 'top-left' | 'top-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' | 'bottom-right' | 'bottom-left';
export declare type TImageProps = Partial<JSX.IntrinsicElements['img']>;
