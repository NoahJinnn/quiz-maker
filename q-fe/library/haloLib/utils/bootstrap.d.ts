import { XyzTransitionGroup } from '@animxyz/react';
import { IComponent } from "../global.types";
import classnames from 'classnames';
import { CSSProperties } from 'react';
/**
 * Bootstrap for XYZTransition for better lint code
 */
export declare const XyzGroup: IComponent<{
    /**
     * When set to true will animate elements in on initial render.
     * You can set appear-specific behaviour using the appear-specific xyz utilities and variables
     */
    appear?: boolean;
    /**
     * You can use this property instead of appear to pause the appear animation
     * until the element is visible within the viewport.
     */
    appearVisible?: boolean | IntersectionObserverInit;
    /**
     * Sets the behavior of how long to apply the active class for the animation.
     * By default the class will be applied only for the duration of the animation,
     * however if you have nested animations you will want them to complete before removing the class.
     *
     * To do this we've added duration="auto" which conviently waits for all nested animations to finish before removing the class.
     */
    duration?: number | 'auto' | {
        appear: number | 'auto';
        in: number | 'auto';
        out: number | 'auto';
    };
    /**
     * Sets the sequencing of element switch transitions. By default the new element will transition in simultanously to the old element transitioning out. Setting mode="out-in" will transition the old element out first and setting mode="in-out" will transition the new element in first.
     */
    mode?: 'out-in' | 'in-out';
    xyz?: string;
    className?: string;
    style?: CSSProperties;
}>;
/**
 * Combine className string
 */
export declare const cx: typeof classnames;
export { XyzTransitionGroup };
