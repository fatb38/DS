import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const IconButtonTest: FunctionComponent = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level="h3">Icon button</KitTypography.Title>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="primary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Primary
            </KitButton>
            <KitButton icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>Default</KitButton>
            <KitButton type="tertiary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="tertiary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Tertiary
            </KitButton>
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Link
            </KitButton>
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Link
            </KitButton>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faFilter} />} />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faFilter} />}>
                Segmented
            </KitButton>
        </div>
    </div>
);
