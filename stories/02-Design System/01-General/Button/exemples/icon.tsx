import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {DownOutlined, FilterOutlined, SearchOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace direction="vertical">
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
                <KitButton type="segmented" icon={<FilterOutlined />} />
                <KitButton type="segmented" icon={<FilterOutlined />}>
                    Filter <DownOutlined />
                </KitButton>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
