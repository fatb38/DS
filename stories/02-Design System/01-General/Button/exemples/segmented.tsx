import React from 'react';
import { KitSpace } from '@kit/Layout';
import { KitButton } from '@kit/General';
import {
    ReloadOutlined
} from "@ant-design/icons";

const App= ({}) => {
    return (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitButton type="segmented" icon={<ReloadOutlined />} />
                <KitButton type="segmented" icon={<ReloadOutlined />} disabled />
                <br/>
                <br/>
                <KitButton type="segmented" icon={<ReloadOutlined />} loading />
                <KitButton type="segmented" icon={<ReloadOutlined />} danger />
                <KitButton type="segmented" icon={<ReloadOutlined />} danger disabled />
            </KitSpace>
        </KitSpace>
    );
};

export default App;