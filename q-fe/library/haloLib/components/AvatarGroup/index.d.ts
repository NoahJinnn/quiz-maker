/**
 * App darkmode HOC
 */
import './index.scss';
import { IComponent, TSize4Tier } from "../../global.types";
import { CSSProperties } from 'react';
export interface IAvatarGroupProps {
    /**
     * Data of group avatar member
     */
    data: [];
    /**
     * Maximum to show group avatar member (Default === 5)
     */
    maxShowAvatar?: number;
    /**
     * Size of group avatar member (Default === 'medium')
     */
    size?: TSize4Tier;
    /**
     * Custom classes to overide css (If needed)
     */
    customClassName?: string;
    /**
     * Custom style to overide css (If needed)
     */
    customStyle?: Partial<CSSProperties>;
    /**
     * Key of full_name of each avatar member in data[]
     */
    nameKey: string;
    /**
     * Key of image_url of each avatar member in data[]
     */
    imageKey: string;
}
declare const Memo: IComponent<IAvatarGroupProps>;
export { Memo as AvatarGroup };
