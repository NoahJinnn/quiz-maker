import './index.scss';
import { IComponent } from "../../global.types";
/**
 * Init your props interface first
 */
export interface ISplitterProps {
    /**
     * Type of splitter
     */
    type?: 'row' | 'column';
    /**
     * Size of splitter (width), default 1
     */
    size?: number;
    /**
     * Classname of splitter, default bg-gray
     */
    splitterClass?: string;
    /**
     * Title in center of splitter
     */
    title?: string;
    /**
     * Custom className for text, default `f7 pa2 nowrap hard`
     */
    customTextClassName?: string;
}
declare const Memo: IComponent<ISplitterProps>;
export { Memo as Splitter };
