import '../index.scss';
import { IComponent } from "../../../global.types";
import React from 'react';
export interface IFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    /**
     * Children node element of Form
     */
    children?: React.ReactNode | React.ReactNode[];
    /**
     * Callback call when submit successfully
     */
    onSubmit?: ({}: {}) => void;
    /**
     * Callback call when submit failed
     */
    onSubmitFailed?: () => void;
    /**
     * stop for first validate fail
     */
    validateFirst?: boolean;
    /**
     * Form id
     */
    id?: string;
}
interface IFormContext {
    fieldList?: string[];
    setFieldList?: React.Dispatch<React.SetStateAction<string[]>>;
    validates?: [];
    setValidates?: React.Dispatch<React.SetStateAction<React.MutableRefObject<any>[]>>;
}
export declare const FormContext: React.Context<IFormContext>;
export declare const Form: React.FC<IFormProps>;
declare const _default: IComponent<IFormProps>;
export default _default;
