import './index.scss';
import { IComponent } from "../../global.types";
import React from 'react';
export interface IExpandableViewProps {
    title: string | React.ReactNode;
    expandOnInit?: boolean;
    containerClass?: string;
    className?: string;
    onExpand?: (status: boolean) => void;
    arrowPos?: 'left' | 'right';
    childrenClassName?: string;
}
declare const Memo: IComponent<IExpandableViewProps>;
export { Memo as ExpandableView };
