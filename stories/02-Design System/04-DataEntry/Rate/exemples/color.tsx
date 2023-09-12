import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitRate defaultValue={3} />
            <KitRate defaultValue={3} color="red" />
            <KitRate defaultValue={3} color="green" />
            <KitRate defaultValue={3} color="blue" />
        </KitSpace>
    );
};

export default App;
