import React, {FunctionComponent} from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {colorsPalette} from '@theme/aristid/general/colors';
import {KitTypography} from '@kit/General';

const src = 'public/images/catalog.jpg';

export const DisabledAvatarTest: FunctionComponent = () => {
    const secondaryColors = Object.keys(colorsPalette.secondary);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
            <KitTypography.Title level="h3">Disabled avatar / group</KitTypography.Title>
            <div style={{display: 'flex', gap: '16px'}}>
                <KitBadge count={1}>
                    <KitAvatar disabled shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
                </KitBadge>
                <KitBadge dot>
                    <KitAvatar disabled shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
                </KitBadge>
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                {secondaryColors.map((color: string) => (
                    <KitAvatar
                        disabled
                        icon={<FontAwesomeIcon icon={faUser} />}
                        color={color}
                        key={color + '_inverted'}
                        secondaryColorInvert
                    />
                ))}
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                {secondaryColors.map((color: string) => (
                    <KitAvatar disabled color={color} key={color + '_default'}>
                        V
                    </KitAvatar>
                ))}
            </div>
            <div style={{display: 'flex', gap: '16px'}}>
                <KitAvatar disabled shape="square" size="large" imageFit="contain" src={src} />
                <KitAvatar disabled shape="square" size="large" imageFit="cover" src={src} />
                <KitAvatar disabled shape="square" size="large" imageFit="fill" src={src} />
            </div>
            <KitAvatar.Group disabled maxCount={2}>
                <KitAvatar disabled src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                <KitAvatar disabled>K</KitAvatar>
                <KitAvatar disabled icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar disabled src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            </KitAvatar.Group>
        </div>
    );
};
