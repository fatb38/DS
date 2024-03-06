import React, {FunctionComponent} from 'react';
import {KitCheckbox} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

export const GroupCheckboxTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Group checkbox</KitTypography.Title>
        <KitCheckbox.Group options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} />
    </div>
);
