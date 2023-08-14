import React from 'react';
import { KitProgress } from "@kit/Feedback/";
import { KitSpace } from '@kit/Layout';
import { KitTooltip } from '@kit/DataDisplay';


const App= ({}) => {
    return (
        <>
            <KitTooltip title="3 done / 3 in progress / 4 to do">
                <KitProgress percent={60} success={{ percent: 30 }} />
            </KitTooltip>
            <KitSpace wrap>
                <KitTooltip title="3 done / 3 in progress / 4 to do">
                    <KitProgress percent={60} success={{ percent: 30 }} type="circle" />
                </KitTooltip>
                <KitTooltip title="3 done / 3 in progress / 4 to do">
                    <KitProgress percent={60} success={{ percent: 30 }} type="dashboard" />
                </KitTooltip>
            </KitSpace>
        </>
    );
};

export default App;