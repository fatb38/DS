import React, {useState} from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';

const App = () => {
    const [value, setValue] = useState<string | number | null>(99);

    return (
        <KitSpace>
            <KitInputNumber min={1} max={10} value={value} onChange={setValue} />
            <KitButton
                type="primary"
                onClick={() => {
                    setValue(99);
                }}
            >
                Reset
            </KitButton>
        </KitSpace>
    );
};

export default App;
