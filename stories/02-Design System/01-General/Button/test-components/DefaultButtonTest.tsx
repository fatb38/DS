import React, {FC} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const DefaultButtonTest: FC = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level={'h3'}>Default button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="default">Default</KitButton>
            <KitButton type="default" id="hover">
                Hover
            </KitButton>
            <KitButton type="default" id="focus">
                Focus
            </KitButton>
            <KitButton type="default" disabled>
                Disabled
            </KitButton>
            <KitButton type="default" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="default" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="default" loading>
                Loading
            </KitButton>
        </div>
    </div>
);
