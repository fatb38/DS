import {FunctionComponent} from 'react';
import InternalDatePicker from './DatePicker';
import InternalRangePicker from './RangePicker';
import {IKitDatePicker, IKitRangePicker} from './types';

type CompoundedComponent = FunctionComponent<IKitDatePicker> & {
    RangePicker: FunctionComponent<IKitRangePicker>;
};

export const KitDatePicker = InternalDatePicker as unknown as CompoundedComponent;
KitDatePicker.displayName = 'KitDatePicker';
KitDatePicker.RangePicker = InternalRangePicker;
