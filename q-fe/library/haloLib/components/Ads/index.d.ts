import './index.scss';
import { CSSProperties } from 'react';
import { FacebookAds } from './facebook';
/**
 * Init your props interface first
 */
export interface IAdsProps {
    /**
     * Ads is combining in creative tools?
     */
    isCombining?: boolean;
    /**
     * Ads is loading ?
     */
    loading?: boolean;
    /**
     * Avatar for ads
     */
    avatarURL?: string;
    /**
     * Name of shops (Facebook)
     */
    name?: string;
    /**
     * Description of ads (Facebook)
     */
    description?: string;
    /**
     * Short desc for ads (Facebook and google)
     */
    shortDescription?: string;
    /**
     * Product image link
     */
    productImageURL?: string;
    /**
     * Headline of ads (Google and Facebook)
     */
    longHeadline?: string;
    /**
     * Sub Headline of ads (Google)
     */
    headline?: string;
    /**
     * Custom class for ads, default shadow-3
     */
    customContainerClass?: string;
    /**
     * Ratio of image ads (Only google for now)
     */
    imageRatio?: number;
    /**
     * Custom css for image
     */
    imageCustomStyle?: CSSProperties;
    /**
     * Initial height on start (Google for now)
     */
    initialHeight?: number;
}
export { FacebookAds };
