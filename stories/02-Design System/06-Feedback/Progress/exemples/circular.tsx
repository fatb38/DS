import React from 'react';
import {KitProgress, KitSpace} from '@kit/index';

const App = () => {
    return (
        <KitSpace wrap>
            <KitProgress type="circle" percent={75} />
            <KitProgress type="circle" percent={70} status="exception" />
            <KitProgress type="circle" percent={100} />
        </KitSpace>
    );
};

export default App;
