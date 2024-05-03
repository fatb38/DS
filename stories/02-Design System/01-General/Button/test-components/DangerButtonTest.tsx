import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const DangerButtonTest: FunctionComponent = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level="h3">Danger button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="primary" danger>
                Danger
            </KitButton>
            <KitButton type="primary" id="hover" danger>
                Hover
            </KitButton>
            <KitButton type="primary" id="focus" danger>
                Focus
            </KitButton>
            <KitButton type="primary" disabled danger>
                Disabled
            </KitButton>
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger />
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger>
                Search
            </KitButton>
            <KitButton type="primary" loading danger>
                Loading
            </KitButton>
        </div>
    </div>
);
