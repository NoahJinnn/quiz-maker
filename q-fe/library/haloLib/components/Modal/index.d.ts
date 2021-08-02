import './index.scss';
import { IComponent } from "../../global.types";
import React, { ReactNode, SyntheticEvent } from 'react';
export interface IModalProps {
    /**
     * className of the container
     */
    className?: string;
    /**
     * wrapper class name of the container dialog
     */
    wrapClassName?: string;
    /**
     * Modal dialog title
     */
    title?: ReactNode;
    /**
     * Whether close (x) button is visible or not
     */
    closable?: boolean;
    /**
     * Whether to unMount child component on onClose
     */
    destroyOnClose?: boolean;
    /**
     * Footer content
     */
    footer?: ReactNode;
    /**
     * Specify a function that will be called when a user click to mask or click to cancel button
     */
    onCancel?: (e?: React.MouseEvent) => void;
    /**
     * Specify a function that will be called when user click to OK button
     */
    onOK?: (e: SyntheticEvent) => void;
    /**
     * Text in cancel button
     */
    cancelText?: string;
    /**
     * Text in OK button
     */
    okText?: string;
    /**
     * Whether the modal dialog is visible or not
     */
    visible?: boolean;
    /**
     * Custom close icon for modal
     */
    closeIcon?: React.ReactNode;
    /**
     * Width of the modal
     */
    width?: number | string;
    /**
     * Custom style for the body
     */
    bodyStyle?: React.CSSProperties;
    /**
     * Whether to show loading effect for OK button or not
     */
    confirmLoading?: boolean;
    /**
     * Whether support press esc to close
     */
    keyboard?: boolean;
    /**
     * Prevent below layout scroll when scroll content
     */
    preventLayoutScroll?: boolean;
}
declare const Memo: IComponent<IModalProps>;
export { Memo as Modal };
