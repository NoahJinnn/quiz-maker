import './index.scss';
import { IComponent, TDefaultPlacement } from "../../global.types";
/**
 * Init your props interface first
 */
export interface ISliderProps {
    className?: string;
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    tooltipPlacement?: TDefaultPlacement;
    step?: number;
    onChange?: (value: number) => void;
    marks?: number[];
}
declare const Memo: IComponent<ISliderProps>;
export { Memo as Slider };
