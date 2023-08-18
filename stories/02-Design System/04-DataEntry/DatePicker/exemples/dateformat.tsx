import React from 'react';
import dayjs from 'dayjs';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = ({}) => {
    const dateFormat = 'YYYY/MM/DD';
    const weekFormat = 'MM/DD';
    const monthFormat = 'YYYY/MM';
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

    const customWeekStartEndFormat = value => {
        return `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value).endOf('week').format(weekFormat)}`;
    };

    const customFormat = value => {
        return `custom format: ${value.format(dateFormat)}`;
    };

    return (
        <KitSpace direction="vertical">
            <KitDatePicker defaultValue={dayjs('2023/01/01', dateFormat)} format={dateFormat} />
            <KitDatePicker defaultValue={dayjs('01/01/2023', dateFormatList[0])} format={dateFormatList} />
            <KitDatePicker defaultValue={dayjs('2023/01', monthFormat)} format={monthFormat} picker="month" />
            <KitDatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
            <KitDatePicker.RangePicker
                defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
                format={dateFormat}
            />
            <KitDatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
        </KitSpace>
    );
};

export default App;
