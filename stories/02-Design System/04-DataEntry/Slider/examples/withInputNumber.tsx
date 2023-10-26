import React, {useState} from 'react';
import {KitInputNumber, KitSlider} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => {
    const [value, setValue] = useState<string | number | null>(50);

    return (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <KitInputNumber min={0} max={100} value={value} onChange={setValue} />
            <KitSlider value={value ? +value : undefined} onChange={setValue} />
        </KitSpace>
    );
};

export default App;
