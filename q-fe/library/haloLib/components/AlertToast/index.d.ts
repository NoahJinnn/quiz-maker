import './index.scss';
import { TComponentAlertColor } from "../../global.types";
import React from 'react';
/**
 * Toast positions
 */
declare type TAlertPosition = 'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
/**
 * Toast alert data
 */
export interface IAlertToastProps {
    /**
     * Id of toast
     */
    id?: string;
    /**
     * Title of toast
     */
    title: string;
    /**
     * Subtitle (content) for toast
     */
    subTitle?: string | React.ReactNode;
    /**
     * Toast's position
     */
    position?: TAlertPosition;
    /**
     * Type of toast (null for default toast)
     */
    type?: TComponentAlertColor;
    /**
     * Toast duration (current dont have duration)
     */
    duration?: number;
    /**
     * Allow close toast by button and swipe
     */
    allowClose?: boolean;
    /**
     * On click toast
     */
    onClick?: () => void;
    /**
     * On toast closed
     */
    onClose?: () => void;
    /**
     * Icon for toast
     */
    Icon?: React.ReactNode;
}
/**
 * Make an toast alert and return its id
 * @param opts Alert information
 */
export declare const showToastAlert: (opts: IAlertToastProps) => string;
/**
 * Clear toast by id
 * @param id Id of toast
 */
export declare const clearToastAlert: (id?: string | undefined) => void;
export declare const updateToastAlert: ({ id, subTitle, title }: IAlertToastProps) => void;
declare const MemoContainer: React.NamedExoticComponent<{
    children?: React.ReactNode;
}>;
export { MemoContainer as AlertToastContainer };
