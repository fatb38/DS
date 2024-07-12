import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitAvatar, KitBadge} from '@kit/DataDisplay';
import {colorsPalette} from '@theme/aristid/general/colors';

export const ColoredBadgeTest: FunctionComponent = () => {
    const secondaryColors = Object.keys(colorsPalette.secondary);
    const tertiaryColors = Object.keys(colorsPalette.tertiary);

    return (
        <div>
            <KitTypography.Title level="h3">Colored badge</KitTypography.Title>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitTypography.Text size="large">Primary color</KitTypography.Text>
                <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                    <KitBadge count={5} color="primary">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                </div>
                <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                    <KitBadge count={5} color="primary" secondaryColorInvert>
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                </div>

                <KitTypography.Text size="large">Secondary colors</KitTypography.Text>
                <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                    {secondaryColors.map((color: string) => (
                        <KitBadge key={color} count={5} color={color}>
                            <KitAvatar shape="square" size="large" />
                        </KitBadge>
                    ))}
                </div>
                <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                    {secondaryColors.map((color: string) => (
                        <KitBadge key={color} count={5} color={color} secondaryColorInvert>
                            <KitAvatar shape="square" size="large" />
                        </KitBadge>
                    ))}
                </div>

                <KitTypography.Text size="large">Tertiary colors</KitTypography.Text>
                <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                    {tertiaryColors.map((color: string) => (
                        <KitBadge key={color} count={5} color={color}>
                            <KitAvatar shape="square" size="large" />
                        </KitBadge>
                    ))}
                </div>
                <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                    {tertiaryColors.map((color: string) => (
                        <KitBadge key={color} count={5} color={color} secondaryColorInvert>
                            <KitAvatar shape="square" size="large" />
                        </KitBadge>
                    ))}
                </div>

                <KitTypography.Text size="large">RGB format</KitTypography.Text>
                <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                    <KitBadge count={5} color="rgb(252, 186, 3)">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                    <KitBadge count={5} color="rgb(0, 29, 117)">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                    <KitBadge count={5} color="rgb(133, 0, 101)">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                </div>

                <KitTypography.Text size="large">HEX format</KitTypography.Text>
                <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                    <KitBadge count={5} color="#fcba03">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                    <KitBadge count={5} color="#001d75">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                    <KitBadge count={5} color="#850065">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                </div>

                <KitTypography.Text size="large">HSL format</KitTypography.Text>
                <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                    <KitBadge count={5} color="hsla(44, 97%, 50%, 1)">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                    <KitBadge count={5} color="hsla(225, 100%, 23%, 1)">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                    <KitBadge count={5} color="hsla(314, 100%, 26%, 1)">
                        <KitAvatar shape="square" size="large" />
                    </KitBadge>
                </div>

                <KitTypography.Text size="large">Status</KitTypography.Text>
                <div style={{display: 'flex', gap: '20px'}}>
                    <KitBadge dot status="success">
                        Success
                    </KitBadge>
                    <KitBadge dot status="error">
                        Error
                    </KitBadge>
                    <KitBadge dot status="default">
                        Default
                    </KitBadge>
                    <KitBadge dot status="processing">
                        Processing
                    </KitBadge>
                    <KitBadge dot status="warning">
                        Warning
                    </KitBadge>
                </div>
            </div>
        </div>
    );
};
