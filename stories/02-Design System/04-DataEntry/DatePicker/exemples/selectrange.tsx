import React, {useState} from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import type {Dayjs} from 'dayjs';

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const App = ({}) => {
    const [dates, setDates] = useState<RangeValue>(null);
    const [value, setValue] = useState<RangeValue>(null);

    const disabledDate = (current: Dayjs) => {
        if (!dates) {
            return false;
        }

        const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
        return !!tooEarly || !!tooLate;
    };

    const onOpenChange = (open: boolean) => {
        if (open) {
            setDates([null, null]);
        } else {
            setDates(null);
        }
    };

    return (
        <KitSpace direction="vertical">
            <KitDatePicker.RangePicker
                value={dates || value}
                disabledDate={disabledDate}
                onCalendarChange={val => {
                    setDates(val);
                }}
                onChange={val => {
                    setValue(val);
                }}
                onOpenChange={onOpenChange}
                changeOnBlur
            />
        </KitSpace>
    );
};

export default App;
