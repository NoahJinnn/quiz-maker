import '../index.scss';
import { IComponent } from "../../../global.types";
import React from 'react';
declare type TValidateStatuses = 'success' | 'warning' | 'error' | 'validating';
export declare type TRuleType = 'number' | 'boolean' | 'regexp' | 'integer' | 'float' | 'date' | 'url' | 'hex' | 'email' | 'phone' | 'pattern';
export declare type TValidator = (rule: IBaseRule, value: any, callback: (error?: string) => void) => Promise<void | any> | void;
declare type TValidateMessage = string | (() => string);
export declare type TFormValue = any;
export interface IValidateMessages {
    default?: TValidateMessage;
    required?: TValidateMessage;
    enum?: TValidateMessage;
    whitespace?: TValidateMessage;
    date?: {
        format?: TValidateMessage;
        parse?: TValidateMessage;
        invalid?: TValidateMessage;
    };
    types?: {
        string?: TValidateMessage;
        method?: TValidateMessage;
        array?: TValidateMessage;
        object?: TValidateMessage;
        number?: TValidateMessage;
        date?: TValidateMessage;
        boolean?: TValidateMessage;
        integer?: TValidateMessage;
        float?: TValidateMessage;
        regexp?: TValidateMessage;
        email?: TValidateMessage;
        phone?: TValidateMessage;
        url?: TValidateMessage;
        hex?: TValidateMessage;
    };
    string?: {
        len?: TValidateMessage;
        min?: TValidateMessage;
        max?: TValidateMessage;
        range?: TValidateMessage;
    };
    number?: {
        len?: TValidateMessage;
        min?: TValidateMessage;
        max?: TValidateMessage;
        range?: TValidateMessage;
    };
    array?: {
        len?: TValidateMessage;
        min?: TValidateMessage;
        max?: TValidateMessage;
        range?: TValidateMessage;
    };
    pattern?: {
        mismatch?: TValidateMessage;
    };
}
export interface IBaseRule {
    len?: number;
    max?: number;
    message?: string;
    min?: number;
    pattern?: RegExp;
    required?: boolean;
    type?: TRuleType;
    customValidator?: (value?: string | string[]) => boolean;
}
export interface IHelper {
    label?: string;
    tooltip?: string;
    icon?: React.ReactNode;
}
export interface IFormItemProps {
    hasFeedback?: boolean;
    validateStatus?: TValidateStatuses;
    required?: boolean;
    className?: string;
    label?: string | React.ReactNode;
    helper?: IHelper;
    rules?: IBaseRule[];
    htmlFor?: string;
    name?: string;
}
interface IFormItemContext {
    onFormItemChange?: (inputValue?: string | number | readonly string[] | (string | number)[]) => void;
    validateIcon?: React.ReactNode;
    name?: string;
    setValue?: React.Dispatch<React.SetStateAction<string | number | (string | number)[] | undefined>>;
}
export declare const FormItemContext: React.Context<IFormItemContext>;
declare const Memo: IComponent<IFormItemProps>;
export { Memo as FormItem };
export default Memo;
