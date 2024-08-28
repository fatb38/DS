import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const LinkButtonTest: FunctionComponent = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level="h3">Link button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Link
            </KitButton>
            <KitButton type="link" id="hover" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Hover
            </KitButton>
            <KitButton type="link" id="focus" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Focus
            </KitButton>
            <KitButton type="link" disabled icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Disabled
            </KitButton>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="link" loading icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Loading
            </KitButton>
        </div>
    </div>
);
