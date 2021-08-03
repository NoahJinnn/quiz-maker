import './index.scss';
import { IComponent, TComponentColorAddon, TDefaultPlacement, TSize2Tier } from "../../global.types";
import React, { ReactNode } from 'react';
export interface ITooltipProps {
    /**
     * Position of toggle
     */
    placement?: TDefaultPlacement;
    /**
     * Size of toggle
     */
    size?: TSize2Tier;
    /**
     * Title in toggle
     */
    title: string | ReactNode;
    /**
     * Should toggle show at start ?
     */
    showOnStart?: boolean;
    /**
     * Text in toggle div no wrap (Not break-word)
     */
    noWrap?: boolean;
    /**
     * Padding parentOffset (default 3)
     */
    paddingParent?: number;
    /**
     * Force tooltip into always show mode
     */
    forceShow?: boolean;
    /**
     * Color of tooltip
     */
    bgColor?: TComponentColorAddon;
    /**
     * Should hide tooltip on scroll?
     */
    hideOnScroll?: boolean;
    /**
     * Whether to adjust popup placement automatically when popup is outside of viewport
     */
    autoAdjustPlacement?: boolean;
    /**
     * Custom wrapper style for title
     */
    wrapperStyle?: React.CSSProperties;
    /**
     * Tooltip will be placed in mouse position
     */
    useMousePosition?: boolean;
}
declare const Memo: IComponent<ITooltipProps>;
export { Memo as Tooltip };
