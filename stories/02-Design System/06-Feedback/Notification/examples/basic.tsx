import React from 'react';
import {KitButton} from '@kit/General/';
import {useKitNotification, KitNotification} from '@kit/Feedback';
import {KitSpace} from '@kit/Layout';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitAristidThemeGeneral} from '@theme/aristid/general';

const App = () => {
    const {kitNotification} = useKitNotification();
    const description =
        'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.';

    const onClose = () => console.log('close');

    return (
        <KitSpace direction="vertical" size={KitAristidThemeGeneral.spacing.s}>
            <KitButton
                type="primary"
                onClick={() =>
                    kitNotification.info({
                        message: 'Info Notification',
                        description: description,
                        duration: 4.5
                    })
                }
            >
                Open the notification box
            </KitButton>
            <KitSpace wrap>
                <KitNotification message="Info Notification" description={description} type="info" onClose={onClose} />
                <KitNotification
                    message="Warning Notification"
                    description={description}
                    type="warning"
                    onClose={onClose}
                />
                <KitNotification
                    message="Error Notification"
                    description={description}
                    type="error"
                    onClose={onClose}
                />
                <KitNotification
                    message="Success Notification"
                    description={description}
                    type="success"
                    onClose={onClose}
                />
                <KitNotification message="Simple Notification" description={description} />
                <KitNotification
                    message="Full Notification"
                    description={description}
                    messageExtra="Il y a 5 jours・17:34"
                    btn={
                        <>
                            <KitButton type="text">Cancel</KitButton>
                            <KitButton>Ok</KitButton>
                        </>
                    }
                    onClose={onClose}
                    icon={<FontAwesomeIcon icon={faDownload} />}
                />
            </KitSpace>
        </KitSpace>
    );
};

export default App;
