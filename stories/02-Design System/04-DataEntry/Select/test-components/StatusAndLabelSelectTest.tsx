import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitSelect} from '@kit/DataEntry';
import {colorOptions, idCardOptions} from './commons.tsx';

export const StatusAndLabelSelectTest: FunctionComponent = () => (
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
        <div style={{display: 'flex', gap: '20px', marginTop: '10px'}}>
            <KitSelect
                placeholder="Select an element"
                style={{width: '320px'}}
                options={idCardOptions}
                defaultValue={idCardOptions[0].value}
                disabled
            />
            <KitSelect
                placeholder="Select an element"
                style={{width: '320px'}}
                options={idCardOptions}
                defaultValue={idCardOptions[0].value}
                status="error"
            />
            <KitSelect
                placeholder="Select an element"
                style={{width: '320px'}}
                options={idCardOptions}
                defaultValue={idCardOptions[0].value}
                status="warning"
            />
        </div>
        <div style={{display: 'flex', gap: '20px', marginTop: '10px'}}>
            <KitSelect
                placeholder="Select an element"
                style={{width: '320px'}}
                options={idCardOptions}
                mode="multiple"
                oneLineTags
                defaultValue={[idCardOptions[0].value, idCardOptions[1].value]}
                disabled
            />
            <KitSelect
                placeholder="Select an element"
                style={{width: '320px'}}
                options={idCardOptions}
                mode="multiple"
                oneLineTags
                defaultValue={[idCardOptions[0].value, idCardOptions[1].value]}
                status="error"
            />
            <KitSelect
                placeholder="Select an element"
                style={{width: '320px'}}
                options={idCardOptions}
                mode="multiple"
                oneLineTags
                defaultValue={[idCardOptions[0].value, idCardOptions[1].value]}
                status="warning"
            />
        </div>
    </div>
);
