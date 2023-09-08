import React from 'react';
import {KitButton, KitSpace} from '@kit/index';
import {SearchOutlined} from '@ant-design/icons';

const App = ({}) => {
    return (
        <KitSpace wrap>
            <KitButton type="primary" danger>
                Primary
            </KitButton>
            <KitButton danger>Default</KitButton>
            <KitButton type="link" danger>
                {' '}
                Link
            </KitButton>
            <KitButton type="segmented" icon={<SearchOutlined />} danger />
        </KitSpace>
    );
};

export default App;
