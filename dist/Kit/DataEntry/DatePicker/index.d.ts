import { FunctionComponent } from 'react';
import { IKitDatePicker, IKitRangePicker } from './types';
type CompoundedComponent = FunctionComponent<IKitDatePicker> & {
    RangePicker: FunctionComponent<IKitRangePicker>;
};
export declare const KitDatePicker: CompoundedComponent;
export {};
