import React from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace align="start">
                <KitInputNumber status="warning" placeholder="1" />
                <KitInputNumber prefix="￥" status="warning" placeholder="1" />
            </KitSpace>
            <KitSpace align="start">
                <KitInputNumber status="error" placeholder="1" />
                <KitInputNumber prefix="￥" status="error" placeholder="1" />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
