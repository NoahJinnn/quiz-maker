import './index.scss';
import { IComponent } from "../../global.types";
import React from 'react';
export interface ICarouselProps<T = {}> {
    items: T[];
    title?: string;
    dots?: boolean;
    speed?: number;
    autoPlay?: boolean;
    infinite?: boolean;
    showArrow?: boolean;
    titleClass?: string;
    /**
     * Started index from 1
     */
    initialPage?: number;
    isVertical?: boolean;
    slidesToShow?: number;
    containerClass?: string;
    scrollViewClass?: string;
    percentToScroll?: number;
    allowTouchScroll?: boolean;
    onIndexChange?: (current: number) => void;
    renderItem: (item: T, index: number) => React.ReactNode;
}
declare const Memo: IComponent<ICarouselProps<{}>>;
export { Memo as Carousel };
