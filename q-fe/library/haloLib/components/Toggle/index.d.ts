import './index.scss';
import { IComponent, TSize3Tier } from "../../global.types";
import React, { EventHandler } from 'react';
export interface IToggleProps {
    /**
     * True if toggle is disabled
     */
    disabled?: boolean;
    /**
     * Label of toggle
     */
    label?: Element | React.ReactNode | string;
    type?: 'square' | 'circle' | 'slide';
    /**
     * Toggle check state
     */
    checked?: boolean;
    /**
     * Size of toggle
     */
    size?: TSize3Tier;
    /**
     * Trigger when press toggle
     */
    onChange?: (v: boolean) => void;
    /**
     * Name of input
     */
    name?: string;
    /**
     * Value to distinguish each button
     */
    value?: string | number;
    /**
     * Custom className of toggle
     */
    className?: string;
    /**
     * Input event handler
     */
    onInputChange?: EventHandler<React.ChangeEvent<HTMLInputElement>>;
    /**
     * Custom className of label
     */
    labelClassName?: string;
    /**
     * Wrapper className div inside
     */
    wrapperClassName?: string;
}
declare const Memo: IComponent<IToggleProps>;
export { Memo as Toggle };
