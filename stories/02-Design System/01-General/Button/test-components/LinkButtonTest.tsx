import React, {FC} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const LinkButtonTest: FC = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level={'h3'}>Link button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '24px'}}>
            <KitButton type="link">Link</KitButton>
            <KitButton type="link" id="hover">
                Hover
            </KitButton>
            <KitButton type="link" id="focus">
                Focus
            </KitButton>
            <KitButton type="link" id="active">
                Active
            </KitButton>
            <KitButton type="link" disabled>
                Disabled
            </KitButton>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="link" loading>
                Loading
            </KitButton>
        </div>
    </div>
);
