import React, {useMemo, useState} from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitColor} from '@kit/DataEntry/ColorPicker/types';
import {KitButton} from '@kit/General';

const App = () => {
    const [color, setColor] = useState<KitColor | string>('#1677ff');

    const bgColor = useMemo<string>(() => (typeof color === 'string' ? color : color.toHexString()), [color]);

    const btnStyle: React.CSSProperties = {
        backgroundColor: bgColor,
        borderColor: bgColor
    };

    return (
        <KitColorPicker value={color} onChange={setColor}>
            <KitButton type="primary" style={btnStyle}>
                open
            </KitButton>
        </KitColorPicker>
    );
};

export default App;
