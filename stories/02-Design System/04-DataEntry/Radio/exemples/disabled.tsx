import React, {useState} from 'react';
import {KitRadio} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General/';

const App = () => {
    const [disabled, setDisabled] = useState(true);

    const toggleDisabled = () => {
        setDisabled(!disabled);
    };

    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitRadio defaultChecked={false} disabled={disabled}>
                    Disabled
                </KitRadio>
                <KitRadio defaultChecked disabled={disabled}>
                    Disabled
                </KitRadio>
            </KitSpace>
            <br />
            <KitButton type="primary" onClick={toggleDisabled}>
                Toggle disabled
            </KitButton>
        </KitSpace>
    );
};

export default App;
