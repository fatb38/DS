import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {FilterOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitButton type="segmented" icon={<FilterOutlined />} iconSize="xs" />
                <KitButton type="segmented" icon={<FilterOutlined />} iconSize="s" />
                <KitButton type="segmented" icon={<FilterOutlined />} iconSize="m" />
                <KitButton type="segmented" icon={<FilterOutlined />} iconSize="l" />
                <KitButton type="segmented" icon={<FilterOutlined />} iconSize="xl" />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
