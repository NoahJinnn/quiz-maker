import './index.scss';
import { IComponent } from "../../global.types";
import React, { CSSProperties } from 'react';
export interface IImageProps {
    /**
     * Alt of <img />
     */
    alt?: string;
    /**
     * src of <img />
     */
    src?: string;
    /**
     * Image (svg) of <img /> if src fail
     */
    fallbackSrc?: string | React.ReactNode | JSX.Element;
    /**
     * Custom style for fallback
     */
    customStyles?: CSSProperties;
    /**
     * Name of Image, if image fail will show 2 letter of name
     */
    name?: string;
    /**
     * Custom class name to overide css (if needed)
     */
    customClassName?: string;
    /**
     * Number of letter to show if src fail (Max = 2, defaukt = 1)
     */
    numberLetter?: number;
    width?: string | number;
    height?: string | number;
}
declare const Memo: IComponent<IImageProps>;
export { Memo as Image };
