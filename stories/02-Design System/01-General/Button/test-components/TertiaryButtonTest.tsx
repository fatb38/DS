import React, {FC} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const TertiaryButtonTest: FC = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level={'h3'}>Tertiary button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="tertiary">Default</KitButton>
            <KitButton type="tertiary" id="hover">
                Hover
            </KitButton>
            <KitButton type="tertiary" id="focus">
                Focus
            </KitButton>
            <KitButton type="tertiary" disabled>
                Disabled
            </KitButton>
            <KitButton type="tertiary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="tertiary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="tertiary" loading>
                Loading
            </KitButton>
        </div>
    </div>
);
