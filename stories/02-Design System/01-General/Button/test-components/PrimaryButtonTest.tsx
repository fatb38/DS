import React, {FC} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const PrimaryButtonTest: FC = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level={'h3'}>Primary button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="primary">Primary</KitButton>
            <KitButton type="primary" id="hover">
                Hover
            </KitButton>
            <KitButton type="primary" id="focus">
                Focus
            </KitButton>
            <KitButton type="primary" disabled>
                Disabled
            </KitButton>
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="primary" loading>
                Loading
            </KitButton>
        </div>
    </div>
);
