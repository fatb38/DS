import {KitTypography} from '@kit/General';
import {KitSection, KitSpace} from '@kit/Layout';
import {useKitTheme} from '@theme/useKitTheme';
import React, {CSSProperties} from 'react';

const sectionStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70px'
};

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <KitSpace direction="vertical" size="xl" style={{width: '100%'}}>
            <KitSection style={sectionStyle}>
                <KitTypography.Text>primary</KitTypography.Text>
            </KitSection>

            <KitSpace direction="vertical" size="xl" style={{width: '100%'}}>
                {secondaryColors.map(color => (
                    <KitSection key={color} style={sectionStyle} borderColor={color}>
                        <KitTypography.Text>{color}</KitTypography.Text>
                    </KitSection>
                ))}
                {tertiaryColors.map(color => (
                    <KitSection key={color} style={sectionStyle} borderColor={color}>
                        <KitTypography.Text>{color}</KitTypography.Text>
                    </KitSection>
                ))}
            </KitSpace>

            <KitSpace direction="vertical" size="xl" style={{width: '100%'}}>
                <KitSection style={sectionStyle} borderColor="rgb(1, 65, 236)">
                    <KitTypography.Text>rgb(1, 65, 236)</KitTypography.Text>
                </KitSection>
                <KitSection
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '70px'
                    }}
                    borderColor="#0141ec"
                >
                    <KitTypography.Text>#0141ec</KitTypography.Text>
                </KitSection>
                <KitSection style={sectionStyle} borderColor="hsl(224, 99%, 46%)">
                    <KitTypography.Text>hsl(224, 99%, 46%)</KitTypography.Text>
                </KitSection>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
