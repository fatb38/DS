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
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" icon={<UserOutlined />} color="blueInvert" />
                <KitAvatar icon={<UserOutlined />} color="blueInvert" />
                <KitAvatar size="large" icon={<UserOutlined />} color="blueInvert" />
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small">U</KitAvatar>
                <KitAvatar>U</KitAvatar>
                <KitAvatar size="large">U</KitAvatar>
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" color="blueInvert">
                    U
                </KitAvatar>
                <KitAvatar color="blueInvert">U</KitAvatar>
                <KitAvatar size="large" color="blueInvert">
                    U
                </KitAvatar>
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" color="#36acaa">
                    U
                </KitAvatar>
                <KitAvatar color="#d1dfe9">
                    U
                </KitAvatar>
                <KitAvatar size="large" color="#2e3438">
                    U
                </KitAvatar>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
