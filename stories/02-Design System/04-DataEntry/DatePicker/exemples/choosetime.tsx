import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import type {IKitDatePicker, IKitRangePicker} from '@kit/DataEntry/DatePicker/types';

const App = () => {
    const onChange = (
        value: IKitDatePicker['value'] | IKitRangePicker['value'],
        dateString: [string, string] | string
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value: IKitDatePicker['value'] | IKitRangePicker['value']) => {
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
