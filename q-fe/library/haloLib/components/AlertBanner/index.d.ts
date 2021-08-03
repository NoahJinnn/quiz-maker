import './index.scss';
import { IComponent, TComponentAlertColor } from "../../global.types";
import React from 'react';
export interface IAlertBannerProps {
    /**
     * Custom className of the component
     */
    className?: string;
    /**
     * Whether alert banner can be close
     */
    closable?: boolean;
    /**
     * Title of the alert banner
     */
    title?: React.ReactNode;
    /**
     * Description behind title alert banner
     */
    description?: React.ReactNode;
    /**
     * Callback when alert is closed
     */
    onClose?: () => void;
    /**
     * Type of the alert
     */
    type?: TComponentAlertColor;
    /**
     * Custom Icon
     */
    icon?: React.ReactNode;
    /**
     * Whether show icon or not
     */
    showIcon?: boolean;
}
declare const Memo: IComponent<IAlertBannerProps>;
export { Memo as AlertBanner };
