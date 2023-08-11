import React from 'react';
import { KitSpace } from '@kit/Layout';
import { KitButton } from '@kit/General';
import {
    ReloadOutlined,
    PoweroffOutlined,
    SearchOutlined
} from "@ant-design/icons";

const App= ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} isActiveSegmented />
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} isActiveSegmented isCheckedSegmented/>
                </KitSpace.Compact>
            </KitSpace>
            <br/>
            <KitSpace wrap>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} isActiveSegmented/>
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                    <KitButton type="segmented" icon={<ReloadOutlined />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} isActiveSegmented isCheckedSegmented />
                    <KitButton type="segmented" icon={<ReloadOutlined />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                    <KitButton type="segmented" icon={<ReloadOutlined />} isActiveSegmented isCheckedSegmented />
                </KitSpace.Compact>
            </KitSpace>
        </KitSpace>
    );
};

export default App;