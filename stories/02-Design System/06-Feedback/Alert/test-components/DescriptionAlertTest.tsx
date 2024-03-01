import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitAlert} from '@kit/Feedback';

export const DescriptionAlertTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Description alerts</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '400px'}}>
                <KitAlert
                    type="success"
                    message="Success Text"
                    description="Success Description Success Description Success Description"
                />
                <KitAlert
                    type="info"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                />
                <KitAlert
                    type="warning"
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                />
                <KitAlert
                    type="error"
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description"
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '400px'}}>
                <KitAlert
                    type="success"
                    message="Success Text"
                    description="Success Description Success Description Success Description"
                    showIcon
                />
                <KitAlert
                    type="info"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    showIcon
                />
                <KitAlert
                    type="warning"
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                    showIcon
                />
                <KitAlert
                    type="error"
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description"
                    showIcon
                />
            </div>
        </div>
    </div>
);
