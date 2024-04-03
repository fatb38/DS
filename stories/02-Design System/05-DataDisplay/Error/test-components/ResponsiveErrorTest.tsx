import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitError} from '@kit/DataDisplay';

export const ResponsiveErrorTest: FunctionComponent = () => (
    <div style={{width: '300px'}}>
        <KitTypography.Title level="h3">Error responsive</KitTypography.Title>
        <KitError title="Page not found" description="Please go back home to continue to navigate." />
    </div>
);
