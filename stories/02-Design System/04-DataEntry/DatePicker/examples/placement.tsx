import React, {useState} from 'react';
import {KitDatePicker, KitSelect} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import type {IKitDatePicker} from '@kit/DataEntry/DatePicker/types';

const App = () => {
    const [placement, setPlacement] = useState<IKitDatePicker['placement']>('topLeft');

    const options = [
        {
            value: 'topLeft',
            label: 'Top left'
        },
        {
            value: 'topRight',
            label: 'Top right'
        },
        {
            value: 'bottomLeft',
            label: 'Bottom left'
        },
        {
            value: 'bottomRight',
            label: 'Bottom right'
        }
    ];

    const handleChange = (value: IKitDatePicker['placement']) => {
        setPlacement(value);
    };

    return (
        <KitSpace direction="vertical" style={{width: '100%', alignItems: 'center'}}>
            <KitSelect
                style={{width: 200}}
                defaultValue={placement}
                onChange={handleChange}
                options={options}
                labelOnly
            />
            <br />
            <KitDatePicker placement={placement} />
            <KitDatePicker.RangePicker placement={placement} />
        </KitSpace>
    );
};

export default App;
