import React, {useState} from 'react';
import {KitInput, KitRadio} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {RadioChangeEvent} from 'antd';

const App = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value as number);
    };

    return (
        <KitRadio.Group onChange={onChange} value={value}>
            <KitSpace direction="vertical">
                <KitRadio value={1}>Option A</KitRadio>
                <KitRadio value={2}>Option B</KitRadio>
                <KitRadio value={3}>Option C</KitRadio>
                <KitRadio value={4}>
                    {value !== 4 && 'More...'}
                    {value === 4 && <KitInput style={{width: 100, marginLeft: 10}} />}
                </KitRadio>
            </KitSpace>
        </KitRadio.Group>
    );
};

export default App;
