import { IComponent } from "../../global.types";
import { MutableRefObject } from 'react';
/**
 * Portal for popup element
 */
export declare const Portal: IComponent<{
    /**
     * Target of parent object
     */
    target?: MutableRefObject<HTMLDivElement | HTMLSpanElement | null>;
    /**
     * Scrollable element that contain this portal (DEFAULT `body`)
     */
    scrollElement?: MutableRefObject<HTMLDivElement | HTMLSpanElement | null>;
    /**
     * Enabled follow scroll
     */
    followScroll?: boolean;
    /**
     * FPS update portal when scroll (DEFAULT 60)
     */
    fpsScroll?: number;
    /**
     * Whether user can interact with children inside or not
     */
    interactive?: boolean;
}>;
/**
 * Inject portal parent before use Portal component, place this on top of your app
 * REMOVED!!!
 */
export declare const PortalWrapper: IComponent;
/**
 * Listen on portal recalculate event
 * @param callback Callback when update portal
 */
export declare const onRecalculatePortalEvent: (callback: () => void) => void;
/**
 * Remove listener of portal update's event
 * @param callback Callback when portal update
 */
export declare const removeRecalculatePortalEvent: (callback: () => void) => void;
/**
 * Call portal to re-calculate position
 */
export declare const forceRecalculatePortal: () => void;
