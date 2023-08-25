import React from 'react';
import {KitAvatar} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {UserOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace direction="vertical" size={16}>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" icon={<UserOutlined />} />
                <KitAvatar icon={<UserOutlined />} />
                <KitAvatar size="large" icon={<UserOutlined />} />
                <KitAvatar size={64} icon={<UserOutlined />} />
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar shape="square" size="small" icon={<UserOutlined />} />
                <KitAvatar shape="square" icon={<UserOutlined />} />
                <KitAvatar shape="square" size="large" icon={<UserOutlined />} />
                <KitAvatar shape="square" size={64} icon={<UserOutlined />} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
