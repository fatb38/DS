import React from 'react';
import {KitProgress, KitSpace, KitTooltip} from '@kit/index';

const App = () => (
        <>
            <KitTooltip title="3 done / 3 in progress / 4 to do">
                <KitProgress percent={60} success={{percent: 30}} />
            </KitTooltip>
            <KitSpace wrap>
                <KitTooltip title="3 done / 3 in progress / 4 to do">
                    <KitProgress percent={60} success={{percent: 30}} type="circle" />
                </KitTooltip>
                <KitTooltip title="3 done / 3 in progress / 4 to do">
                    <KitProgress percent={60} success={{percent: 30}} type="dashboard" />
                </KitTooltip>
            </KitSpace>
        </>
    );

export default App;
