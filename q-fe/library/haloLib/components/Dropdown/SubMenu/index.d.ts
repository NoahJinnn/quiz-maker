import './index.scss';
import { IComponent } from "../../../global.types";
import React from 'react';
export interface IDropdownSubMenu {
    /**
     * Title of dropdown parent
     */
    title: string;
    /**
     * Children is sub-menu
     */
    children: React.ReactNode;
    /**
     * Custom className for dropdown parent
     */
    customClassName?: string;
    /**
     * Custom className for sub-menu
     */
    customExtraClassName?: string;
    /**
     * Placement of submenu
     */
    placement?: 'left' | 'right';
}
declare const DropdownSubMenu: IComponent<IDropdownSubMenu>;
export { DropdownSubMenu };
