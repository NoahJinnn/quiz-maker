import { IComponent, TComponentColorAddon } from "../../global.types";
import React from 'react';
export interface ITabProps<T = {
    title: string;
    icon?: React.ReactNode | IComponent;
}> {
    /**
     * Color of tabs
     */
    color?: TComponentColorAddon;
    /**
     * Tab items
     */
    items: T[];
    /**
     * Custom render of tab
     */
    renderItem?: (item: T, idx?: number) => React.ReactNode;
    /**
     * Current active tab key value, default is index of tab
     */
    currentActiveKey?: number | string;
    /**
     * Keys of disabled tabs
     */
    disabledKeys?: number[];
    /**
     * Tab id key in items, default is id of item
     */
    activeKey?: string;
    /**
     * On pressed tab
     */
    onClick?: (item: T, index: number) => void;
    /**
     * Position of decorator
     */
    decoratorPosition?: 'top' | 'bottom';
    /**
     * Tab custom class
     */
    tabClass?: string;
    /**
     * Dependences of states, will trigger rerender on change
     */
    resizeDeps?: any[];
    /**
     * Delay resize after deps change for waiting animation changes
     */
    resizeTimeout?: number;
    /**
     * Play animation on load?
     */
    animate?: boolean;
}
declare const Memo: IComponent<ITabProps<{
    title: string;
    icon?: React.ReactNode | IComponent;
}>>;
export { Memo as Tab };
