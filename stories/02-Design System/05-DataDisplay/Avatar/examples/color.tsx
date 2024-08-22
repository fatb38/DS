import React from 'react';
import {KitAvatar} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text weight="bold">Default color</KitTypography.Text>
            <KitSpace>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">Primary Color</KitTypography.Text>
            <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} color="primary" />
            <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} color="primary" secondaryColorInvert />
            <br />
            <KitTypography.Text weight="bold">Secondary Colors</KitTypography.Text>
            <KitSpace>
                {secondaryColors.map((color: string) => (
                    <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} color={color} key={color + '_default'} />
                ))}
            </KitSpace>
            <KitSpace>
                {secondaryColors.map((color: string) => (
                    <KitAvatar
                        icon={<FontAwesomeIcon icon={faUser} />}
                        color={color}
                        key={color + '_inverted'}
                        secondaryColorInvert
                    />
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">Tertiary Colors</KitTypography.Text>
            <KitSpace>
                {tertiaryColors.map((color: string) => (
                    <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} color={color} key={color + '_default'} />
                ))}
            </KitSpace>
            <KitSpace>
                {tertiaryColors.map((color: string) => (
                    <KitAvatar
                        icon={<FontAwesomeIcon icon={faUser} />}
                        color={color}
                        key={color + '_inverted'}
                        secondaryColorInvert
                    />
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">RGB(A) format</KitTypography.Text>
            <KitSpace>
                <KitAvatar color="rgb(252, 186, 3)">Y</KitAvatar>
                <KitAvatar color="rgb(0, 29, 117)">D</KitAvatar>
                <KitAvatar color="rgba(133, 0, 101, 1)">P</KitAvatar>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">HEX format</KitTypography.Text>
            <KitSpace>
                <KitAvatar color="#fcba03">Y</KitAvatar>
                <KitAvatar color="#001d75">D</KitAvatar>
                <KitAvatar color="#850065">P</KitAvatar>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">HSL(A) format</KitTypography.Text>
            <KitSpace>
                <KitAvatar color="hsl(44, 97%, 50%)">Y</KitAvatar>
                <KitAvatar color="hsl(225, 100%, 23%)">D</KitAvatar>
                <KitAvatar color="hsla(314, 100%, 26%, 1)">P</KitAvatar>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
