import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import dayjs from 'dayjs';

const App = ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitDatePicker disabled />
            <KitDatePicker defaultValue={dayjs('2023-06-06', 'YYYY-MM-DD')} disabled />
            <KitDatePicker.RangePicker disabled />
            <KitDatePicker.RangePicker
                defaultValue={[dayjs('2023-06-06', 'YYYY-MM-DD'), dayjs('2023-06-06', 'YYYY-MM-DD')]}
                disabled
            />
            <KitDatePicker.RangePicker
                defaultValue={[dayjs('2023-06-06', 'YYYY-MM-DD'), dayjs('2023-06-06', 'YYYY-MM-DD')]}
                disabled={[false, true]}
            />
        </KitSpace>
    );
};

export default App;
