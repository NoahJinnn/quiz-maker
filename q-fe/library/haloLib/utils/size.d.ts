import { TMarginSize } from "../global.types";
/**
 * Get margin size by type
 * */
declare const getMarginByType: (type?: TMarginSize | undefined) => string;
/**
 * Get element position on parent
 */
declare const getWindowRelativeOffset: (parentWindow: Element, elem: Element) => {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
export { getMarginByType, getWindowRelativeOffset };
