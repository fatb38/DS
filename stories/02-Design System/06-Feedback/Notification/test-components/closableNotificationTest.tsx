import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitNotification} from '@kit/Feedback';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const description =
    'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.';
const onClose = () => {};

export const ClosableNotificationTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Closable Notification</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', marginBottom: '50px', flexWrap: 'wrap'}}>
            <KitNotification type="info" message="Info Notification" description={description} onClose={onClose} />
            <KitNotification
                type="warning"
                message="Warning Notification"
                description={description}
                onClose={onClose}
            />
            <KitNotification type="error" message="Error Notification" description={description} onClose={onClose} />
            <KitNotification
                type="success"
                message="Success Notification"
                description={description}
                onClose={onClose}
            />
            <KitNotification message="Simple Notification" description={description} onClose={onClose} />
            <KitNotification
                message="Simple Notification with icon"
                description={description}
                onClose={onClose}
                icon={<FontAwesomeIcon icon={faDownload} />}
            />
        </div>
    </>
);
