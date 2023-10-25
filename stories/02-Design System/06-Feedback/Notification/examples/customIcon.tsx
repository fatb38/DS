import React from 'react';
import {KitButton, KitIcon} from '@kit/General/';
import {useKitNotification} from '@kit/Feedback/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloud} from '@fortawesome/free-solid-svg-icons';

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
                    icon: <KitIcon icon={<FontAwesomeIcon icon={faCloud} />} />
                })
            }
        >
            Open the notification box
        </KitButton>
    );
};

export default App;
