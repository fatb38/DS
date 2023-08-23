import React from 'react';
import {KitButton, KitIcon} from '@kit/General/';
import {useKitNotification} from '@kit/Feedback/Notification/useKitNotification';
import {CloudOutlined} from '@ant-design/icons';

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
                    icon: <KitIcon icon={<CloudOutlined />} />
                })
            }
        >
            Open the notification box
        </KitButton>
    );
};

export default App;
