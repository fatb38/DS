import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {ClockCircleOutlined} from '@ant-design/icons';
import {useKitTheme} from '@theme/theme-context';

const App = () => {
    const {theme} = useKitTheme();
    return (
        <KitSpace size="s">
            <KitBadge count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={0} showZero>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={<ClockCircleOutlined style={{color: theme.general.colors.secondary.red.red400}} />}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
        </KitSpace>
    );
};

export default App;
