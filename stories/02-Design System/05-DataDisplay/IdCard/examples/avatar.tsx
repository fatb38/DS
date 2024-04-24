import React from 'react';
import {KitIdCard} from '@kit/DataDisplay';
import {IKitAvatar} from '@kit/DataDisplay/Avatar/types';

const avatarProps: IKitAvatar = {
    shape: 'square',
    label: 'John Doe'
};

const App = () => {
    return <KitIdCard avatarProps={avatarProps} title="John Doe" description="A talented software developer." />;
};

export default App;
