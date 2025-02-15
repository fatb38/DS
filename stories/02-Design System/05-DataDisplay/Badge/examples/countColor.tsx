import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <KitSpace direction="vertical">
            <KitTypography.Text weight="bold">Default color</KitTypography.Text>
            <KitSpace size="m">
                <KitBadge count={5}>
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">Primary Color</KitTypography.Text>
            <KitSpace direction="vertical" size="m">
                <KitBadge count={5} color="primary">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="primary" secondaryColorInvert>
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">Secondary Colors</KitTypography.Text>
            <KitSpace direction="vertical" size="m">
                <KitSpace size="m">
                    {secondaryColors.map((color: string) => (
                        <KitBadge count={5} color={color} key={color + '_default'}>
                            <KitAvatar shape="square" size="large" />
                        </KitBadge>
                    ))}
                </KitSpace>
                <KitSpace size="m">
                    {secondaryColors.map((color: string) => (
                        <KitBadge count={5} color={color} key={color + '_inverted'} secondaryColorInvert>
                            <KitAvatar shape="square" size="large" />
                        </KitBadge>
                    ))}
                </KitSpace>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">Tertiary Colors</KitTypography.Text>
            <KitSpace direction="vertical" size="m">
                <KitSpace size="m">
                    {tertiaryColors.map((color: string) => (
                        <KitBadge count={5} color={color} key={color + '_default'}>
                            <KitAvatar shape="square" size="large" />
                        </KitBadge>
                    ))}
                </KitSpace>
                <KitSpace size="m">
                    {tertiaryColors.map((color: string) => (
                        <KitBadge count={5} color={color} key={color + '_inverted'} secondaryColorInvert>
                            <KitAvatar shape="square" size="large" />
                        </KitBadge>
                    ))}
                </KitSpace>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">RGB(A) format</KitTypography.Text>
            <KitSpace size="m">
                <KitBadge count={5} color="rgb(252, 186, 3)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="rgb(0, 29, 117)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="rgba(133, 0, 101, 1)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
            </KitSpace>
            <br />
            <KitTypography.Text weight="bold">HEX format</KitTypography.Text>
            <KitSpace size="m">
                <KitBadge count={5} color="#FunctionComponentba03">
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
            <KitTypography.Text weight="bold">HSL(A) format</KitTypography.Text>
            <KitSpace size="m">
                <KitBadge count={5} color="hsl(44, 97%, 50%)">
                    <KitAvatar shape="square" size="large" />
                </KitBadge>
                <KitBadge count={5} color="hsl(225, 100%, 23%)">
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
