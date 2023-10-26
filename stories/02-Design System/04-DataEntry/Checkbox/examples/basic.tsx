import React from 'react';
import {KitCheckbox} from '@kit/DataEntry/';

const App = () => {
    const onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    };

    return <KitCheckbox onChange={onChange}>Checkbox</KitCheckbox>;
};

export default App;
