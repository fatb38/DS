import React, {FunctionComponent} from 'react';
import {KitProgress} from '@kit/Feedback';
import {KitTypography} from '@kit/General';

export const StepsProgressTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Steps progress</KitTypography.Title>
        <div style={{display: 'flex', gap: '8px', flexDirection: 'column', width: '500px'}}>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <KitProgress percent={25} steps={3} size="small" />
                <KitProgress percent={70} status="exception" steps={3} size="small" />
                <KitProgress percent={100} steps={3} size="small" />
            </div>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <KitProgress percent={25} steps={3} />
                <KitProgress percent={70} status="exception" steps={3} />
                <KitProgress percent={100} steps={3} />
            </div>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <KitProgress percent={25} steps={3} size={20} />
                <KitProgress percent={70} status="exception" steps={3} size={20} />
                <KitProgress percent={100} steps={3} size={20} />
            </div>
        </div>
    </>
);
