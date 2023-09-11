import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {ReloadOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace wrap>
            <KitButton type="primary">Primary Button</KitButton>
            <KitButton>Default Button</KitButton>
            <KitButton type="link">Link Button</KitButton>
            <KitButton type="segmented" icon={<ReloadOutlined />} />
        </KitSpace>
    );
};

export default App;
