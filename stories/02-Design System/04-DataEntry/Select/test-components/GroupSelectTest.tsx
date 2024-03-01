import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitSelect} from '@kit/DataEntry';
import {groupOptions} from './commons.tsx';

export const GroupSelectTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Group select</KitTypography.Title>
        <KitSelect
            placeholder="Select a file"
            style={{width: '320px'}}
            options={groupOptions}
            defaultActiveFirstOption={false}
            open
        />
    </div>
);
