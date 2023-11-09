import {DatePickerProps, RangePickerProps} from 'antd/lib/date-picker';
import {IKitDatePickerTheme} from '@theme/types/components/DataEntry/DatePicker';

// Use "never" instead of Omit properties to avoid issues with Antd type/interface declarations
interface IInternalDatePicker {
    size?: never;
    bordered?: never;
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

interface IDatePickerProps extends Omit<DatePickerProps, 'picker'> {
    picker?: 'time' | 'date' | 'week' | 'month' | 'year' | 'quarter';
    showTime?: boolean | object;
    disabledTime?: any;
}

export type IKitDatePicker = IDatePickerProps &
    IInternalDatePicker & {
        cellRender?: DatePickerProps['cellrender'];
        wrapperClassName?: string;
    };

// Use "never" instead of Omit properties to avoid issues with Antd type/interface declarations
interface IInternalRangerPicker {
    size?: never;
    bordered?: never;
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export type IKitRangePicker = RangePickerProps & IInternalRangerPicker;

export interface IStyledDatePicker {
    $theme: IKitDatePickerTheme;
}

export interface IStyledRangePicker {
    $theme: IKitDatePickerTheme['RangePicker'];
}

export interface IStyledDatePickerDropDown {
    $theme: IKitDatePickerTheme['DropDown'];
}
