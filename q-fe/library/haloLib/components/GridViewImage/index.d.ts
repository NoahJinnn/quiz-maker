import './index.scss';
import React from 'react';
export interface IGridViewImageProps<T = {
    url?: string;
    name?: string;
}> {
    /**
     * Data record array to be displayed, object[]
     */
    photos?: T[];
    /**
     * Callback function when click Image
     */
    onClickImage?: (data: T) => void;
    /**
     * Callback function when click backdrop
     */
    onClickMore?: () => void;
    /**
     * Custom class name to override css
     */
    customClassName?: string;
    /**
     * fallbackSrc if src of image death
     */
    fallbackSrc?: string;
    /**
     * fallbackSrc if src of image death
     */
    imageKey?: keyof T;
}
declare const Memo: <T extends {}>({ photos, onClickImage, customClassName, imageKey, onClickMore, fallbackSrc, }: IGridViewImageProps<T & {
    url?: string | undefined;
    name?: string | undefined;
}>) => React.ReactElement;
export { Memo as GridViewImage };
