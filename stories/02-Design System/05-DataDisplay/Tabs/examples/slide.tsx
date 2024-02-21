import React, {useState} from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {TabsPosition} from 'antd/es/tabs';

const App = () => {
    const [mode, setMode] = useState<TabsPosition>('top');

    return (
        <>
            <KitSpace.Compact block>
                <KitButton type="segmented" onClick={() => setMode('top')} active={mode === 'top'}>
                    Horizontal
                </KitButton>
                <KitButton type="segmented" onClick={() => setMode('left')} active={mode === 'left'}>
                    Vertical
                </KitButton>
            </KitSpace.Compact>
            <KitTabs
                defaultActiveKey="1"
                tabPosition={mode}
                style={{height: 220, marginTop: '10px'}}
                items={new Array(30).fill(null).map((_, i) => {
                    const id = String(i);
                    return {
                        label: `Tab-${id}`,
                        key: id,
                        disabled: i === 28,
                        children: `Content of tab ${id}`
                    };
                })}
            />
        </>
    );
};

export default App;
