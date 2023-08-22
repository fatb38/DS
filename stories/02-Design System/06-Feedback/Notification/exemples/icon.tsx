import React from 'react';
import {KitButton, KitSpace} from '../../../../../src';
import {useKitNotification} from '@kit/Feedback/Notification/useKitNotification';

const App = () => {
    const {kitNotification} = useKitNotification();
    return (
        <KitSpace>
            <KitButton
                onClick={() =>
                    kitNotification.info({
                        message: 'Info Notification',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.'
                    })
                }
            >
                Info
            </KitButton>
            <KitButton
                onClick={() =>
                    kitNotification.success({
                        message: 'Success Notification',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.'
                    })
                }
            >
                Success
            </KitButton>
            <KitButton
                onClick={() =>
                    kitNotification.warning({
                        message: 'Warning Notification',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.'
                    })
                }
            >
                Warning
            </KitButton>
            <KitButton
                onClick={() =>
                    kitNotification.error({
                        message: 'Error Notification',
                        description:
                            'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.'
                    })
                }
            >
                Error
            </KitButton>
        </KitSpace>
    );
};

export default App;
