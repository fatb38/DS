import InternalDatePicker from './DatePicker';
import InternalRangePicker from './RangePicker';
import {KitDatePickerProps, KitRangePickerProps} from './types';

type CompoundedComponent = React.FunctionComponent<KitDatePickerProps> & {
    RangePicker: React.FunctionComponent<KitRangePickerProps>;
};

export const KitDatePicker = InternalDatePicker as unknown as CompoundedComponent;
KitDatePicker.displayName = 'KitDatePicker';
KitDatePicker.RangePicker = InternalRangePicker;
