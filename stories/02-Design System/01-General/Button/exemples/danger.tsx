import React from 'react';
import { KitSpace } from '@kit/Layout';
import { KitButton } from '@kit/General';
import {
    SearchOutlined
} from "@ant-design/icons";


const App= ({}) => {
    return (
        <KitSpace wrap>
            <KitButton type="primary" danger>Primary</KitButton>
            <KitButton danger>Default</KitButton>
            <KitButton type="link" danger> Link</KitButton>
        </KitSpace>
    );
};

export default App;