import React from 'react';
import {KitProgress, KitSpace} from '@kit/index';

const App = () => (
        <>
            <KitProgress strokeLinecap="butt" percent={75} />
            <KitSpace wrap>
                <KitProgress strokeLinecap="butt" type="circle" percent={75} />
                <KitProgress strokeLinecap="butt" type="dashboard" percent={75} />
            </KitSpace>
        </>
    );

export default App;
