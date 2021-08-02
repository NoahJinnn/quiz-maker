import './index.scss';
import { IComponent } from "../../global.types";
import React from 'react';
export interface ISpinViewProps {
    /**
     * Whether spin is spinning
     */
    spinning?: boolean;
    /**
     * Set to true will show placeholder instead of view
     */
    isEmpty?: boolean;
    /**
     * The size of spin
     */
    indicatorSize?: number | string;
    /**
     * The size of tip
     */
    tipSize?: number | string;
    /**
     * Customize description content when Spin has children
     */
    tip?: string;
    /**
     * Place holder when dont have data to show, isEmpty=true
     */
    placeholder?: string | React.ReactNode;
    /**
     * The wrapper className of SpinView
     */
    indicatorClassName?: string;
    /**
     * wrapper className of div outside
     */
    wrapperClassName?: string;
    /**
     * Blur content when loading?
     */
    blurContent?: boolean;
    /**
     * Delay before show
     */
    timeout?: number;
    /**
     * Config xyz animation for spin
     */
    spinXyz?: string;
    /**
     * Config xyz animation for children's wrapper
     */
    wrapperXyz?: string;
}
declare const Memo: IComponent<ISpinViewProps>;
export { Memo as SpinView };
