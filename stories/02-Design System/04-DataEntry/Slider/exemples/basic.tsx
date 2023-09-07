import React, {useState} from 'react';
import {KitSlider, KitSwitch} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';
import {Typography} from 'antd';

const App = () => {
    const [disabled, setDisabled] = useState(false);

    const onChange = (checked: boolean) => {
        setDisabled(checked);
    };

    return (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <Typography>
                Disabled: <KitSwitch onChange={onChange} />
            </Typography>
            <KitSlider defaultValue={40} disabled={disabled} />
            <KitSlider range defaultValue={[30, 60]} disabled={disabled} />
        </KitSpace>
    );
};

export default App;
