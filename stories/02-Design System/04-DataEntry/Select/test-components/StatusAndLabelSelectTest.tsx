import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitSelect} from '@kit/DataEntry';
import {colorOptions} from './commons.tsx';

export const StatusAndLabelSelectTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Status and label select</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px'}}>
            <KitSelect
                label="Label"
                helper="Helper"
                placeholder="Select a status"
                style={{width: '220px'}}
                options={colorOptions}
                defaultActiveFirstOption={false}
            />
            <KitSelect
                label="Label"
                helper="Helper"
                placeholder="Select a status"
                disabled
                style={{width: '220px'}}
                options={colorOptions}
                defaultActiveFirstOption={false}
            />
            <KitSelect
                label="Label"
                helper="Helper"
                placeholder="Select a status"
                style={{width: '220px'}}
                options={colorOptions}
                defaultActiveFirstOption={false}
                status="warning"
            />
            <KitSelect
                label="Label"
                helper="Helper"
                placeholder="Select a status"
                style={{width: '220px'}}
                options={colorOptions}
                defaultActiveFirstOption={false}
                status="error"
            />
        </div>
    </div>
);
