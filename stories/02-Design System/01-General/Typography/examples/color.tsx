import {KitTypography} from '@kit/index';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <>
            <KitTypography.Paragraph size="large" weight="medium" color="black">
                Aristid Design Paragraph-L medium
            </KitTypography.Paragraph>
            <KitTypography.Paragraph size="large" weight="medium" color="white" style={{backgroundColor: 'darkblue'}}>
                Aristid Design Paragraph-L medium
            </KitTypography.Paragraph>
            <KitTypography.Paragraph size="large" weight="medium" color="primary">
                Aristid Design Paragraph-L medium
            </KitTypography.Paragraph>
            {secondaryColors.map((color: string) => (
                <KitTypography.Paragraph size="large" weight="medium" color={color} key={color}>
                    Aristid Design Paragraph-L medium
                </KitTypography.Paragraph>
            ))}
            {tertiaryColors.map((color: string) => (
                <KitTypography.Paragraph size="large" weight="medium" color={color} key={color}>
                    Aristid Design Paragraph-L medium
                </KitTypography.Paragraph>
            ))}
        </>
    );
};

export default App;
