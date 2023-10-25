import React from 'react';
import {KitProgress, KitSpace} from '@kit/index';

const App = () => {
    return (
        <KitSpace wrap>
            <KitProgress type="dashboard" percent={75} />
            <KitProgress type="dashboard" percent={75} gapDegree={30} />
        </KitSpace>
    );
};

export default App;
