import {KitAvatar, KitIdCard} from '@kit/DataDisplay';
import React from 'react';
import {KitSpace} from '@kit/Layout';

const App = () => {
    return (
        <KitSpace direction="horizontal" size={'l'}>
            <KitIdCard
                avatar={<KitAvatar shape="square" size="large" label="John Doe" />}
                title="John Doe"
                description="A talented software developer."
                size="medium"
            />
            <KitIdCard
                avatar={<KitAvatar shape="square" size="large" label="John Doe" />}
                title="John Doe"
                description="A talented software developer."
                size="large"
            />
        </KitSpace>
    );
};

export default App;
