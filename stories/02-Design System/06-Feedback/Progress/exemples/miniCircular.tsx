import React from 'react';
import { KitProgress } from "@kit/Feedback/";
import { KitSpace } from '@kit/Layout';


const App= ({}) => {
    return (
        <KitSpace wrap>
            <KitProgress type="circle" percent={30} size={80} />
            <KitProgress type="circle" percent={70} size={80} status="exception" />
            <KitProgress type="circle" percent={100} size={80} />
        </KitSpace>
    );
};

export default App;