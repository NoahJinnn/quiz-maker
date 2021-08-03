import { IComponent, TSize3Tier } from "../../../global.types";
import React from 'react';
export interface IInputIcon {
    suffixIcon?: React.ReactNode;
    prefixIcon?: React.ReactNode;
    validateIcon?: React.ReactNode;
}
export interface IWrapperProps extends Omit<React.InputHTMLAttributes<any>, 'size'>, IInputIcon {
    element: React.ReactElement;
    className?: string;
    prefixCls?: string;
    triggerFocus?: () => void;
    focused?: boolean;
    size?: TSize3Tier;
    dataCount?: string;
    customPrefixClass?: string;
    customSuffixClass?: string;
}
declare const Memo: IComponent<IWrapperProps>;
export { Memo as WrapperInput };
