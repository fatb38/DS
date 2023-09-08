import React, {useState} from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {TabsPosition} from 'antd/es/tabs';

const App = () => {
    const [mode, setMode] = useState('top');

    return (
        <div>
            <KitSpace.Compact block>
                <KitButton type="segmented" onClick={() => setMode('top')} segmentedActived={mode === 'top'}>
                    Horizontal
                </KitButton>
                <KitButton type="segmented" onClick={() => setMode('left')} segmentedActived={mode === 'left'}>
                    Vertical
                </KitButton>
            </KitSpace.Compact>
            <KitTabs
                defaultActiveKey="1"
                tabPosition={mode as TabsPosition}
                style={{height: 220}}
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
        </div>
    );
};

export default App;
