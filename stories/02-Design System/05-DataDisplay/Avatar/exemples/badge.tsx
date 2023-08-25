import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {UserOutlined} from '@ant-design/icons';

const App = () => {
    return (
        <KitSpace size={24}>
            <KitBadge count={1}>
                <KitAvatar shape="square" icon={<UserOutlined />} />
            </KitBadge>
            <KitBadge dot>
                <KitAvatar shape="square" icon={<UserOutlined />} />
            </KitBadge>
        </KitSpace>
    );
};

export default App;
