import './index.scss';
import { IComponent } from "../../global.types";
import { TComponentDropdownPlacement } from "../../global.types";
import React from 'react';
export interface ISubMenuProps<T = {
    title?: string;
}> {
    /**
     * Title of SideBar (left position)
     */
    title?: Element | React.ReactNode | string;
    /**
     * Children of side Bar (right position). Its maybe Tab, or everything you want :D
     */
    children?: Element | React.ReactNode;
    /**
     * Items of Side Bar at mode Tabs and mode Dropdown
     */
    items?: T[];
    /**
     * onClick one item, to get index & data of item
     */
    onClick?: (item: T, index: number) => void;
    /**
     * Current active item of side bar
     */
    currentActiveKey?: number;
    /**
     * Custom class name for container
     */
    containerClassName?: string;
    /**
     *
     */
    placementDropdown?: TComponentDropdownPlacement;
}
declare const Memo: IComponent<ISubMenuProps<{
    title?: string | undefined;
}>>;
export { Memo as SubMenu };
