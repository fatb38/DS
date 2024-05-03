import React from 'react';
import {KitIdCard} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {IKitAvatar} from '@kit/DataDisplay/Avatar/types';

const avatarProps: IKitAvatar = {
    shape: 'square',
    label: 'John Doe'
};

const App = () => (
        <KitSpace direction="horizontal" size="l">
            <KitIdCard
                avatarProps={avatarProps}
                title="John Doe"
                description="A talented software developer."
                size="medium"
            />
            <KitIdCard
                avatarProps={avatarProps}
                title="John Doe"
                description="A talented software developer."
                size="large"
            />
        </KitSpace>
    );

export default App;
