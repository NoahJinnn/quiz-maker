import './index.scss';
import { IComponent, TComponentColorAddon } from "../../global.types";
import React from 'react';
/**
 * Init your props interface first
 */
export interface IStepsProps<T = {
    title: string;
    disabled?: boolean;
}> {
    /**
     * Type of steps bar
     */
    type?: 'line' | 'title';
    /**
     * Disabled mode of step bar
     */
    disabled?: boolean;
    /**
     * Step items
     */
    items: T[];
    /**
     * Custom render of step item
     */
    renderItem?: (item: T, idx: number) => React.ReactNode;
    /**
     * Current step key's value, default is index 0
     */
    currentStepKey?: number | string;
    /**
     * Key of step in item, default is index of item in array
     */
    stepKey?: string;
    /**
     * Array of passed item's id
     */
    passedKeys?: (string | number)[];
    /**
     * On step pressed
     */
    onPressStep?: (item: T, idx: number) => void;
    /**
     * Color of step bar
     */
    color?: TComponentColorAddon;
    /**
     * Custom class for container
     */
    containerClass?: string;
    /**
     * Custom class for step
     */
    stepClass?: string;
    /**
     * Vertical step bar
     */
    isVertical?: boolean;
}
declare const Memo: IComponent<IStepsProps<{
    title: string;
    disabled?: boolean | undefined;
}>>;
export { Memo as Steps };
