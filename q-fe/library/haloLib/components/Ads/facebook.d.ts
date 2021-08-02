import './index.scss';
import { IComponent } from "../../global.types";
import React from 'react';
import { IAdsProps } from '.';
/**
 * Init your props interface first
 */
export interface IFacebookAdsProps extends IAdsProps {
    /**
     * Extra header for facebook ads: Ex: Number of people like this ads
     */
    extraHeader?: () => React.ReactNode;
    /**
     * Number of likes for this ads
     */
    likes?: number;
    /**
     * Number of comments in this ads
     */
    comments?: number;
    /**
     * Title of button in ads
     */
    buttonTitle?: string;
    /**
     * Force show scroll
     */
    forceScroll?: boolean;
}
declare const Memo: IComponent<IFacebookAdsProps>;
export { Memo as FacebookAds };
