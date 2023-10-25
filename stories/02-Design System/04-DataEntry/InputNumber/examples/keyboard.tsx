import React, {useState} from 'react';
import {KitCheckbox, KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => {
    const [keyboard, setKeyboard] = useState(true);

    return (
        <KitSpace>
            <KitInputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />
            <KitCheckbox
                onChange={() => {
                    setKeyboard(!keyboard);
                }}
                checked={keyboard}
            >
                Toggle keyboard
            </KitCheckbox>
        </KitSpace>
    );
};

export default App;
