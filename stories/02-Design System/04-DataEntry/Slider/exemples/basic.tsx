import React, {useState} from 'react';
import {KitSlider, KitSwitch} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';

const App = () => {
    const [disabled, setDisabled] = useState(false);

    const onChange = (checked: boolean) => {
        setDisabled(checked);
    };

    return (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <KitTypography.Text>
                Disabled: <KitSwitch onChange={onChange} />
            </KitTypography.Text>
            <KitSlider defaultValue={40} disabled={disabled} />
            <KitSlider range defaultValue={[30, 60]} disabled={disabled} />
        </KitSpace>
    );
};

export default App;
