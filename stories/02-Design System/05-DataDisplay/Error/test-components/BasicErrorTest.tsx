import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitError} from '@kit/DataDisplay';

export const BasicErrorTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3">Error</KitTypography.Title>
        <KitError title="No ressource found" description="No ressource has been found. Please create a new one." />
    </>
);
