import {KitAvatar, KitIdCard} from '@kit/DataDisplay';
import React from 'react';

const App = () => {
    return (
        <KitIdCard
            avatar={<KitAvatar shape="square" label="John Doe" />}
            title="John Doe"
            description="A talented software developer."
        />
    );
};

export default App;
