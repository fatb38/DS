import React from 'react';
import {KitAvatar} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {UserOutlined} from '@ant-design/icons';

const App = () => {
    const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

    return (
        <KitSpace direction="vertical" size={16}>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" icon={<UserOutlined />} />
                <KitAvatar icon={<UserOutlined />} />
                <KitAvatar size="large" icon={<UserOutlined />} />
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small">U</KitAvatar>
                <KitAvatar>U</KitAvatar>
                <KitAvatar size="large">U</KitAvatar>
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small">User</KitAvatar>
                <KitAvatar>User</KitAvatar>
                <KitAvatar size="large">User</KitAvatar>
            </KitSpace>
            <KitSpace wrap size={16}>
                <KitAvatar size="small" src={url} />
                <KitAvatar src={url} />
                <KitAvatar size="large" src={url} />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
