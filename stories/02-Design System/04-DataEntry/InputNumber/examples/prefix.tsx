import React from 'react';
import {KitInputNumber} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace>
            <KitInputNumber prefix="￥" />
            <KitInputNumber prefix="￥" disabled={true} />
        </KitSpace>
    );
};

export default App;
