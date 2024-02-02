import React, {useState} from 'react';
import {KitRadio} from '@kit/DataEntry/';
import {RadioChangeEvent} from 'antd';
import {KitSpace} from '@kit/Layout';

const App = () => {
    const [value, setValue] = useState([1, 1]);

    const onChange = (index: number) => (event: RadioChangeEvent) => {
        console.log('radio checked', event.target.value);
        const values = [...value];
        values[index] = event.target.value as number;
        setValue(values);
    };

    return (
        <KitSpace size={24}>
            <KitRadio.Group onChange={onChange(0)} value={value[0]}>
                <KitRadio value={1}>A</KitRadio>
                <KitRadio value={2}>B</KitRadio>
                <KitRadio value={3}>C</KitRadio>
                <KitRadio value={4}>D</KitRadio>
            </KitRadio.Group>
            <KitRadio.Group onChange={onChange(1)} value={value[1]} bordered>
                <KitRadio value={1}>A</KitRadio>
                <KitRadio value={2}>B</KitRadio>
                <KitRadio value={3}>C</KitRadio>
                <KitRadio value={4}>D</KitRadio>
            </KitRadio.Group>
        </KitSpace>
    );
};

export default App;
