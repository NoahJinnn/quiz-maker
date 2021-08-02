import '../index.scss';
import React from 'react';
import { IComponent, TSize3Tier } from 'src/global.types';
import { IInputIcon } from '../WrapperInput';
export interface IDropdownInput {
    name: string;
    data: string[];
}
/**
 * Type of props input
 */
export interface IInputProps extends Omit<React.InputHTMLAttributes<any>, 'size' | 'onChange'>, IInputIcon {
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    dropDownList?: IDropdownInput;
    onFormItemChange?: (inputValue: any) => void;
    showCount?: boolean;
    maxLength?: number;
    countSuffix?: string;
    size?: TSize3Tier;
    loading?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    customPrefixClass?: string;
    customSuffixClass?: string;
}
export declare const getInputSize: (size?: TSize3Tier | undefined) => string;
declare const Memo: IComponent<IInputProps>;
export { Memo as Input };
