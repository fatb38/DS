import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => (
        <KitSpace direction="vertical">
            <KitDatePicker status="warning" />
            <KitDatePicker status="error" />
            <KitDatePicker.RangePicker status="warning" />
            <KitDatePicker.RangePicker status="error" />
        </KitSpace>
    );

export default App;
