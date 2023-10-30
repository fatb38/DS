import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/theme-context';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.general.colors.secondary);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text style={{fontWeight: 'bold'}}>Default color</KitTypography.Text>
            <KitSpace size="m">
                <KitBadge count={5}>
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>Secondary Colors</KitTypography.Text>
            <KitSpace size="m">
                {secondaryColors.map((color: string) => (
                    <KitBadge count={5} color={color}>
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>Inverted Secondary Colors</KitTypography.Text>
            <KitSpace size="m">
                {secondaryColors.map((color: string) => (
                    <KitBadge count={5} color={color} secondaryColorInvert>
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                ))}
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>RGB format</KitTypography.Text>
            <KitSpace size="m">
                <KitBadge count={5} color="rgba(252, 186, 3)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="rgba(0, 29, 117)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="rgba(133, 0, 101)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>HEX format</KitTypography.Text>
            <KitSpace size="m">
                <KitBadge count={5} color="#fcba03">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="#001d75">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="#850065">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </KitSpace>
            <br />
            <KitTypography.Text style={{fontWeight: 'bold'}}>HSL format</KitTypography.Text>
            <KitSpace size="m">
                <KitBadge count={5} color="hsla(44, 97%, 50%, 1)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="hsla(225, 100%, 23%, 1)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="hsla(314, 100%, 26%, 1)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
