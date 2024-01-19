import React from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace>
            <KitInputNumber formatter={value => `￥ ${value}`} />
            <KitInputNumber formatter={value => `￥ ${value}`} disabled={true} />
        </KitSpace>
    );
};

export default App;
