import '../index.scss';
import React from 'react';
import { IComponent } from 'src/global.types';
/**
 * Type of props input
 */
export interface ITextAreaProps extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    showCount?: boolean;
    defaultValue?: string;
    value?: string;
    maxLength?: number;
    onFormItemChange?: (value: string | number) => void;
    countSuffix?: string;
}
declare const Memo: IComponent<ITextAreaProps>;
export { Memo as TextArea };
