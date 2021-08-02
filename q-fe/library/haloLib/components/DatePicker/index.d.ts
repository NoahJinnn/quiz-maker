import './index.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './index.scss';
import { TComponentDropdownPlacement } from "../../global.types";
import React from 'react';
import { IDefaultDateRanges } from './DefaultRange';
export interface IDatePickerProps {
    /**
     * ClassName of DatePicker
     */
    className?: string;
    /**
     * Direction of the DatePicker
     */
    direction?: 'vertical' | 'horizontal';
    /**
     * Whether show Range Picker in side or not
     */
    ShowRangePicker?: boolean;
    /**
     * Custom date format
     */
    dateDisplayFormat?: string;
    /**
     * Handle submit
     */
    handleSubmit?: (pickedDate: IDatePicker) => void;
    /**
     * Handle function call when close
     */
    handleClose?: (pickedDate: IDatePicker) => void;
    /**
     * Handle on date change
     */
    onChange?: (pickedDate: IDatePicker) => void;
    /**
     * Customize OK Text
     */
    OkText?: string;
    /**
     * Customize Cancel text
     */
    CancelText?: string;
    /**
     * Change range color
     */
    rangeColors?: string[];
    /**
     * Change color of calendar
     */
    color?: string;
    /**
     * Render static range
     */
    staticRange?: () => [];
    /**
     * Calendar static range
     */
    customStaticRange?: IDefaultDateRanges[];
    /**
     * Custom footer
     */
    footer?: React.ReactNode;
    /**
     * Initial date
     */
    initialDate?: IDatePicker;
    /**
     * Placement of dropdown
     */
    placement?: TComponentDropdownPlacement;
    /**
     * Locale of date
     */
    locale?: Locale;
    /**
     * Default expand date calendar
     */
    expandOnInit?: boolean;
}
interface IDateState {
    startDate: Date;
    endDate: Date;
    key: string;
}
interface IDatePicker {
    selection: IDateState;
}
declare const Memo: React.NamedExoticComponent<React.PropsWithChildren<IDatePickerProps>>;
export { Memo as DatePicker };
