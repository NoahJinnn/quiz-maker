import { IComponent } from "../../global.types";
import React from 'react';
import { IFacebookAdsProps } from './facebook';
interface IAdsWrapper {
    ads: IFacebookAdsProps;
    click?: number;
    impression?: number;
    type: 'google' | 'facebook';
    extraStatus?: () => React.ReactNode;
}
declare const Memo: IComponent<IAdsWrapper>;
export { Memo as CIWrapper };
