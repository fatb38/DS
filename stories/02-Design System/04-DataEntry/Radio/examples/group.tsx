import React, {useState} from 'react';
import {KitRadio} from '@kit/DataEntry/';
import {RadioChangeEvent} from 'antd';

const App = () => {
    const [value, setValue] = useState(1);

    const onChange = (event: RadioChangeEvent) => {
        console.log('radio checked', event.target.value);
        setValue(event.target.value as number);
    };

    return (
        <KitRadio.Group onChange={onChange} value={value}>
            <KitRadio value={1}>A</KitRadio>
            <KitRadio value={2}>B</KitRadio>
            <KitRadio value={3}>C</KitRadio>
            <KitRadio value={4}>D</KitRadio>
        </KitRadio.Group>
    );
};

export default App;
