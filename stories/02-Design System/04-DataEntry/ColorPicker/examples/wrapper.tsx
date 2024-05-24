import React from 'react';
import {KitColorPicker} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace direction="vertical" size="m">
            <KitColorPicker label="Label" helper="Helper" showText />
            <KitColorPicker label="Label" helper="Helper" showText disabled />
        </KitSpace>
    );

export default App;
