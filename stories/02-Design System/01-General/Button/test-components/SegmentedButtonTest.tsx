import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faPowerOff, faRotateRight} from '@fortawesome/free-solid-svg-icons';
import {KitSpace} from '@kit/Layout';

export const SegmentedButtonTest: FunctionComponent = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level="h3">Segmented button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '8px', marginBottom: '8px'}}>
            <KitButton type="segmented">Link</KitButton>
            <KitButton type="segmented" id="hover">
                Hover
            </KitButton>
            <KitButton type="segmented" id="focus">
                Focus
            </KitButton>
            <KitButton type="segmented" id="active">
                Active
            </KitButton>
            <KitButton type="segmented" disabled>
                Disabled
            </KitButton>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                Search
            </KitButton>
            <KitButton type="segmented" loading>
                Loading
            </KitButton>
        </div>
        <div style={{display: 'flex', gap: '8px'}}>
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} active />
            <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} active checked />
            <KitSpace.Compact>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} active />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
            </KitSpace.Compact>
            <KitSpace.Compact>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} active checked />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} />
            </KitSpace.Compact>
            <KitSpace.Compact>
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faPowerOff} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                <KitButton type="segmented" icon={<FontAwesomeIcon icon={faRotateRight} />} active checked />
            </KitSpace.Compact>
        </div>
    </div>
);
