import React, {useState} from 'react';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General/';

const App = () => {
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;

    const toggleChecked = () => {
        setChecked(!checked);
    };

    const toggleDisable = () => {
        setDisabled(!disabled);
    };

    const onChange = e => {
        console.log('checked = ', e.target.checked);
        setChecked(e.target.checked);
    };

    return (
        <KitSpace direction="vertical">
            <KitCheckbox checked={checked} disabled={disabled} onChange={onChange}>
                {label}
            </KitCheckbox>
            <br />
            <KitSpace>
                <KitButton type="primary" onClick={toggleChecked}>
                    {!checked ? 'Check' : 'Uncheck'}
                </KitButton>
                <KitButton type="primary" onClick={toggleDisable}>
                    {!disabled ? 'Disable' : 'Enable'}
                </KitButton>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
