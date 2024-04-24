import React from 'react';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {KitAvatar, KitBadge} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const src = 'public/images/catalog.jpg';
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);

    return (
        <KitSpace direction="vertical" size={24}>
            <KitSpace size={24}>
                <KitBadge count={1}>
                    <KitAvatar disabled shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
                </KitBadge>
                <KitBadge dot>
                    <KitAvatar disabled shape="square" icon={<FontAwesomeIcon icon={faUser} />} />
                </KitBadge>
            </KitSpace>
            <KitSpace>
                {secondaryColors.map((color: string) => (
                    <KitAvatar
                        disabled
                        icon={<FontAwesomeIcon icon={faUser} />}
                        color={color}
                        key={color + '_inverted'}
                        secondaryColorInvert
                    />
                ))}
            </KitSpace>
            <KitSpace>
                {secondaryColors.map((color: string) => (
                    <KitAvatar disabled color={color} key={color + '_default'}>
                        V
                    </KitAvatar>
                ))}
            </KitSpace>
            <KitSpace>
                <KitAvatar disabled shape="square" size="large" imageFit="contain" src={src} />
                <KitAvatar disabled shape="square" size="large" imageFit="cover" src={src} />
                <KitAvatar disabled shape="square" size="large" imageFit="fill" src={src} />
            </KitSpace>
            <KitAvatar.Group disabled maxCount={2}>
                <KitAvatar disabled src={'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1'} />
                <KitAvatar disabled>K</KitAvatar>
                <KitAvatar disabled icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar disabled src={'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1'} />
            </KitAvatar.Group>
        </KitSpace>
    );
};

export default App;
