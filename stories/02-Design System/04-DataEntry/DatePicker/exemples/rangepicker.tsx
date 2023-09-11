import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitDatePicker.RangePicker />
            <KitDatePicker.RangePicker picker="time" />
            <KitDatePicker.RangePicker picker="week" />
            <KitDatePicker.RangePicker picker="month" />
            <KitDatePicker.RangePicker picker="quarter" />
            <KitDatePicker.RangePicker picker="year" />
        </KitSpace>
    );
};

export default App;
