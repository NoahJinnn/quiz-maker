import './index.scss';
import { IComponent, TComponentAnimateSpeed } from "../../global.types";
export interface ISkeletonProps {
    /**
     * Type of shape for skeleton
     */
    type?: 'square' | 'circle' | 'line';
    /**
     * Custom skeleton container class
     */
    className?: string;
    /**
     * Width of skeleton, default is parent's width
     */
    width?: string | number;
    /**
     * Height of skeleton, default is parent's height
     */
    height?: string | number;
    /**
     * Speed of animation
     */
    speed?: TComponentAnimateSpeed;
    /**
     * Direction of skeleton load
     */
    direction?: 'left' | 'right';
    background?: boolean;
}
declare const Memo: IComponent<ISkeletonProps>;
export { Memo as Skeleton };
