import React from 'react';
import {KitButton} from '../../../../../src';
import {useKitNotification} from '@kit/Feedback/Notification/useKitNotification';

const App = () => {
    const {kitNotification} = useKitNotification();

    return (
        <KitButton
            type="primary"
            onClick={() =>
                kitNotification.open({
                    message: 'Notification Title',
                    description:
                        'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.',
                    duration: 2
                })
            }
        >
            Open the notification box
        </KitButton>
    );
};

export default App;
