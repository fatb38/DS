import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import type {IKitDatePicker} from '@kit/DataEntry/DatePicker/types';

const App = () => {
    const onChange: IKitDatePicker['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <KitSpace direction="vertical">
            <KitDatePicker onChange={onChange} />
            <KitDatePicker onChange={onChange} picker="time" />
            <KitDatePicker onChange={onChange} picker="week" />
            <KitDatePicker onChange={onChange} picker="month" />
            <KitDatePicker onChange={onChange} picker="quarter" />
            <KitDatePicker onChange={onChange} picker="year" />
        </KitSpace>
    );
};

export default App;
