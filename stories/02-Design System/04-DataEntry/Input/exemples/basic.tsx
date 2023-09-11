import React from 'react';
import {KitInput} from '@kit/DataEntry/';
import {KitSpace} from '@kit/Layout/';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitInput placeholder="Default" />
            <KitInput placeholder="Disabled" disabled={true} />
        </KitSpace>
    );
};

export default App;
