import React, {useState} from 'react';
import {KitSlider, KitSwitch} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';
import {KitTypography} from '@kit/General';

const App = () => {
    const [reversed, setReversed] = useState(false);

    const onChange = (checked: boolean) => {
        setReversed(checked);
    };

    return (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <KitTypography.Text>
                Reversed: <KitSwitch onChange={onChange} />
            </KitTypography.Text>
            <KitSlider defaultValue={40} reverse={reversed} />
            <KitSlider range defaultValue={[30, 60]} reverse={reversed} />
        </KitSpace>
    );
};

export default App;
