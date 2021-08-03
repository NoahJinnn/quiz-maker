import { IGuideContent } from "../GuideFlow";
import { IComponent } from "../../global.types";
import { CSSProperties } from 'react';
export interface ITutorialCard extends Omit<IGuideContent, 'ref'> {
    /**
     * Key of guide, will be use in TutorialCtl
     */
    guideKey: string;
    className?: string;
    style?: CSSProperties;
}
declare const Memo: IComponent<ITutorialCard>;
export { Memo as TutorialCard };
