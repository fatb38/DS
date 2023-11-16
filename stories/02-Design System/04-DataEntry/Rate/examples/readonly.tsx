import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitRate disabled defaultValue={2.5} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
