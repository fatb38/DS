import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {ClockCircleOutlined} from '@ant-design/icons';
import theme from '@theme/index';

const App = () => {
    return (
        <KitSpace size="middle">
            <KitBadge count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={0} showZero>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={<ClockCircleOutlined style={{color: theme.color.secondary.red.red400}} />}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
        </KitSpace>
    );
};

export default App;
