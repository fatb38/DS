import React from 'react';
import { KitProgress } from "@kit/Feedback/";
import { KitSpace } from '@kit/Layout';


const App= ({}) => {
    return (
        <KitSpace wrap>
            <KitProgress type="circle" percent={75} />
            <KitProgress type="circle" percent={70} status="exception" />
            <KitProgress type="circle" percent={100} />
        </KitSpace>
    );
};

export default App;