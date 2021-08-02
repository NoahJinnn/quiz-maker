import './index.scss';
import { TDefaultPlacement } from "../../global.types";
import React from 'react';
interface IPropsMenu<T = {}> {
    title: string;
    subMenu?: T[];
    icon?: React.ReactNode;
    disabled?: boolean;
    url?: string;
    key: string;
}
export interface ISideBarProps<T = {}> {
    /**
     * items[] data of SideBar
     */
    items: T[];
    /**
     * Callback function when click each item of SideBar
     */
    onClick?: (item: IPropsMenu) => void;
    /**
     * min-width of SideBar when collapse
     */
    minWidthCollapse?: number;
    /**
     * Custom header for SideBar
     */
    header?: Element | React.ReactNode;
    /**
     * Custom footer for SideBar
     */
    footer?: Element | React.ReactNode;
    /**
     * Custom classname to override css
     */
    customClassName?: string;
    /**
     * Key to active each data
     */
    activeKey: string;
    /**
     * side bar will collapse if true
     */
    collapse?: boolean;
    /**
     * Show or hide collapse icon
     */
    showCollapseIcon?: boolean;
    /**
     * Default width of side bar
     */
    widthSideBar?: string | number;
    /**
     * Change expand icon if needed
     */
    expandIcon?: React.ReactNode;
    /**
     * Direction of icon expand
     */
    expandIconDirection?: TDefaultPlacement;
}
declare const Memo: ({ items, onClick, header, footer, minWidthCollapse, activeKey, customClassName, collapse, showCollapseIcon, widthSideBar, expandIcon, expandIconDirection, }: ISideBarProps<IPropsMenu>) => React.ReactElement;
export { Memo as SideBar };
