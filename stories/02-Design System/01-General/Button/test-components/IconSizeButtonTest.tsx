import React, {FC} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const IconSizeButtonTest: FC = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level={'h3'}>Icon size button</KitTypography.Title>
        <div style={{display: 'flex', gap: '8px'}}>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="xs" />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="s" />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="m" />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="l" />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} iconSize="xl" />
        </div>
    </div>
);
