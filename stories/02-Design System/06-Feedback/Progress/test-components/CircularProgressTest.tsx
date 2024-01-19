import React, {FC} from 'react';
import {KitProgress} from '@kit/Feedback';
import {KitTypography} from '@kit/General';

export const CircularProgressTest: FC = () => (
    <>
        <KitTypography.Title level="h3">Circular progress</KitTypography.Title>
        <div style={{display: 'flex', gap: '8px', flexDirection: 'column', width: '500px'}}>
            <KitTypography.Title level="h4">circle style</KitTypography.Title>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <KitProgress type="circle" percent={75} />
                <KitProgress type="circle" percent={70} status="exception" />
                <KitProgress type="circle" percent={100} />
                <KitProgress type="circle" percent={75} size={80} />
                <KitProgress type="circle" percent={70} status="exception" size={80} />
                <KitProgress type="circle" percent={100} size={80} />
                <KitProgress type="circle" percent={75} size={20} />
                <KitProgress type="circle" percent={70} status="exception" size={20} />
                <KitProgress type="circle" percent={100} size={20} />
            </div>
            <KitTypography.Title level="h4">dashboard style</KitTypography.Title>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <KitProgress type="dashboard" percent={75} />
                <KitProgress type="dashboard" percent={70} status="exception" />
                <KitProgress type="dashboard" percent={100} />
                <KitProgress type="dashboard" percent={75} size={80} />
                <KitProgress type="dashboard" percent={70} status="exception" size={80} />
                <KitProgress type="dashboard" percent={100} size={80} />
                <KitProgress type="dashboard" percent={75} size={20} />
                <KitProgress type="dashboard" percent={70} status="exception" size={20} />
                <KitProgress type="dashboard" percent={100} size={20} />
            </div>
        </div>
    </>
);
