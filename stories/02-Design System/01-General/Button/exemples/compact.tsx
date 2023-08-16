import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {ReloadOutlined, SearchOutlined, PoweroffOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                    <KitButton type="segmented" icon={<ReloadOutlined />} />
                </KitSpace.Compact>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
