import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitSelect} from '@kit/DataEntry';
import {colorOptions, iconOptions} from './commons.tsx';

export const MultilinesSelectTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Multilines select</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', marginBottom: '10px'}}>
            <KitSelect
                mode="multiple"
                placeholder="Select a status"
                style={{width: '320px'}}
                defaultActiveFirstOption={false}
                options={colorOptions}
                onChange={console.log}
                defaultValue={['not-allowed', 'denied', 'todo']}
            />
            <KitSelect
                mode="multiple"
                placeholder="Select a status"
                style={{width: '320px'}}
                oneLineTags
                defaultActiveFirstOption={false}
                options={colorOptions}
                defaultValue={['not-allowed', 'denied', 'todo']}
            />
        </div>
        <div style={{display: 'flex', gap: '20px'}}>
            <KitSelect
                mode="tags"
                placeholder="Select a file"
                style={{width: '320px'}}
                defaultActiveFirstOption={false}
                options={iconOptions}
                defaultValue={['file-1', 'file-2', 'file-3-1', 'file-3-2']}
            />
            <KitSelect
                mode="tags"
                placeholder="Select a file"
                style={{width: '320px'}}
                labelOnly
                oneLineTags
                defaultActiveFirstOption={false}
                options={iconOptions}
                defaultValue={['file-1', 'file-2', 'file-3-1', 'file-3-2']}
            />
        </div>
    </div>
);
