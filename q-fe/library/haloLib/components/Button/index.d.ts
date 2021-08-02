/**
 * App darkmode HOC
 */
import './index.scss';
import { IComponent, TComponentColor, TSize3Tier } from "../../global.types";
import React, { CSSProperties } from 'react';
/**
 * children: Text of button or Icon
 * onClick: callback function
 * customClassName: className to customize button css
 * size: Set the size of button -> small | medium | large
 * shape: Set the shape of button -> 'rectangle' | 'square' | 'circle'
 * type: 'info' | 'danger' | 'success' | 'warning'
 * disabled: Not allow to click if true
 * primary: is have background color, if false === outline (is not have background color)
 * block: Option to fit button width to its parent width
 * loading: Show loading when click button
 * loadingIcon: Icon when loading is show :D
 * radius: Make radius button
 * customStyle: Custom css for user :D
 */
export interface IButtonProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    customClassName?: string;
    size?: TSize3Tier;
    shape?: 'rectangle' | 'square' | 'circle';
    type?: TComponentColor;
    disabled?: boolean;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    primary?: boolean;
    block?: boolean;
    loading?: boolean;
    loadingIcon?: React.ReactNode;
    radius?: boolean;
    customStyle?: Partial<CSSProperties>;
    children?: string;
    htmlType?: 'button' | 'submit' | 'reset';
}
declare const Memo: IComponent<IButtonProps>;
export { Memo as Button };
