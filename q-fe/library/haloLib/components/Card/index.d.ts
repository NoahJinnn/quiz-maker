import './index.scss';
import { IComponent } from "../../global.types";
import { HTMLAttributes } from 'react';
/**
 * Init your props interface first
 */
export interface ICardImageProps<T = {
    url?: string;
    name?: string;
}> extends ICardProps {
    /**
     * source of image
     */
    photos?: T[];
    /**
     * fallbackSrc if src of image death
     */
    fallbackSrc?: string;
}
interface ICardProps extends HTMLAttributes<Element> {
    className?: string;
}
interface ICardColumn extends ICardProps {
    /**
     * order of col
     */
    order?: 'order-1' | 'order-2';
    /**
     * width ratio of col
     */
    width?: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90';
}
declare type TTextType = 'tagline' | 'body' | 'title' | 'link' | 'caption';
interface ICardTextProps extends ICardProps {
    type?: TTextType;
}
/**
 * Then build your component
 */
declare const Card: IComponent;
declare const CardText: IComponent<ICardTextProps>;
declare const CardImage: IComponent<ICardImageProps>;
declare const CardCol: IComponent<ICardColumn>;
declare const CardRow: IComponent<ICardProps>;
export { Card, CardCol, CardImage, CardRow, CardText };
