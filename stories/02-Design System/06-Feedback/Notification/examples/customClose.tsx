import React from 'react';
import {KitButton, KitIcon} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';
import {useKitNotification} from '@kit/Feedback/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';

const App = () => {
    const {kitNotification} = useKitNotification();

    const openNotification = () => {
        const key = `open${Date.now()}`;

        const btn = (
            <KitSpace>
                <KitButton type="tertiary" onClick={() => kitNotification.destroy()}>
                    Destroy All
                </KitButton>
                <KitButton type="primary" onClick={() => kitNotification.destroy(key)}>
                    Confirm
                </KitButton>
            </KitSpace>
        );

        kitNotification.open({
            message: 'Notification Title',
            description:
                'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.',
            closeIcon: <KitIcon icon={<FontAwesomeIcon icon={faCircleXmark} />} />,
            duration: 10,
            onClose: () =>
                console.log('Notification was closed. Either the close button was clicked or duration time elapsed.'),
            btn,
            key
        });
    };

    return (
        <KitButton type="primary" onClick={openNotification}>
            Open the notification box
        </KitButton>
    );
};

export default App;
