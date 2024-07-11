import React from 'react';
import {KitDivider, KitSpace} from '@kit/Layout/';
import dayjs from 'dayjs';
import {KitDatePicker} from '@kit/DataEntry';

const dateFormat = 'YYYY/MM/DD';
const App = () => (
    <>
        <KitDivider orientation="left">Read only</KitDivider>
        <KitSpace align="start" size="s" style={{marginBottom: '16px'}}>
            <KitDatePicker readonly label="Label" />
            <KitDatePicker defaultValue={dayjs('2024/06/28', dateFormat)} format={dateFormat} readonly label="Label" />
        </KitSpace>
        <KitSpace align="start" size="s">
            <KitDatePicker.RangePicker readonly label="Label" />
            <KitDatePicker.RangePicker
                defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
                format={dateFormat}
                readonly
                label="Label"
            />
        </KitSpace>
        <KitDivider orientation="left">Read only error</KitDivider>
        <KitSpace align="start" size="s" style={{marginBottom: '16px'}}>
            <KitDatePicker readonly label="Label" status="error" />
            <KitDatePicker
                defaultValue={dayjs('2024/06/28', dateFormat)}
                format={dateFormat}
                readonly
                status="error"
                label="Label"
            />
        </KitSpace>
        <KitSpace align="start" size="xl">
            <KitDatePicker.RangePicker readonly status="error" label="Label" />
            <KitDatePicker.RangePicker
                defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
                format={dateFormat}
                readonly
                status="error"
                label="Label"
            />
        </KitSpace>
    </>
);

export default App;
