import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const TextButtonTest: FunctionComponent = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level={'h3'}>Text button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="text">Text</KitButton>
            <KitButton type="text" id="hover">
                Hover
            </KitButton>
            <KitButton type="text" id="focus">
                Focus
            </KitButton>
            <KitButton type="text" disabled>
                Disabled
            </KitButton>
            <KitButton type="text" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="text" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="text" loading>
                Loading
            </KitButton>
        </div>
    </div>
);
