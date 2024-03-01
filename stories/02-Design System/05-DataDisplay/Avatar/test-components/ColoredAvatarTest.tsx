import React, {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {KitAvatar} from '@kit/DataDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {colorsPalette} from '@theme/aristid/general/colors';

export const ColoredAvatarTest: FunctionComponent = () => {
    const secondaryColors = Object.keys(colorsPalette.secondary);

    return (
        <div>
            <KitTypography.Title level="h3">Colored avatar</KitTypography.Title>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <KitTypography.Title level="h4">secondary colors</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    {secondaryColors.map((color: string) => (
                        <KitAvatar key={color} icon={<FontAwesomeIcon icon={faUser} />} color={color} />
                    ))}
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    {secondaryColors.map((color: string) => (
                        <KitAvatar
                            key={color}
                            icon={<FontAwesomeIcon icon={faUser} />}
                            color={color}
                            secondaryColorInvert
                        />
                    ))}
                </div>

                <div style={{display: 'flex', gap: '50px'}}>
                    <div>
                        <KitTypography.Title level="h4">RGB format</KitTypography.Title>
                        <div style={{display: 'flex', gap: '10px'}}>
                            <KitAvatar color="rgba(252, 186, 3)">Y</KitAvatar>
                            <KitAvatar color="rgba(0, 29, 117)">D</KitAvatar>
                            <KitAvatar color="rgba(133, 0, 101)">P</KitAvatar>
                        </div>
                    </div>
                    <div>
                        <KitTypography.Title level="h4">HEX format</KitTypography.Title>
                        <div style={{display: 'flex', gap: '10px'}}>
                            <KitAvatar color="#FunctionComponentba03">Y</KitAvatar>
                            <KitAvatar color="#001d75">D</KitAvatar>
                            <KitAvatar color="#850065">P</KitAvatar>
                        </div>
                    </div>
                </div>

                <KitTypography.Title level="h4">HSL format</KitTypography.Title>
                <div style={{display: 'flex', gap: '10px'}}>
                    <KitAvatar color="hsla(44, 97%, 50%, 1)">Y</KitAvatar>
                    <KitAvatar color="hsla(225, 100%, 23%, 1)">D</KitAvatar>
                    <KitAvatar color="hsla(314, 100%, 26%, 1)">P</KitAvatar>
                </div>
            </div>
        </div>
    );
};
