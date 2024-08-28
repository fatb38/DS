import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {KitNotification} from '@kit/Feedback';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const description =
    'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.';
const onClose = () => {};

export const FullNotificationTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Full Notification</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', marginBottom: '50px', flexWrap: 'wrap'}}>
            <KitNotification
                type="info"
                message="Info Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
                onClose={onClose}
            />
            <KitNotification
                type="warning"
                message="Warning Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
                onClose={onClose}
            />
            <KitNotification
                type="error"
                message="Error Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
                onClose={onClose}
            />
            <KitNotification
                type="success"
                message="Success Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
                onClose={onClose}
            />
            <KitNotification
                message="Full Notification"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
                onClose={onClose}
            />
            <KitNotification
                message="Full Notification with icon"
                description={description}
                messageExtra="Il y a 5 jours・17:34"
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
                onClose={onClose}
                icon={<FontAwesomeIcon icon={faDownload} />}
            />
        </div>
    </>
);
