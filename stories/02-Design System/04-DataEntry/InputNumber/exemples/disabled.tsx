import React, {useState} from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitButton} from '@kit/General';
import {KitSpace} from '@kit/Layout';

const App = ({}) => {
    const [disabled, setDisabled] = useState(true);
    const toggle = () => {
        setDisabled(!disabled);
    };

    return (
        <KitSpace>
            <KitInputNumber min={1} max={10} placeholder="1" disabled={disabled} />
            <KitButton onClick={toggle} type="primary">
                Toggle disabled
            </KitButton>
        </KitSpace>
    );
};

export default App;
