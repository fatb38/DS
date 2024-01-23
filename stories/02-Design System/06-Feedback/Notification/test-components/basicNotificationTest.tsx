import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitNotification} from '@kit/Feedback';

const description =
    'Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible.';

export const BasicNotificationTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Basic Notification</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', marginBottom: '50px', flexWrap: 'wrap'}}>
            <KitNotification type="info" message="Info Notification" description={description} />
            <KitNotification type="warning" message="Warning Notification" description={description} />
            <KitNotification type="error" message="Error Notification" description={description} />
            <KitNotification type="success" message="Success Notification" description={description} />
            <KitNotification message="Simple Notification" description={description} />
            <KitNotification message="Simple Notification with icon" description={description} />
        </div>
    </>
);
