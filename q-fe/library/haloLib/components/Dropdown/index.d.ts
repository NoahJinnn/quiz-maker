import './index.scss';
import { TComponentDropdownPlacement } from "../../global.types";
import React, { ReactNode } from 'react';
export interface IDropdownProps<T = {}> {
    /**
     * Custom render item of dropdown
     */
    renderItem?: ({ item, idx, hideDropdown }: {
        item?: T;
        idx?: number;
        hideDropdown?: () => void;
    }) => React.ReactNode;
    /**
     * Callback function when click each data of dropdown
     */
    onClick?: (item?: T, idx?: number) => void;
    /**
     * Data record array to be displayed
     */
    items?: T[];
    /**
     * Key of data-dropdown name
     */
    keyName?: string;
    /**
     * Position of dropdown
     */
    placement?: TComponentDropdownPlacement;
    /**
     * Custom classname to override css
     */
    customClassName?: string;
    /**
     * Custom classname to override css
     */
    customExtraClassName?: string;
    /**
     * Event to trigger dropdown
     */
    trigger?: ('click' | 'hover')[];
    /**
     * Toggle visible for dropdown
     */
    visible?: boolean;
    /**
     * Children of the dropdown
     */
    children?: ReactNode;
    /**
     * current item active
     */
    currentActiveKey?: number;
    /**
     * Max height of the dropdown
     */
    maxHeight?: number | string;
    /**
     * Called when the visible state is changed
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * Width of dropdown absolute
     */
    width?: number | string;
    /**
     * Default wraped with shadow layout
     */
    wrapWithShadow?: boolean;
}
declare const Memo: <T extends {}>({ renderItem, items, keyName, placement, customExtraClassName, customClassName, trigger, onClick, visible, children, currentActiveKey, maxHeight, onVisibleChange, width, wrapWithShadow, }: IDropdownProps<T>) => React.ReactElement;
declare const MemoItem: import("../../global.types").IComponent<{
    children: React.ReactNode;
    customClassName?: string | undefined;
}>;
declare const MemoSub: import("../../global.types").IComponent<import("@components/Dropdown/SubMenu").IDropdownSubMenu>;
export { Memo as Dropdown, MemoItem as DropdownItem, MemoSub as DropdownSubMenu };
