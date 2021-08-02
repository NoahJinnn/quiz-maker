import './index.scss';
import { IComponent, TComponentColorAddon, TSize3Tier } from "../../global.types";
export interface ITagProps {
    /**
     * Mode of tag need to display, default is fill
     */
    mode?: 'fill' | 'fill-opa' | 'outline' | 'badge';
    /**
     * Should show close button
     */
    showClose?: boolean;
    /**
     * On close clicked
     */
    onClickClose?: () => void;
    /**
     * On tag clicked
     */
    onClick?: () => void;
    /**
     * Color of tag
     */
    color?: TComponentColorAddon;
    /**
     * Override fill color
     */
    fillColor?: string;
    /**
     * Override title color
     */
    titleColor?: string;
    /**
     * Title of tag
     */
    title: string;
    /**
     * Set to true if this tag is disabled
     */
    disabled?: boolean;
    /**
     * Margin size around tag, default is small
     */
    margin?: TSize3Tier;
}
declare const Memo: IComponent<ITagProps>;
export { Memo as Tag };
