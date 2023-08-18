import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import dayjs from 'dayjs';
import type {KitRangePickerProps} from '@kit/DataEntry/DatePicker/types';

const App = ({}) => {
    const range = (start: number, end: number) => {
        const result: number[] = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    };

    const disabledDate: KitRangePickerProps['disabledDate'] = current => {
        return current && current < dayjs().endOf('day');
    };

    const disabledDateTime = () => ({
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56]
    });

    const disabledRangeTime: KitRangePickerProps['disabledTime'] = (_, type) => {
        if (type === 'start') {
            return {
                disabledHours: () => range(0, 60).splice(4, 20),
                disabledMinutes: () => range(30, 60),
                disabledSeconds: () => [55, 56]
            };
        }
        return {
            disabledHours: () => range(0, 60).splice(20, 4),
            disabledMinutes: () => range(0, 31),
            disabledSeconds: () => [55, 56]
        };
    };

    return (
        <KitSpace direction="vertical">
            <KitDatePicker
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={disabledDate}
                disabledTime={disabledDateTime}
                showTime={{defaultValue: dayjs('00:00:00', 'HH:mm:ss')}}
            />
            <KitDatePicker picker="month" disabledDate={disabledDate} />
            <KitDatePicker.RangePicker disabledDate={disabledDate} />
            <KitDatePicker.RangePicker
                disabledDate={disabledDate}
                disabledTime={disabledRangeTime}
                showTime={{
                    hideDisabledOptions: true,
                    defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')]
                }}
                format="YYYY-MM-DD HH:mm:ss"
            />
        </KitSpace>
    );
};

export default App;
