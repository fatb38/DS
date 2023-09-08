import React, {useState} from 'react';
import {KitButton} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {KitTabs} from '@kit/DataDisplay';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const App = () => {
    const [tabPosition, setTabPosition] = useState('left');

    const changeTabPosition = e => {
        setTabPosition(e.target.value);
    };

    return (
        <>
            <KitSpace style={{marginBottom: 24}}>
                Tab position:
                <KitSpace.Compact block>
                    <KitButton
                        type="segmented"
                        onClick={() => setTabPosition('top')}
                        segmentedActived={tabPosition === 'top'}
                    >
                        Top
                    </KitButton>
                    <KitButton
                        type="segmented"
                        onClick={() => setTabPosition('bottom')}
                        segmentedActived={tabPosition === 'bottom'}
                    >
                        Bottom
                    </KitButton>
                    <KitButton
                        type="segmented"
                        onClick={() => setTabPosition('left')}
                        segmentedActived={tabPosition === 'bottom'}
                    >
                        Left
                    </KitButton>
                    <KitButton
                        type="segmented"
                        onClick={() => setTabPosition('right')}
                        segmentedActived={tabPosition === 'right'}
                    >
                        Right
                    </KitButton>
                </KitSpace.Compact>
            </KitSpace>
            <KitTabs
                tabPosition={tabPosition as TabPosition}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Content of Tab ${id}`
                    };
                })}
            />
        </>
    );
};

export default App;
