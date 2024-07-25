import {DatePickerProps, RangePickerProps} from 'antd/es/date-picker';
import {ReactNode, ReactElement, MouseEvent} from 'react';

// Use "never" instead of Omit properties to avoid issues with Antd type/interface declarations
interface IInternalDatePicker {
    size?: never;
    bordered?: never;
    label?: string;
    helper?: string;
    allowClear?: boolean;
    cellRender?: DatePickerProps['cellrender'];
    wrapperClassName?: string;
    disabledTime?: unknow;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
    readonly?: boolean;
}

interface IDatePickerProps extends Omit<DatePickerProps, 'picker'> {
    picker?: 'time' | 'date' | 'week' | 'month' | 'year' | 'quarter';
    showTime?: boolean | object;
}

export type IKitDatePicker = IDatePickerProps & IInternalDatePicker;

// Use "never" instead of Omit properties to avoid issues with Antd type/interface declarations
interface IInternalRangerPicker {
    size?: never;
    bordered?: never;
    label?: string;
    helper?: string;
    allowClear?: boolean;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
    readonly?: boolean;
}

export type IKitRangePicker = RangePickerProps & IInternalRangerPicker;
