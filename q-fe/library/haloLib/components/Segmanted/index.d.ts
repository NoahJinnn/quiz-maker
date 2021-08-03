import './index.scss';
import { IComponent, TComponentColorAddon, TSize2Tier } from "../../global.types";
/**
 * Init your props interface first
 */
export interface ISegmantedProps<T = {
    title: string;
}> {
    size?: TSize2Tier;
    disabled?: boolean;
    color?: TComponentColorAddon;
    items: T[];
    onPressItem?: (item: T, index: number) => void;
    currentIndex?: number;
}
declare const Memo: IComponent<ISegmantedProps<{
    title: string;
}>>;
export { Memo as Segmanted };
