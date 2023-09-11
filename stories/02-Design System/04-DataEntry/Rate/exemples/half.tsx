import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace>
            <KitRate allowHalf defaultValue={2.5} />
        </KitSpace>
    );
};

export default App;
