import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitSelect} from '@kit/DataEntry';
import {colorOptions, iconOptions} from './commons.tsx';

export const BasicSelectTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Basic select</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', marginBottom: '10px'}}>
            <KitSelect placeholder="Select a status" style={{width: '320px'}} options={colorOptions} />
            <KitSelect placeholder="Select a status" style={{width: '320px'}} disabled options={colorOptions} />
        </div>
        <div style={{display: 'flex', gap: '20px', marginBottom: '200px'}}>
            <KitSelect
                placeholder="Select a status"
                style={{width: '320px'}}
                labelOnly
                defaultActiveFirstOption={false}
                options={colorOptions}
                open
            />
            <KitSelect
                placeholder="Select a file"
                defaultValue="file-2"
                style={{width: '320px'}}
                labelOnly
                defaultActiveFirstOption={false}
                options={iconOptions}
                open
            />
        </div>
    </div>
);
