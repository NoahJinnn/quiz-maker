import './index.scss';
import { IComponent } from "../../global.types";
import React from 'react';
export interface ISliderViewProps<T = {}> {
    isVertical?: boolean;
    items: T[];
    showArrow?: boolean;
    offsetScroll?: number;
    containerClass?: string;
    scrollViewClass?: string;
    allowTouchScroll?: boolean;
    titleClass?: string;
    title?: string;
    renderItem: (item: T, index: number) => React.ReactNode;
}
declare const Memo: IComponent<ISliderViewProps<{}>>;
export { Memo as SliderView };
