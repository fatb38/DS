import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitSelect} from '@kit/DataEntry';
import {KitDivider, KitSpace} from '@kit/Layout';

export const ReadonlyTest: FunctionComponent = () => (
    <div style={{width: '300px'}}>
        <KitTypography.Title level="h3">Read only</KitTypography.Title>
        <KitDivider orientation="left">Read only</KitDivider>
        <KitSpace align="start" size="xl">
            <KitSelect placeholder="Select a status" label="Label" readonly />
            <KitSelect placeholder="Select a file" defaultValue="file-2" label="Label" readonly />
        </KitSpace>
        <KitDivider orientation="left">Read only error</KitDivider>
        <KitSpace align="start" size="xl">
            <KitSelect placeholder="Select a status" label="Label" readonly status="error" />
            <KitSelect placeholder="Select a file" defaultValue="file-2" label="Label" readonly status="error" />
        </KitSpace>
    </div>
);
