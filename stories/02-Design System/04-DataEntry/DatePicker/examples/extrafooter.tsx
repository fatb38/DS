import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => (
        <KitSpace direction="vertical">
            <KitDatePicker renderExtraFooter={() => 'extra footer'} />
            <KitDatePicker renderExtraFooter={() => 'extra footer'} showTime />
            <KitDatePicker.RangePicker renderExtraFooter={() => 'extra footer'} />
            <KitDatePicker.RangePicker renderExtraFooter={() => 'extra footer'} showTime />
            <KitDatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
        </KitSpace>
    );

export default App;
