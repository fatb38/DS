import React, {useState} from 'react';
import {KitSwitch} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';

const App = () => {
    const [disabled, setDisabled] = useState(true);
    const toggle = () => {
        setDisabled(!disabled);
    };

    return (
        <KitSpace direction="vertical">
            <KitSwitch disabled={disabled} defaultChecked />
            <KitButton type="primary" onClick={toggle}>
                Toggle disabled
            </KitButton>
        </KitSpace>
    );
};

export default App;
