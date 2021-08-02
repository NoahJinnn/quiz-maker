import './index.scss';
import { IComponent, TComponentColorAddon, TDefaultPlacement } from "../../global.types";
import React from 'react';
declare type TCardPosition = TDefaultPlacement | 'center';
export interface IGuideContent {
    /**
     * Ref of div belong to this guide
     */
    ref: React.MutableRefObject<HTMLDivElement | null>;
    /**
     * Color of this guide
     */
    color?: TComponentColorAddon;
    /**
     * Title of this guide
     */
    title?: string;
    /**
     * Title in guide
     */
    content: string;
    /**
     * Arrow offset
     */
    offset?: number;
    /**
     * Position of card, undefined will be auto
     */
    position?: TCardPosition;
}
/**
 * Init your props interface first
 */
export interface IGuideFlowProps {
    /**
     * Current active of guide's index
     */
    currentIndex?: number;
    /**
     * On change guide's index
     */
    onIndexChange?: (newIndex: number) => void;
    /**
     * Guide list
     */
    guides: IGuideContent[];
    /**
     * Show guide
     */
    show?: boolean;
    /**
     * Width of guide
     */
    width?: number;
    /**
     * On user press skip
     */
    onPressSkip?: () => void;
    /**
     * On user press complete button
     */
    onPressComplete?: () => void;
    /**
     * Next button title
     */
    nextText?: string;
    /**
     * Prev button title
     */
    prevText?: string;
    /**
     * Skip text title
     */
    skipText?: string;
    /**
     * Complete button title
     */
    completeText?: string;
    /**
     * Blur content when in center
     */
    blurOnCenter?: boolean;
}
declare const Memo: IComponent<IGuideFlowProps>;
export { Memo as GuideFlow };
