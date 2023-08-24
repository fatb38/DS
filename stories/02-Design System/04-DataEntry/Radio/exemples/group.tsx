import React, {useState} from 'react';
import {KitRadio} from '@kit/DataEntry/';

const App = () => {
    const [value, setValue] = useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
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
