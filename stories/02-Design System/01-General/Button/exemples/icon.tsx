import React from 'react';
import { KitSpace } from '@kit/Layout';
import { KitButton } from '@kit/General';
import {
    SearchOutlined
} from "@ant-design/icons";


const App= ({}) => {
    return ( <KitSpace direction="vertical">
    <KitSpace wrap>
        <KitButton type="primary" icon={<SearchOutlined />} />
        <KitButton type="primary" icon={<SearchOutlined />}>
            Search
        </KitButton>
        <KitButton icon={<SearchOutlined />} />
        <KitButton icon={<SearchOutlined />}>Search</KitButton>
        <KitButton type="link" icon={<SearchOutlined />} />
        <KitButton type="link" icon={<SearchOutlined />}>
            Search
        </KitButton>
    </KitSpace>
</KitSpace>);
};

export default App;