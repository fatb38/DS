import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitSlider} from '@kit/DataEntry';
import {KitSliderMarks} from '@kit/DataEntry/Slider/types';

export const GraduatedSliderTest: FunctionComponent = () => {
    const marks: KitSliderMarks = {
        0: '0',
        25: '25',
        50: '50',
        100: {
            style: {
                color: '#FF412D'
            },
            label: 100
        }
    };

    return (
        <div>
            <KitTypography.Title level="h3">Graduated slider</KitTypography.Title>
            <div style={{width: '400px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                <KitSlider marks={marks} defaultValue={25} />
                <KitSlider range marks={marks} defaultValue={[15, 37]} />
                <KitSlider included={false} marks={marks} defaultValue={25} />
            </div>
        </div>
    );
};
