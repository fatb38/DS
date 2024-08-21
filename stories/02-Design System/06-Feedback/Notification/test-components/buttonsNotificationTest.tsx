import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {KitNotification} from '@kit/Feedback';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const description =
    'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.';

export const ButtonsNotificationTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Notification With Buttons</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', marginBottom: '50px', flexWrap: 'wrap'}}>
            <KitNotification
                type="info"
                message="Info Notification"
                description={description}
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
            />
            <KitNotification
                type="warning"
                message="Warning Notification"
                description={description}
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
            />
            <KitNotification
                type="error"
                message="Error Notification"
                description={description}
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
            />
            <KitNotification
                type="success"
                message="Success Notification"
                description={description}
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
            />
            <KitNotification
                message="Simple Notification"
                description={description}
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
            />
            <KitNotification
                message="Simple Notification with icon"
                description={description}
                btn={
                    <>
                        <KitButton type="tertiary">Cancel</KitButton>
                        <KitButton>Ok</KitButton>
                    </>
                }
                icon={<FontAwesomeIcon icon={faDownload} />}
            />
        </div>
    </>
);
