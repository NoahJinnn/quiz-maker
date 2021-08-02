import './index.scss';
import { IGuideContent } from "../GuideFlow";
import { IComponent } from "../../global.types";
export interface ITutorialLayoutProps {
    /**
     * Width of guide card
     */
    width?: number;
    /**
     * Blur content when in center?
     */
    blurOnCenter?: boolean;
    /**
     * Default of complete text
     */
    completeTextDefault?: string;
    /**
     * Text in skip button
     */
    skipText?: string;
    /**
     * Text in prev button
     */
    prevText?: string;
}
/**
 * Tutorial controller
 */
declare class TutorialController {
    /**
     * Add an event to knowns list
     */
    addGuide(guideKey: string, guide: IGuideContent): this;
    /**
     * Trigger unnmount guides by keys
     */
    unmmount(guideKeys: string[]): this;
    /**
     * Trigger show tutorial
     */
    show(active?: boolean): this;
    /**
     * Set current active guides by keys
     */
    setGuides(guideKeys: string[]): this;
    /**
     * Set current complete text of guide card
     */
    setCompleteText(text: string): this;
    /**
     * Set current function of complete btn guide card
     */
    setCompleteFucntion(cb: () => void): this;
}
declare const Memo: IComponent<ITutorialLayoutProps>;
declare const TutorialCtl: TutorialController;
export { TutorialCtl, Memo as TutorialLayout };
