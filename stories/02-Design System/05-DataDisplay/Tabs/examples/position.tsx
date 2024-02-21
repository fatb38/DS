import React, {useState} from 'react';
import {KitButton} from '@kit/General';
import {KitSpace} from '@kit/Layout';
import {KitTabs} from '@kit/DataDisplay';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const App = () => {
    const [tabPosition, setTabPosition] = useState<TabPosition>('left');

    return (
        <>
            <KitSpace style={{marginBottom: 24}}>
                Tab position:
                <KitSpace.Compact block>
                    <KitButton type="segmented" onClick={() => setTabPosition('top')} active={tabPosition === 'top'}>
                        Top
                    </KitButton>
                    <KitButton
                        type="segmented"
                        onClick={() => setTabPosition('bottom')}
                        active={tabPosition === 'bottom'}
                    >
                        Bottom
                    </KitButton>
                    <KitButton type="segmented" onClick={() => setTabPosition('left')} active={tabPosition === 'left'}>
                        Left
                    </KitButton>
                    <KitButton
                        type="segmented"
                        onClick={() => setTabPosition('right')}
                        active={tabPosition === 'right'}
                    >
                        Right
                    </KitButton>
                </KitSpace.Compact>
            </KitSpace>
            <KitTabs
                tabPosition={tabPosition}
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
