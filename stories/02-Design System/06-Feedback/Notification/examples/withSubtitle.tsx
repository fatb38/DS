import React from 'react';
import {KitNotification} from '@kit/Feedback';
import {KitSpace} from '@kit/Layout';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const App = () => {
    const description =
        'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.';
    const onClose = () => console.log('close');

    return (
        <KitSpace wrap>
            <KitNotification
                message="Info Notification"
                messageExtra="Il y a 5 jours・17:34"
                description={description}
                type="info"
            />
            <KitNotification
                message="Warning Notification"
                messageExtra="Il y a 5 jours・17:34"
                description={description}
                type="warning"
            />
            <KitNotification
                message="Error Notification"
                messageExtra="Il y a 5 jours・17:34"
                description={description}
                type="error"
            />
            <KitNotification
                message="Success Notification"
                messageExtra="Il y a 5 jours・17:34"
                description={description}
                type="success"
            />
            <KitNotification
                message="Simple Notification"
                messageExtra="Il y a 5 jours・17:34"
                description={description}
                onClose={onClose}
                icon={<FontAwesomeIcon icon={faDownload} />}
            />
        </KitSpace>
    );
};

export default App;
