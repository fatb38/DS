import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitAlert} from '@kit/Feedback';

const details = 'details test';

const customContent = 'Additional custom content';

export const FullAlertTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Full alerts</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '400px'}}>
                <KitAlert
                    type="success"
                    closable
                    message="Success Text"
                    description="Success Description Success Description Success Description"
                    details={details}
                    customContent={customContent}
                />
                <KitAlert
                    type="info"
                    closable
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    details={details}
                    customContent={customContent}
                />
                <KitAlert
                    type="warning"
                    closable
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                    details={details}
                    customContent={customContent}
                />
                <KitAlert
                    type="error"
                    closable
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description"
                    details={details}
                    customContent={customContent}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '400px'}}>
                <KitAlert
                    type="success"
                    closable
                    message="Success Text"
                    description="Success Description Success Description Success Description"
                    details={details}
                    customContent={customContent}
                    showIcon
                />
                <KitAlert
                    type="info"
                    closable
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    details={details}
                    customContent={customContent}
                    showIcon
                />
                <KitAlert
                    type="warning"
                    closable
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                    details={details}
                    customContent={customContent}
                    showIcon
                />
                <KitAlert
                    type="error"
                    closable
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description"
                    details={details}
                    customContent={customContent}
                    showIcon
                />
            </div>
        </div>
    </div>
);
