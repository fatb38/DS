import {DatePickerProps, RangePickerProps} from 'antd/lib/date-picker';
import {HTMLAttributes} from 'react';

// Use "never" instead of Omit properties to avoid issues with Antd type/interface declarations
interface InternalDatePickerProps extends HTMLAttributes<HTMLDivElement> {
    size?: never;
    bordered?: never;
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export type KitDatePickerProps = DatePickerProps & InternalDatePickerProps;

// Use "never" instead of Omit properties to avoid issues with Antd type/interface declarations
interface InternalRangerPickerProps extends HTMLAttributes<HTMLDivElement> {
    size?: never;
    bordered?: never;
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export type KitRangePickerProps = RangePickerProps & InternalRangerPickerProps;
