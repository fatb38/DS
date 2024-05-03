import React from 'react';
import {KitRate} from '@kit/DataEntry';
import {KitSpace} from '@kit/Layout';

const App = () => (
        <KitSpace>
            <KitRate allowHalf defaultValue={2.5} />
        </KitSpace>
    );

export default App;
