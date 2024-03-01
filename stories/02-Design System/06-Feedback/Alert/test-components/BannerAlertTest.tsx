import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitAlert} from '@kit/Feedback';

export const BannerAlertTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Banner alerts</KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <KitAlert type="success" message="Success Text" banner />
            <KitAlert type="info" message="Info Text" banner />
            <KitAlert type="warning" message="Warning Text" banner />
            <KitAlert type="error" message="Error Text" banner />
        </div>
    </div>
);
