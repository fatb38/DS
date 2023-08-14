import React from 'react';
import { KitProgress } from "@kit/Feedback/";
import { KitSpace } from '@kit/Layout';


const App= ({}) => {
    return (
        <>
            <KitProgress strokeLinecap="butt" percent={75} />
            <KitSpace wrap>
                <KitProgress strokeLinecap="butt" type="circle" percent={75} />
                <KitProgress strokeLinecap="butt" type="dashboard" percent={75} />
            </KitSpace>
        </>
    );
};

export default App;