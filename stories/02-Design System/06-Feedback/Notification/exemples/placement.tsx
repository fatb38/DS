import React from 'react';
import {KitButton, KitIcon, KitSpace} from '../../../../../src';
import {useKitNotification} from '@kit/Feedback/Notification/useKitNotification';

const App = () => {
    const {kitNotification} = useKitNotification();

    return (
        <KitSpace>
            <KitButton
                type="primary"
                onClick={() =>
                    kitNotification.info({
                        message: 'Notification Title',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.',
                        placement: 'topLeft'
                    })
                }
            >
                topLeft
            </KitButton>
            <KitButton
                type="primary"
                onClick={() =>
                    kitNotification.info({
                        message: 'Notification Title',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.',
                        placement: 'topRight'
                    })
                }
            >
                topRight
            </KitButton>
        </KitSpace>
    );
};

export default App;
