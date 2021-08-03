/**
 * App darkmode HOC
 */
import './index.scss';
import { IComponent, TDefaultPlacement, TSize4Tier, TUserStatus } from "../../global.types";
import React, { CSSProperties } from 'react';
export interface IAvatarProps {
    /**
     * Key of full_name of each member in data[]
     */
    onClick?: () => void;
    /**
     * Custom classes to overide css (If needed)
     */
    customClassName?: string;
    /**
     * Size of avatar (Default === 'medium')
     */
    size?: TSize4Tier;
    /**
     * Custom size of status icon
     */
    statusStyle?: React.CSSProperties;
    /**
     * Full name of member
     */
    tagName?: string;
    /**
     * Current status of member (Online | offline |  away | null - Default)
     */
    status?: TUserStatus;
    /**
     * Url of image, Src of image
     */
    src?: string;
    /**
     * Not show tooltip when hover
     */
    isNotShowToolTip?: boolean;
    /**
     * Position of tooltip
     */
    tooltipPlacement?: TDefaultPlacement;
    /**
     * Alt attribute of <img />
     */
    alt?: string;
    /**
     * Custom style to overide css (If needed)
     */
    customStyle?: Partial<CSSProperties>;
    /**
     * Number of letter to show if src fail (Max = 2, defaukt = 1)
     */
    numberLetter?: number;
    /**
     * Border radius class of avatar (default br-100)
     */
    borderClass?: string;
}
declare const Memo: IComponent<IAvatarProps>;
export { Memo as Avatar };
