import React from 'react';
import {KitCheckbox} from '@kit/DataEntry/';
import {CheckboxChangeEvent} from 'antd/lib/checkbox';

const App = () => {
    const onChange = (event: CheckboxChangeEvent) => {
        console.log(`checked = ${event.target.checked}`);
    };

    return <KitCheckbox onChange={onChange}>Checkbox</KitCheckbox>;
};

export default App;
