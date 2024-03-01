import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitInput} from '@kit/DataEntry';

export const BasicInputTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Basic input</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitInput placeholder="Default" autoFocus />
            <KitInput placeholder="Default" />
            <KitInput placeholder="Disabled" disabled />
        </div>
    </div>
);
