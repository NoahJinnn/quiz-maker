/**
 * App darkmode HOC
 */
import './index.scss';
import { IComponent } from "../../global.types";
export interface IDarkmodeWrapperProps {
    /**
     * Turn on dark mode if true
     */
    dark?: boolean;
    /**
     * Darkmode class will be injected in body instead of wrapper div
     */
    useBody?: boolean;
}
declare const Memo: IComponent<IDarkmodeWrapperProps>;
export { Memo as DarkmodeWrapper };
