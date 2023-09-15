import {DatePickerProps, RangePickerProps} from 'antd/lib/date-picker';

// Use "never" instead of Omit properties to avoid issues with Antd type/interface declarations
interface InternalDatePickerProps {
    size?: never;
    bordered?: never;
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export type KitDatePickerProps = DatePickerProps & InternalDatePickerProps;

// Use "never" instead of Omit properties to avoid issues with Antd type/interface declarations
interface InternalRangerPickerProps {
    size?: never;
    bordered?: never;
    label?: string;
    helper?: string;
    allowClear?: boolean;
}

export type KitRangePickerProps = RangePickerProps & InternalRangerPickerProps;
