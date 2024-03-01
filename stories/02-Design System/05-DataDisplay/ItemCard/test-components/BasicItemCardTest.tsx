import React, {FunctionComponent} from 'react';
import {KitIcon, KitTypography} from '@kit/General';
import {KitAvatar, KitImage, KitItemCard} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFaceSmile} from '@fortawesome/free-regular-svg-icons';

export const BasicItemCardTest: FunctionComponent = () => (
    <div>
        <KitTypography.Title level="h3">Basic item card</KitTypography.Title>
        <div style={{display: 'flex', gap: '20px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitItemCard
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitImage src="public/images/tondeuse.png" />}
                />
                <KitItemCard
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitImage src="public/images/tondeuse.png" />}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitItemCard
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
                />
                <KitItemCard
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitIcon icon={<FontAwesomeIcon icon={faFaceSmile} />} />}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitItemCard
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitAvatar>G</KitAvatar>}
                />
                <KitItemCard
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitAvatar>G</KitAvatar>}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <KitItemCard
                    fullWidthAvatar
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitAvatar>G</KitAvatar>}
                />
                <KitItemCard
                    fullWidthAvatar
                    vertical
                    title="Tondeuse à gazon"
                    description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                    extrainfo="550.00€"
                    picture={<KitAvatar>G</KitAvatar>}
                />
            </div>
        </div>
    </div>
);
