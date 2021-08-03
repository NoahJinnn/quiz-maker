import './index.scss';
import { IComponent, TComponentColorAddon } from "../../global.types";
/**
 * Init your props interface first
 */
export interface IProgressBarProps {
    /**
     * Current percent of progress
     */
    percent?: number;
    /**
     * Title of progress  (If needed)
     */
    title?: string;
    /**
     * The color of current percent. If not have === gray (default)
     */
    activeColor?: TComponentColorAddon;
    /**
     * The color of progress bar
     */
    backgroundColor?: string;
    /**
     * Show percent on progress bar (If needed)
     */
    isShowPercent?: boolean;
    /**
     * Dark mode (If needed)
     */
    dark?: boolean;
    /**
     * Custom classes to overide css (If needed)
     */
    customClassName?: string;
    /**
     * Set to true to have animation on active color
     */
    animation?: boolean;
}
declare const Memo: IComponent<IProgressBarProps>;
export { Memo as ProgressBar };
