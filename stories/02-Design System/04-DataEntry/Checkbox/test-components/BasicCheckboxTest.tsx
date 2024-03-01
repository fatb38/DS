import React, {FunctionComponent} from 'react';
import {KitCheckbox} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

export const BasicCheckboxTest: FunctionComponent = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <KitTypography.Title level="h3">Basic checkbox</KitTypography.Title>
        <KitCheckbox checked>Checked</KitCheckbox>
        <KitCheckbox>Unchecked</KitCheckbox>
        <KitCheckbox indeterminate>Indeterminate</KitCheckbox>
        <KitCheckbox checked disabled>
            Disabled
        </KitCheckbox>
        <KitCheckbox disabled>Disabled unchecked</KitCheckbox>
        <KitCheckbox indeterminate disabled>
            Disabled indeterminate
        </KitCheckbox>
        <KitCheckbox autoFocus checked>
            Focused checked
        </KitCheckbox>
    </div>
);
