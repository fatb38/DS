import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitNotification} from '@kit/Feedback';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const description =
    'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.';

export const SubtitleNotificationTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Subtitle Notification</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', marginBottom: '50px', flexWrap: 'wrap'}}>
            <KitNotification
                type="info"
                message="Info Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
            />
            <KitNotification
                type="warning"
                message="Warning Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
            />
            <KitNotification
                type="error"
                message="Error Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
            />
            <KitNotification
                type="success"
                message="Success Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
            />
            <KitNotification
                message="Simple Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
            />
            <KitNotification
                message="Simple Notification with Icon"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
                icon={<FontAwesomeIcon icon={faDownload} />}
            />
        </div>
    </>
);
