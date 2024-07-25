import {KitSection, KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import React, {CSSProperties} from 'react';
import {FunctionComponent} from 'react';

const sectionStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70px'
};

export const SectionTest: FunctionComponent = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <KitSpace direction="vertical" size="xl" style={{width: '100%'}}>
            <KitSection style={sectionStyle}>primary</KitSection>

            <KitSpace direction="vertical" size="xl" style={{width: '100%'}}>
                {secondaryColors.map(color => (
                    <KitSection key={color} style={sectionStyle} borderColor={color}>
                        {color}
                    </KitSection>
                ))}
                {tertiaryColors.map(color => (
                    <KitSection key={color} style={sectionStyle} borderColor={color}>
                        {color}
                    </KitSection>
                ))}
            </KitSpace>

            <KitSpace direction="vertical" size="xl" style={{width: '100%'}}>
                <KitSection style={sectionStyle} borderColor="rgb(1, 65, 236)">
                    rgb(1, 65, 236)
                </KitSection>
                <KitSection style={sectionStyle} borderColor="#0141ec">
                    #0141ec
                </KitSection>
                <KitSection style={sectionStyle} borderColor="hsl(224, 99%, 46%)">
                    hsl(224, 99%, 46%)
                </KitSection>
            </KitSpace>
        </KitSpace>
    );
};
