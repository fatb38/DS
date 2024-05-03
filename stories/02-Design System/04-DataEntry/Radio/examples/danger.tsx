import React from 'react';
import {KitRadio} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => (
        <KitSpace direction="vertical">
            <KitRadio danger>Unchecked</KitRadio>
            <KitRadio danger defaultChecked>
                Checked
            </KitRadio>
            <KitRadio danger disabled>
                Disabled Unchecked
            </KitRadio>
            <KitRadio danger defaultChecked disabled>
                Disabled Checked
            </KitRadio>
        </KitSpace>
    );

export default App;
