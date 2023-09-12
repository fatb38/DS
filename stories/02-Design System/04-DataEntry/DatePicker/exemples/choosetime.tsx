import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import type {KitDatePickerProps, KitRangePickerProps} from '@kit/DataEntry/DatePicker/types';

const App = () => {
    const onChange = (
        value: KitDatePickerProps['value'] | KitRangePickerProps['value'],
        dateString: [string, string] | string
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value: KitDatePickerProps['value'] | KitRangePickerProps['value']) => {
        console.log('onOk: ', value);
    };

    return (
        <KitSpace direction="vertical">
            <KitDatePicker showTime onChange={onChange} onOk={onOk} />
            <KitDatePicker.RangePicker
                showTime={{format: 'HH:mm'}}
                onChange={onChange}
                onOk={onOk}
                format="YYYY-MM-DD HH:mm"
            />
        </KitSpace>
    );
};

export default App;
