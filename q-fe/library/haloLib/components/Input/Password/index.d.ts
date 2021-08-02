import '../index.scss';
import { IComponent } from "../../../global.types";
import React from 'react';
import { IInputProps } from '../Input';
/**
 * Type of props input
 */
export interface IPasswordProps extends IInputProps {
    readonly action?: string;
    visibilityToggle?: boolean;
    iconRender?: (visible: boolean) => React.ReactNode;
}
declare const Memo: IComponent<IPasswordProps>;
export { Memo as Password };
