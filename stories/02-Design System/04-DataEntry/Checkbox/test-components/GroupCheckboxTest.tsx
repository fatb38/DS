import React, {FC} from 'react';
import {KitCheckbox} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

export const GroupCheckboxTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Group checkbox</KitTypography.Title>
        <KitCheckbox.Group options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} />
    </div>
);
