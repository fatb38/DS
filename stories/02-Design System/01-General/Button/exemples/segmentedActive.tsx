import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {ReloadOutlined, PoweroffOutlined, SearchOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedActived />
                <KitButton type="segmented" icon={<SearchOutlined />} segmentedActived segmentedChecked />
            </KitSpace>
            <br />
            <KitSpace wrap>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedActived />
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} segmentedActived segmentedChecked />
                </KitSpace.Compact>
            </KitSpace>
            <br />
            <KitSpace wrap>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedActived />
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                    <KitButton type="segmented" icon={<ReloadOutlined />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} segmentedActived segmentedChecked />
                    <KitButton type="segmented" icon={<ReloadOutlined />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                    <KitButton type="segmented" icon={<ReloadOutlined />} segmentedActived segmentedChecked />
                </KitSpace.Compact>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
