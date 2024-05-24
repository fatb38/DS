import React from 'react';
import {KitProgress, KitSpace} from '@kit/index';

const App = () => (
        <KitSpace wrap>
            <KitProgress type="circle" percent={75} format={percent => `${percent} Days`} />
            <KitProgress type="circle" percent={100} format={() => 'Done'} />
        </KitSpace>
    );

export default App;
