import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitAlert} from '@kit/Feedback';

const details = 'details test';

const customContent = 'Additional custom content';

export const ToastedAlertTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Toasted alerts</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '450px'}}>
                <KitAlert
                    className="toast-alert"
                    type="success"
                    message="Success Text"
                    description="Success Description Success Description Success Description"
                    details={details}
                    customContent={customContent}
                />
                <KitAlert
                    className="toast-alert"
                    type="info"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    details={details}
                    customContent={customContent}
                />
                <KitAlert
                    className="toast-alert"
                    type="warning"
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                    details={details}
                    customContent={customContent}
                />
                <KitAlert
                    className="toast-alert"
                    type="error"
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description"
                    details={details}
                    customContent={customContent}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '450px'}}>
                <KitAlert
                    className="toast-alert"
                    type="success"
                    message="Success Text"
                    description="Success Description Success Description Success Description"
                    details={details}
                    customContent={customContent}
                    showIcon
                />
                <KitAlert
                    className="toast-alert"
                    type="info"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    details={details}
                    customContent={customContent}
                    showIcon
                />
                <KitAlert
                    className="toast-alert"
                    type="warning"
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                    details={details}
                    customContent={customContent}
                    showIcon
                />
                <KitAlert
                    className="toast-alert"
                    type="error"
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
