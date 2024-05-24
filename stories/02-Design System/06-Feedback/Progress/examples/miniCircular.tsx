import React from 'react';
import {KitProgress, KitSpace} from '@kit/index';

const App = () => (
        <KitSpace wrap>
            <KitProgress type="circle" percent={30} size={80} />
            <KitProgress type="circle" percent={70} size={80} status="exception" />
            <KitProgress type="circle" percent={100} size={80} />
        </KitSpace>
    );

export default App;
