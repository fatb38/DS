import React from 'react';
import {KitSlider} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const formatter = (value: number | undefined) => `${value}%`;

const App = () => {
    return (
        <KitSpace direction="vertical" style={{width: '300px'}}>
            <KitSlider tooltip={{formatter}} />
            <KitSlider tooltip={{formatter: null}} />
        </KitSpace>
    );
};

export default App;
