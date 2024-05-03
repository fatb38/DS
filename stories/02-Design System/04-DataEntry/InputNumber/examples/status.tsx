import React from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace direction="vertical">
            <KitSpace align="start">
                <KitInputNumber status="warning" placeholder="1" />
                <KitInputNumber formatter={value => `￥${value}`} status="warning" placeholder="1" />
            </KitSpace>
            <KitSpace align="start">
                <KitInputNumber status="error" placeholder="1" />
                <KitInputNumber formatter={value => `￥${value}`} status="error" placeholder="1" />
            </KitSpace>
        </KitSpace>
    );

export default App;
