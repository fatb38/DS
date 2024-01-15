import React, {FC} from 'react';
import {KitProgress} from '@kit/Feedback';
import {KitTypography} from '@kit/General';

export const LinearProgressTest: FC = () => (
    <>
        <KitTypography.Title level="h3">Linear progress</KitTypography.Title>
        <div style={{display: 'flex', gap: '8px', flexDirection: 'column', width: '500px'}}>
            <KitProgress percent={25} status="active" size="small" />
            <KitProgress percent={50} status="active" />
            <KitProgress percent={75} status="active" size={[500, 20]} />

            <div style={{marginBottom: '10px'}} />

            <KitProgress percent={25} status="exception" size="small" />
            <KitProgress percent={50} status="exception" />
            <KitProgress percent={75} status="exception" size={[500, 20]} />

            <div style={{marginBottom: '10px'}} />

            <KitProgress percent={100} size="small" />
            <KitProgress percent={100} />
            <KitProgress percent={100} size={[500, 20]} />
        </div>
    </>
);
