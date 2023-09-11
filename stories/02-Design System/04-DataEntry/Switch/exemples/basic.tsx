import React from 'react';
import {KitSwitch} from '@kit/DataEntry';

const App = () => {
    const onChange = checked => {
        console.log(`switch to ${checked}`);
    };

    return <KitSwitch defaultChecked onChange={onChange} />;
};

export default App;
