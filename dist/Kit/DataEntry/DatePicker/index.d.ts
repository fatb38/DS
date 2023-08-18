/// <reference types="react" />
import { KitDatePickerProps, KitRangePickerProps } from './types';
type CompoundedComponent = React.FunctionComponent<KitDatePickerProps> & {
    RangePicker: React.FunctionComponent<KitRangePickerProps>;
};
export declare const KitDatePicker: CompoundedComponent;
export {};
