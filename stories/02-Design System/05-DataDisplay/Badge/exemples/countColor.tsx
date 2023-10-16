import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';

const App = () => {
    return (
        <KitSpace size="s">
            <KitBadge countColor="default" count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge countColor="green" count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge countColor="blue" count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge countColor="blueInvert" count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge countColor="gray" count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
        </KitSpace>
    );
};

export default App;
