import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';

const App = () => {
    return (
        <KitSpace size="large">
            <KitBadge count={99}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={100}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={99} overflowCount={10}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge count={1000} overflowCount={999}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
        </KitSpace>
    );
};

export default App;
