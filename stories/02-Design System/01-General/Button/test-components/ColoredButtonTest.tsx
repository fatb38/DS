import React, {FC} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRotateRight} from '@fortawesome/free-solid-svg-icons';

export const ColoredButtonTest: FC = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level={'h3'}>Colored button</KitTypography.Title>
        <div style={{display: 'flex', gap: '8px'}}>
            <KitButton type="text" icon={<FontAwesomeIcon icon={faRotateRight} />}>
                Refresh
            </KitButton>
            <KitButton type="text" textColor="grey" icon={<FontAwesomeIcon icon={faRotateRight} />}>
                Refresh
            </KitButton>
            <KitButton type="text" textColor="black" icon={<FontAwesomeIcon icon={faRotateRight} />}>
                Refresh
            </KitButton>
        </div>
    </div>
);
