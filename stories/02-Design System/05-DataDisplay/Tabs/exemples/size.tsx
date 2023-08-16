import React, {useState} from 'react';
import {KitTabs} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {SizeType} from 'antd/es/config-provider/SizeContext';

const App = () => {
    const [size, setSize] = useState('small');

    const onChange = e => {
        setSize(e.target.value);
    };

    return (
        <div>
            <KitSpace.Compact block>
                <KitButton type="segmented" onClick={() => setSize('small')} isActiveSegmented={size === 'small'}>
                    Small
                </KitButton>
                <KitButton type="segmented" onClick={() => setSize('middle')} isActiveSegmented={size === 'middle'}>
                    Middle
                </KitButton>
                <KitButton type="segmented" onClick={() => setSize('large')} isActiveSegmented={size === 'large'}>
                    Large
                </KitButton>
            </KitSpace.Compact>
            <KitTabs
                defaultActiveKey="1"
                size={size as SizeType}
                style={{marginBottom: 32}}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Content of tab ${id}`
                    };
                })}
            />
            <KitTabs
                defaultActiveKey="1"
                type="card"
                size={size as SizeType}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: `Card Tab ${id}`,
                        key: id,
                        children: `Content of card tab ${id}`
                    };
                })}
            />
        </div>
    );
};

export default App;
