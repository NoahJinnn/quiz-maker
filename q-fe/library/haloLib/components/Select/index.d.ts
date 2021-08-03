import './index.scss';
import React from 'react';
/**
 * Type of props input
 */
export interface ISelectProps extends React.AriaAttributes {
    /**
     * Indicate loading state
     */
    loading?: boolean;
    /**
     * Initial selected options
     */
    defaultValue?: string | number;
    /**
     * Decide whether the option will appear in the select or not
     */
    filterOption?: (inputValue?: string | number, option?: string | number) => boolean;
    /**
     * Control open state of dropdown
     */
    open?: boolean;
    /**
     * Placeholder of select
     */
    placeholder?: string;
    /**
     * The custom suffix icon
     */
    suffixIcon?: React.ReactNode;
    /**
     * Whether to show the dropdown arrow
     */
    showArrow?: boolean;
    /**
     * Specify content to show when no result matches
     */
    notFoundContent?: boolean;
    /**
     * Called when select an option or input value change
     */
    onChange?: (value?: string | number) => void;
    /**
     * Set max height for dropdown
     */
    listHeight?: number;
    /**
     * Custom className for Select
     */
    className?: string;
    /**
     * Style of select
     */
    style?: React.CSSProperties;
    /**
     * Children of select
     */
    children?: React.ReactNode;
    /**
     * whether show search input or not
     */
    showSearch?: boolean;
    /**
     * name of input for form item
     */
    name?: string;
    /**
     * current value of input
     */
    value?: string | number;
    /**
     * items to handle items dependency change
     */
    items?: ({} | string | number)[];
}
declare const Memo: React.FC<ISelectProps>;
export { Memo as Select };
export default Memo;
