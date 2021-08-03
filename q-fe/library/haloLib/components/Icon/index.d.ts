import './index.scss';
import * as IconList from "../../assets/icons";
import { IComponent, ISvgComponentProps } from "../../global.types";
/**
 * Init your props interface first
 */
export interface IIconProps extends ISvgComponentProps {
    name: keyof typeof IconList;
    loading?: boolean;
}
declare const Memo: IComponent<IIconProps>;
export { Memo as Icon };
