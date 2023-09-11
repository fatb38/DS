import React from 'react';
import {KitDatePicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => {
    return (
        <KitSpace>
            <KitSpace direction="vertical" style={{width: '200px', paddingRight: '20px'}}>
                <KitDatePicker helper="Helper" label="Label" allowClear={false} />
                <KitDatePicker helper="Helper" label="Label" />
                <KitDatePicker helper="Helper" label="Label" disabled />
                <KitDatePicker helper="Helper" label="Label" status="warning" />
                <KitDatePicker helper="Helper" label="Label" status="error" />
            </KitSpace>
            <KitSpace direction="vertical" style={{width: '400px', paddingRight: '20px'}}>
                <KitDatePicker.RangePicker helper="Helper" label="Label" allowClear={false} />
                <KitDatePicker.RangePicker helper="Helper" label="Label" />
                <KitDatePicker.RangePicker helper="Helper" label="Label" disabled />
                <KitDatePicker.RangePicker helper="Helper" label="Label" status="warning" />
                <KitDatePicker.RangePicker helper="Helper" label="Label" status="error" />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
