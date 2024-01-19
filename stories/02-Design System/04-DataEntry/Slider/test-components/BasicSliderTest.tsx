import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitSlider} from '@kit/DataEntry';

export const BasicSliderTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">Basic slider</KitTypography.Title>
        <div style={{width: '400px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
            <KitSlider defaultValue={40} />
            <KitSlider defaultValue={40} disabled />
            <KitSlider range defaultValue={[30, 60]} />
            <KitSlider range defaultValue={[30, 60]} disabled />
        </div>
    </div>
)