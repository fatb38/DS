import React from 'react';
import { KitProgress } from "@kit/Feedback/";
import { KitSpace } from '@kit/Layout';


const App= ({}) => {
    return (
        <KitSpace wrap>
            <KitProgress type="circle" percent={75} format={(percent) => `${percent} Days`} />
            <KitProgress type="circle" percent={100} format={() => 'Done'} />
        </KitSpace>
    );
};

export default App;