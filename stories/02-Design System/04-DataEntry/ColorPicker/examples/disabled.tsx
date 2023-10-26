import React from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace>
            <KitColorPicker disabled />
            <KitColorPicker disabled showText />
        </KitSpace>
    );
};

export default App;
