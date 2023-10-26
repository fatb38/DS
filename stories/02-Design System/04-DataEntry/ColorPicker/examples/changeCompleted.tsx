import React, {useState} from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitColorPickerProps} from '@kit/DataEntry/ColorPicker/types';

const App = () => {
    const [value, setValue] = useState<KitColorPickerProps['value']>('#1677ff');

    return (
        <>
            <KitColorPicker
                showText
                value={value}
                onChangeComplete={color => {
                    setValue(color);
                    console.log(`The selected color is ${color.toHexString()}`);
                }}
            />
        </>
    );
};

export default App;
