import React from 'react';
import {KitButton} from '../../../../../src';
import {useKitNotification} from '@kit/Feedback/Notification/useKitNotification';

const App = () => {
    const {kitNotification} = useKitNotification();

    const key = 'updatable';

    const openNotification = () => {
        kitNotification.info({
            key,
            message: 'Notification Title',
            description:
                'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.'
        });

        setTimeout(() => {
            kitNotification.info({
                key,
                message: 'Updated Title',
                description: 'New description.'
            });
        }, 1000);
    };

    return (
        <KitButton type="primary" onClick={openNotification}>
            Open the notification box
        </KitButton>
    );
};

export default App;
