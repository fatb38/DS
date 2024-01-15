import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitSelect} from '@kit/DataEntry';
import {colorDisabledOptions, colorOptions, iconOptions} from './commons.tsx';

export const IconAndColorSelectTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Icon and color select</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px', marginBottom: '180px'}}>
            <KitSelect
                defaultValue="file-2"
                style={{width: '320px'}}
                defaultActiveFirstOption={false}
                options={iconOptions}
                open
            />
            <KitSelect
                defaultValue="not-allowed"
                style={{width: '320px'}}
                defaultActiveFirstOption={false}
                options={colorOptions}
                open
            />
            <KitSelect
                placeholder="Select a status"
                style={{width: '320px'}}
                options={colorDisabledOptions}
                defaultActiveFirstOption={false}
                open
            />
        </div>
    </div>
);
