import {KitTypography} from '@kit/index';
import {useKitTheme} from '@theme/useKitTheme';

const App = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <>
            <KitTypography.Paragraph size="fontSize4" weight="medium" color="black">
                Aristid Design Paragraph - fontSize4 medium
            </KitTypography.Paragraph>
            <KitTypography.Paragraph
                size="fontSize4"
                weight="medium"
                color="white"
                style={{backgroundColor: 'darkblue'}}
            >
                Aristid Design Paragraph - fontSize4 medium
            </KitTypography.Paragraph>
            <KitTypography.Paragraph size="fontSize4" weight="medium" color="primary">
                Aristid Design Paragraph - fontSize4 medium
            </KitTypography.Paragraph>
            {secondaryColors.map((color: string) => (
                <KitTypography.Paragraph size="fontSize4" weight="medium" color={color} key={color}>
                    Aristid Design Paragraph - fontSize4 medium
                </KitTypography.Paragraph>
            ))}
            {tertiaryColors.map((color: string) => (
                <KitTypography.Paragraph size="fontSize4" weight="medium" color={color} key={color}>
                    Aristid Design Paragraph - fontSize4 medium
                </KitTypography.Paragraph>
            ))}
        </>
    );
};

export default App;
