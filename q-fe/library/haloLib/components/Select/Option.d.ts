import { IComponent } from "../../global.types";
import React from 'react';
export interface IOptionProps {
    /**
     * Toggle disabled for this item
     */
    disabled?: boolean;
    /**
     * value if choose this option
     */
    value?: string | number;
    /**
     * Label that will show in input if child not string
     */
    label?: string;
    /**
     * Custom className for Option
     */
    className?: string;
    /**
     * child component inside option
     */
    children?: React.ReactNode;
    /**
     * Title of Option when user hover in
     */
    title?: string;
    /**
     * index of current selected value
     */
    activeIndex?: number;
    /**
     * index of option
     */
    currentIndex?: number;
    /**
     * index of the selected option
     */
    selectedIndex?: number;
    /**
     * handle when mouse enter option
     */
    onMouseEnter?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    onClick?: () => void;
}
declare const Memo: IComponent<IOptionProps>;
export { Memo as Option };
export default Memo;
