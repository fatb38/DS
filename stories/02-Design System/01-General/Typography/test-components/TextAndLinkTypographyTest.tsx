import {FunctionComponent} from 'react';
import {KitTypography} from '@kit/General';
import {useKitTheme} from '@theme/useKitTheme';
import {KitSpace} from '@kit/Layout';

export const TextAndLinkTypographyTest: FunctionComponent = () => {
    const {theme} = useKitTheme();

    const secondaryColors = Object.keys(theme.colors.secondary);
    const tertiaryColors = Object.keys(theme.colors.tertiary);

    return (
        <>
            <KitTypography.Title level="h3">Text and link</KitTypography.Title>
            <KitSpace direction="vertical" size="xxs">
                <KitSpace direction="vertical" size="none">
                    <KitTypography.Text weight="bold">Aristid Design Text - bold</KitTypography.Text>
                    <KitTypography.Text weight="medium">Aristid Design Text - medium</KitTypography.Text>
                    <KitTypography.Text weight="regular">Aristid Design Text - regular</KitTypography.Text>
                </KitSpace>
                <KitSpace direction="vertical" size="none">
                    <KitTypography.Paragraph weight="bold">Aristid Design Paragraph - bold</KitTypography.Paragraph>
                    <KitTypography.Paragraph weight="medium">Aristid Design Paragraph - medium</KitTypography.Paragraph>
                    <KitTypography.Paragraph weight="regular">
                        Aristid Design Paragraph - regular
                    </KitTypography.Paragraph>
                </KitSpace>
                <KitSpace direction="vertical" size="none">
                    <KitTypography.Link weight="bold">Aristid Design Link - bold</KitTypography.Link>
                    <KitTypography.Link weight="medium">Aristid Design Link - medium</KitTypography.Link>
                    <KitTypography.Link weight="regular">Aristid Design Link - regular</KitTypography.Link>
                </KitSpace>
            </KitSpace>
            <KitSpace direction="vertical" size="xxs">
                <KitSpace direction="vertical" size="none">
                    <KitTypography.Text size="fontSize1">Aristid Design Text - fontSize1</KitTypography.Text>
                    <KitTypography.Text size="fontSize2">Aristid Design Text - fontSize2</KitTypography.Text>
                    <KitTypography.Text size="fontSize3">Aristid Design Text - fontSize3</KitTypography.Text>
                    <KitTypography.Text size="fontSize4">Aristid Design Text - fontSize4</KitTypography.Text>
                    <KitTypography.Text size="fontSize5">Aristid Design Text - fontSize5</KitTypography.Text>
                    <KitTypography.Text size="fontSize6">Aristid Design Text - fontSize6</KitTypography.Text>
                    <KitTypography.Text size="fontSize7">Aristid Design Text - fontSize7</KitTypography.Text>
                </KitSpace>
                <KitSpace direction="vertical" size="none">
                    <KitTypography.Paragraph size="fontSize1">
                        Aristid Design Paragraph - fontSize1
                    </KitTypography.Paragraph>
                    <KitTypography.Paragraph size="fontSize2">
                        Aristid Design Paragraph - fontSize2
                    </KitTypography.Paragraph>
                    <KitTypography.Paragraph size="fontSize3">
                        Aristid Design Paragraph - fontSize3
                    </KitTypography.Paragraph>
                    <KitTypography.Paragraph size="fontSize4">
                        Aristid Design Paragraph - fontSize4
                    </KitTypography.Paragraph>
                    <KitTypography.Paragraph size="fontSize5">
                        Aristid Design Paragraph - fontSize5
                    </KitTypography.Paragraph>
                    <KitTypography.Paragraph size="fontSize6">
                        Aristid Design Paragraph - fontSize6
                    </KitTypography.Paragraph>
                    <KitTypography.Paragraph size="fontSize7">
                        Aristid Design Paragraph - fontSize7
                    </KitTypography.Paragraph>
                </KitSpace>
                <KitSpace direction="vertical" size="none">
                    <KitTypography.Link size="fontSize1">Aristid Design Link - fontSize1</KitTypography.Link>
                    <KitTypography.Link size="fontSize2">Aristid Design Link - fontSize2</KitTypography.Link>
                    <KitTypography.Link size="fontSize3">Aristid Design Link - fontSize3</KitTypography.Link>
                    <KitTypography.Link size="fontSize4">Aristid Design Link - fontSize4</KitTypography.Link>
                    <KitTypography.Link size="fontSize5">Aristid Design Link - fontSize5</KitTypography.Link>
                    <KitTypography.Link size="fontSize6">Aristid Design Link - fontSize6</KitTypography.Link>
                    <KitTypography.Link size="fontSize7">Aristid Design Link - fontSize7</KitTypography.Link>
                </KitSpace>
            </KitSpace>
            <KitTypography.Title level="h3">Colored Text</KitTypography.Title>
            <KitTypography.Paragraph color="primary">Aristid Design</KitTypography.Paragraph>
            {secondaryColors.map((color: string) => (
                <KitTypography.Paragraph color={color}>Aristid Design</KitTypography.Paragraph>
            ))}
            {tertiaryColors.map((color: string) => (
                <KitTypography.Paragraph color={color}>Aristid Design</KitTypography.Paragraph>
            ))}
        </>
    );
};
