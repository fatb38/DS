import React from 'react';
import { KitProgress } from "@kit/Feedback/";
import { KitSpace } from '@kit/Layout';


const App= ({}) => {
    return (
        <KitSpace wrap>
            <KitProgress type="dashboard" percent={75} />
            <KitProgress type="dashboard" percent={75} gapDegree={30} />
        </KitSpace>
    );
};

export default App;