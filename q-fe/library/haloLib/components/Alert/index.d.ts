import './index.scss';
import { IComponent, TComponentAlertColor, TSize2Tier } from "../../global.types";
import React from 'react';
export interface IAlertProps {
    /**
     * Title of Alert
     */
    title: string;
    /**
     * Content of Alert
     */
    content?: string | React.ReactNode;
    /**
     * Size of Alert
     */
    size?: TSize2Tier;
    /**
     * Function when click Alert
     */
    onClick?: () => void;
    /**
     * Hide button cancel
     */
    isShowCancel?: boolean;
    /**
     * Duration to auto close Alert
     */
    duration?: number;
    /**
     * Type (status) of Alert (danger | warning | success | danger | default)
     */
    type?: TComponentAlertColor;
    /**
     * Icon position at top-right
     */
    suffix?: boolean;
    /**
     * Icon position at top-left
     */
    prefix?: boolean;
    /**
     * Icon of alert
     */
    Icon?: React.ReactNode;
    /**
     * color of progress bar (duration) of alert
     */
    customBgColorProgress?: string;
    /**
     * Callback function when click close button
     */
    onCloseAlert?: () => void;
    /**
     * Extra class for alert
     */
    className?: string;
    /**
     * Allow swipe to close with direction
     */
    allowSwipeDirection?: 'left' | 'right' | 'top';
    /**
     * Offset trigger close swipe
     */
    allowOffset?: number;
}
export declare const AlertIcon: {
    Error: import("../../global.types").ISvgComponent<{}>;
    Info: import("../../global.types").ISvgComponent<{}>;
    Success: import("../../global.types").ISvgComponent<{}>;
    Close: import("../../global.types").ISvgComponent<{}>;
};
declare const Memo: IComponent<IAlertProps>;
export { Memo as Alert };
