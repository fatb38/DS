import {DatePickerProps, RangePickerProps} from 'antd/lib/date-picker';
import {HTMLAttributes} from 'react';

type AntdDatePickerTypesToOmit = '';

interface InternalDatePickerProps extends HTMLAttributes<HTMLDivElement> {}

export type KitDatePickerProps = DatePickerProps & InternalDatePickerProps;

interface InternalRangerPickerProps extends HTMLAttributes<HTMLDivElement> {}

export type KitRangePickerProps = RangePickerProps & InternalRangerPickerProps;
