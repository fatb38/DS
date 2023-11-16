import React, {useState} from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitColor} from '@kit/DataEntry/ColorPicker/types';

const App = () => {
    const [color, setColor] = useState<KitColor | string>('#1677ff');

    return <KitColorPicker showText value={color} onChange={setColor} />;
};

export default App;
