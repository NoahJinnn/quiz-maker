import '../index.scss';
import { IComponent } from "../../../global.types";
import { IInputProps } from '../Input';
/**
 * Type of props input
 */
export interface ISearchProps extends IInputProps {
    /**
     * onSearch function to handle when search
     */
    onSearch?: () => void;
    /**
     * Loading state when searching
     */
    loading?: boolean;
    /**
     * Data record array to be displayed
     */
    items?: string[];
    /**
     * id of datalist when passing array
     */
    dataListId?: string;
}
declare const Memo: IComponent<ISearchProps>;
export { Memo as Search };
