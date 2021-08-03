import './index.scss';
import { IComponent, TComponentColorAddon, TDefaultPlacement } from "../../global.types";
import React from 'react';
/**
 * Init your props interface first
 */
export interface IArrowViewProps {
    /**
     * Color of text
     */
    color?: TComponentColorAddon;
    type?: 'center' | 'start' | 'end';
    offset?: number;
    placement?: TDefaultPlacement | 'none';
    wrapperStyle?: React.CSSProperties;
}
declare const Memo: IComponent<IArrowViewProps>;
export { Memo as ArrowView };
