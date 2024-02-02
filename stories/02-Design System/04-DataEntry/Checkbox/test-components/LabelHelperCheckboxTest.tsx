import React, {FC} from 'react';
import {KitCheckbox} from '@kit/DataEntry';
import {KitTypography} from '@kit/General';

const plainOptions = ['Apple', 'Pear', 'Orange'];

export const LabelHelperCheckboxTest: FC = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <KitTypography.Title level="h3">Checkbox group with label and helper</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitCheckbox.Group options={plainOptions} defaultValue={['Apple']} label="Label" helper="helper" />
            <KitCheckbox.Group
                options={plainOptions}
                defaultValue={['Pear']}
                status="error"
                label="Label"
                helper="helper"
            />
            <KitCheckbox.Group
                options={plainOptions}
                defaultValue={['Apple']}
                status="warning"
                label="Label"
                helper="helper"
            />
            <KitCheckbox.Group
                options={plainOptions}
                disabled
                defaultValue={['Apple']}
                status="warning"
                label="Label"
                helper="helper"
            />
        </div>
        <KitTypography.Title level="h3">Checkbox group bordered with label and helper</KitTypography.Title>
        <div style={{display: 'flex', gap: '10px'}}>
            <KitCheckbox.Group options={plainOptions} defaultValue={['Apple']} label="Label" helper="helper" />
            <KitCheckbox.Group
                options={plainOptions}
                defaultValue={['Pear']}
                bordered
                status="error"
                label="Label"
                helper="helper"
            />
            <KitCheckbox.Group
                options={plainOptions}
                defaultValue={['Apple']}
                bordered
                status="warning"
                label="Label"
                helper="helper"
            />
            <KitCheckbox.Group
                options={plainOptions}
                disabled
                defaultValue={['Apple']}
                bordered
                status="warning"
                label="Label"
                helper="helper"
            />
        </div>
    </div>
);
