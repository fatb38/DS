import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWineBottle} from '@fortawesome/free-solid-svg-icons';

export const RedirectButtonTest: FunctionComponent = () => (
    <div style={{marginBottom: '40px'}}>
        <KitTypography.Title level="h3">Redirect button</KitTypography.Title>
        <div style={{display: 'inline-flex', gap: '8px'}}>
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Redirect
            </KitButton>
            <KitButton type="redirect" id="hover" icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Hover
            </KitButton>
            <KitButton type="redirect" id="focus" icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Focus
            </KitButton>
            <KitButton type="redirect" disabled icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Disabled
            </KitButton>
            <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />} />
            <KitButton type="redirect" loading icon={<FontAwesomeIcon icon={faWineBottle} />}>
                Loading
            </KitButton>
        </div>
    </div>
);
