import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {KitSlider} from '@kit/DataEntry';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassMinus, faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons';

export const IconsSliderTest: FC = () => (
    <div>
        <KitTypography.Title level="h3">With icons slider</KitTypography.Title>
        <div style={{width: '400px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <KitSlider defaultValue={40} endIcon={<FontAwesomeIcon icon={faMagnifyingGlassPlus} />} />
            <KitSlider defaultValue={40} startIcon={<FontAwesomeIcon icon={faMagnifyingGlassMinus} />} />
            <KitSlider
                defaultValue={40}
                startIcon={<FontAwesomeIcon icon={faMagnifyingGlassMinus} />}
                endIcon={<FontAwesomeIcon icon={faMagnifyingGlassPlus} />}
            />
        </div>
    </div>
)
