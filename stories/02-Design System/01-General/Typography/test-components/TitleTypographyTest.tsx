import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';

export const TitleTypographyTest: FunctionComponent = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <>
            <KitTypography.Title level="h3">Titles</KitTypography.Title>
            <div style={{display: 'flex', gap: '8px', flexDirection: 'column'}}>
                <KitTypography.Title>h1. Aristid Design</KitTypography.Title>
                <KitTypography.Title level="h2">h2. Aristid Design</KitTypography.Title>
                <KitTypography.Title level="h3">h3. Aristid Design</KitTypography.Title>
                <KitTypography.Title level="h4">h4. Aristid Design</KitTypography.Title>
            </div>
            <KitTypography.Title level="h3">Colored Titles</KitTypography.Title>
            <div style={{display: 'flex', gap: '8px', flexDirection: 'column'}}>
                <KitTypography.Title level="h4" color="primary">
                    h4. Aristid Design
                </KitTypography.Title>
                {secondaryColors.map((color: string) => (
                    <KitTypography.Title level="h4" color={color}>
                        h4. Aristid Design
                    </KitTypography.Title>
                ))}
                {tertiaryColors.map((color: string) => (
                    <KitTypography.Title level="h4" color={color}>
                        h4. Aristid Design
                    </KitTypography.Title>
                ))}
            </div>
        </>
    );
};
