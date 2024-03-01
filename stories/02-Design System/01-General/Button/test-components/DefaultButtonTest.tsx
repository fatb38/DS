import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const DefaultButtonTest: FunctionComponent = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level={'h3'}>Secondary (Default) button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="secondary">Default</KitButton>
            <KitButton type="secondary" id="hover">
                Hover
            </KitButton>
            <KitButton type="secondary" id="focus">
                Focus
            </KitButton>
            <KitButton type="secondary" disabled>
                Disabled
            </KitButton>
            <KitButton type="secondary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="secondary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="secondary" loading>
                Loading
            </KitButton>
        </div>
    </div>
);
