import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitAlert} from '@kit/Feedback';

export const BasicAlertTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Basic alerts</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '200px'}}>
                <KitAlert type="success" message="Success Text" />
                <KitAlert type="info" message="Info Text" />
                <KitAlert type="warning" message="Warning Text" />
                <KitAlert type="error" message="Error Text" />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '200px'}}>
                <KitAlert type="success" message="Success Text" showIcon />
                <KitAlert type="info" message="Info Text" showIcon />
                <KitAlert type="warning" message="Warning Text" showIcon />
                <KitAlert type="error" message="Error Text" showIcon />
            </div>
        </div>
    </div>
);
