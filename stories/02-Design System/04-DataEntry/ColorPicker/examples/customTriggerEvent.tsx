import React from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace>
            <KitColorPicker showText />
            <KitColorPicker trigger="hover" showText />
        </KitSpace>
    );

export default App;
