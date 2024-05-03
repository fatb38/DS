import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import dayjs from 'dayjs';

const App = () => (
        <KitSpace direction="vertical">
            <KitDatePicker
                presets={[
                    {label: 'Yesterday', value: dayjs().add(-1, 'd')},
                    {label: 'Last Week', value: dayjs().add(-7, 'd')},
                    {label: 'Last Month', value: dayjs().add(-1, 'month')}
                ]}
            />
            <KitDatePicker.RangePicker
                presets={[
                    {label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()]},
                    {label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()]},
                    {label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()]},
                    {label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()]}
                ]}
            />
        </KitSpace>
    );

export default App;
