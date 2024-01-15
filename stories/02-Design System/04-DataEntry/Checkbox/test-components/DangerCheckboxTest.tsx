import React, {FC} from 'react';
import {KitCheckbox} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

export const DangerCheckboxTest: FC = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <KitTypography.Title level="h3">Danger checkbox</KitTypography.Title>
        <KitCheckbox defaultChecked danger>
            Checked
        </KitCheckbox>
        <KitCheckbox defaultChecked={false} danger>
            Unchecked
        </KitCheckbox>
        <KitCheckbox indeterminate danger>
            Indeterminate
        </KitCheckbox>
        <KitCheckbox defaultChecked disabled danger>
            Disabled
        </KitCheckbox>
        <KitCheckbox disabled danger>
            Disabled unchecked
        </KitCheckbox>
        <KitCheckbox autoFocus checked danger>
            Focused checked
        </KitCheckbox>
    </div>
);
