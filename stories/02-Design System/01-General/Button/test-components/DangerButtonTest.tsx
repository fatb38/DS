import React, {FunctionComponent} from 'react';
import {KitButton, KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faWineBottle} from '@fortawesome/free-solid-svg-icons';

export const DangerButtonTest: FunctionComponent = () => (
    <div style={{marginBottom: '40px'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <KitTypography.Title level="h3"> Primary Danger button</KitTypography.Title>
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
            <KitTypography.Title level="h3"> Secondary Danger button</KitTypography.Title>
            <div style={{display: 'inline-flex', gap: '8px'}}>
                <KitButton type="secondary" danger>
                    Danger
                </KitButton>
                <KitButton type="secondary" id="hover" danger>
                    Hover
                </KitButton>
                <KitButton type="secondary" id="focus" danger>
                    Focus
                </KitButton>
                <KitButton type="secondary" disabled danger>
                    Disabled
                </KitButton>
                <KitButton type="secondary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger />
                <KitButton type="secondary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger>
                    Search
                </KitButton>
                <KitButton type="secondary" loading danger>
                    Loading
                </KitButton>
            </div>
            <KitTypography.Title level="h3"> Tertiary Danger button</KitTypography.Title>
            <div style={{display: 'inline-flex', gap: '8px'}}>
                <KitButton type="tertiary" danger>
                    Danger
                </KitButton>
                <KitButton type="tertiary" id="hover" danger>
                    Hover
                </KitButton>
                <KitButton type="tertiary" id="focus" danger>
                    Focus
                </KitButton>
                <KitButton type="tertiary" disabled danger>
                    Disabled
                </KitButton>
                <KitButton type="tertiary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger />
                <KitButton type="tertiary" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger>
                    Search
                </KitButton>
                <KitButton type="tertiary" loading danger>
                    Loading
                </KitButton>
            </div>
            <KitTypography.Title level="h3"> Link Danger button</KitTypography.Title>
            <div style={{display: 'inline-flex', gap: '8px'}}>
                <KitButton type="link" danger icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                    Danger
                </KitButton>
                <KitButton type="link" id="hover" danger icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                    Hover
                </KitButton>
                <KitButton type="link" id="focus" danger icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                    Focus
                </KitButton>
                <KitButton type="link" disabled danger icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                    Disabled
                </KitButton>
                <KitButton type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} danger />
                <KitButton type="link" loading danger icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                    Loading
                </KitButton>
            </div>
            <KitTypography.Title level="h3"> Redirect Danger button</KitTypography.Title>
            <div style={{display: 'inline-flex', gap: '8px'}}>
                <KitButton type="redirect" danger icon={<FontAwesomeIcon icon={faWineBottle} />}>
                    Danger
                </KitButton>
                <KitButton type="redirect" id="hover" danger icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>
                    Hover
                </KitButton>
                <KitButton type="redirect" id="focus" danger icon={<FontAwesomeIcon icon={faWineBottle} />}>
                    Focus
                </KitButton>
                <KitButton type="redirect" disabled danger icon={<FontAwesomeIcon icon={faWineBottle} />}>
                    Disabled
                </KitButton>
                <KitButton type="redirect" icon={<FontAwesomeIcon icon={faWineBottle} />} danger />
                <KitButton type="redirect" loading danger icon={<FontAwesomeIcon icon={faWineBottle} />}>
                    Loading
                </KitButton>
            </div>
        </div>
    </div>
);
