import React from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace>
            <KitColorPicker disabled />
            <KitColorPicker disabled showText />
        </KitSpace>
    );

export default App;
