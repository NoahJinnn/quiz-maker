import { IComponent } from "../../global.types";
import React from 'react';
/**
 * Init your props interface first
 */
export interface ICheckboxGroupProps {
    /**
     *  Default selected value
     */
    defaultValue?: (string | number)[];
    /**
     * The name property of all checkbox
     */
    name?: string;
    /**
     * The callback function that is triggered when the state changes
     */
    onChange?: (checkedValue: (string | number)[]) => void;
    /**
     * The children of group
     */
    children?: React.ReactNode | React.ReactNode[];
    /**
     * Custom className of group
     */
    className?: string;
}
interface ICheckboxGroupContext {
    type?: 'circle' | 'square';
    selectedValues?: (string | number)[];
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}
export declare const checkboxGroupContext: React.Context<ICheckboxGroupContext>;
declare const Memo: IComponent<ICheckboxGroupProps>;
export { Memo as CheckboxGroup };
