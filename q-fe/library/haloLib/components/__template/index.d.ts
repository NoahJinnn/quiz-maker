import './index.scss';
import { IComponent } from "../../global.types";
/**
 * Init your props interface first
 */
export interface ITemplateProps {
    /**
     * Color of text
     */
    color?: string;
    title?: string;
}
/**
 * Then build your component
 */
export declare const Template: IComponent<ITemplateProps>;
