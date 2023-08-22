import React from 'react';
import {KitButton, KitIcon} from '../../../../../src';
import {useKitNotification} from '@kit/Feedback/Notification/useKitNotification';
import {CloseCircleOutlined} from '@ant-design/icons';

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
                    closeIcon: <KitIcon icon={<CloseCircleOutlined />} />,
                    duration: 10
                })
            }
        >
            Open the notification box
        </KitButton>
    );
};

export default App;
