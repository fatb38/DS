import React, {FunctionComponent} from 'react';
import {KitButton, KitIcon, KitTypography} from '@kit/General';
import {KitAvatar, KitImage, KitItemCard} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFaceSmile, faFolderOpen} from '@fortawesome/free-regular-svg-icons';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

export const DisabledItemCardTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Disabled item card</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitItemCard
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitImage src="public/images/tondeuse.png" />}
                    colors={[
                        {label: 'test', color: '#00D9A9'},
                        {label: 'toto', color: '#009876'}
                    ]}
                    onSelectChange={e => {
                        console.log(e);
                    }}
                    onEdit={() => {
                        console.log('onEdit');
                    }}
                    actions={[
                        <KitButton onClick={() => console.log('download action')}>
                            <FontAwesomeIcon icon={faDownload} />
                        </KitButton>,
                        <KitButton onClick={() => console.log('open action')}>
                            <FontAwesomeIcon icon={faFolderOpen} />
                        </KitButton>
                    ]}
                    tags={['3 opérations']}
                    disabled
                />
                <KitItemCard
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitImage src="public/images/tondeuse.png" />}
                    colors={[
                        {label: 'test', color: '#00D9A9'},
                        {label: 'toto', color: '#009876'}
                    ]}
                    onSelectChange={e => {
                        console.log(e);
                    }}
                    onEdit={() => {
                        console.log('onEdit');
                    }}
                    actions={[
                        <KitButton onClick={() => console.log('download action')}>
                            <FontAwesomeIcon icon={faDownload} />
                        </KitButton>,
                        <KitButton onClick={() => console.log('open action')}>
                            <FontAwesomeIcon icon={faFolderOpen} />
                        </KitButton>
                    ]}
                    tags={['3 opérations']}
                    disabled
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitItemCard
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    disabled
                    picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
                />
                <KitItemCard
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    disabled
                    picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitItemCard
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    disabled
                    picture={<KitAvatar>G</KitAvatar>}
                />
                <KitItemCard
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    disabled
                    picture={<KitAvatar>G</KitAvatar>}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitItemCard
                    fullWidthAvatar
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    disabled
                    picture={<KitAvatar>G</KitAvatar>}
                />
                <KitItemCard
                    fullWidthAvatar
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    disabled
                    picture={<KitAvatar>G</KitAvatar>}
                />
            </div>
        </div>
    </div>
);
