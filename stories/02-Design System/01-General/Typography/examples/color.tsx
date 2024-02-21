import React from 'react';
import {KitTypography} from '@kit/index';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);

    return (
        <>
            <KitTypography.Paragraph size="large" weight="medium" color="primary">
                Aristid Design Paragraph-L medium
            </KitTypography.Paragraph>
            <KitTypography.Paragraph size="large" weight="medium" color="black">
                Aristid Design Paragraph-L medium
            </KitTypography.Paragraph>
            <KitTypography.Paragraph size="large" weight="medium" color="black60">
                Aristid Design Paragraph-L medium
            </KitTypography.Paragraph>
            <div style={{backgroundColor: theme.colors.neutral.grey.grey600}}>
                <KitTypography.Paragraph size="large" weight="medium" color="white">
                    Aristid Design Paragraph-L medium
                </KitTypography.Paragraph>
            </div>
            {secondaryColors.map((color: string) => (
                <KitTypography.Paragraph size="large" weight="medium" color={color}>
                    Aristid Design Paragraph-L medium
                </KitTypography.Paragraph>
            ))}
        </>
    );
};

export default App;
