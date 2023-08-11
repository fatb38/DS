import React from 'react';
import { KitSpace } from '@kit/Layout';
import { KitButton } from '@kit/General';
import {
    ReloadOutlined
} from "@ant-design/icons";

const App= ({}) => {
    return ( <KitSpace wrap>
        <KitButton type="primary">Primary Button</KitButton>
        <KitButton>Default Button</KitButton>
        <KitButton type="link">Link Button</KitButton>
        <KitButton type="segmented" icon={<ReloadOutlined />} />
    </KitSpace>);
};

export default App;