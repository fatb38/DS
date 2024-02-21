import React, {FC} from 'react';
import {KitTypography} from '@kit/General';

export const TextAndLinkTypographyTest: FC = () => (
    <>
        <KitTypography.Title level="h3">Text and link</KitTypography.Title>
        <KitTypography.Paragraph size="large" weight="bold">
            Aristid Design Paragraph-L bold
        </KitTypography.Paragraph>
        <KitTypography.Paragraph size="large" weight="medium">
            Aristid Design Paragraph-L medium
        </KitTypography.Paragraph>
        <KitTypography.Paragraph size="large" weight="regular">
            Aristid Design Paragraph-L regular
        </KitTypography.Paragraph>
        <KitTypography.Paragraph></KitTypography.Paragraph>
        <KitTypography.Paragraph size="medium" weight="bold">
            Aristid Design Paragraph-M bold
        </KitTypography.Paragraph>
        <KitTypography.Paragraph size="medium" weight="medium">
            Aristid Design Paragraph-M medium
        </KitTypography.Paragraph>
        <KitTypography.Paragraph size="medium" weight="regular">
            Aristid Design Paragraph-M regular
        </KitTypography.Paragraph>
        <KitTypography.Paragraph></KitTypography.Paragraph>
        <KitTypography.Paragraph size="small" weight="bold">
            Aristid Design Paragraph-S bold
        </KitTypography.Paragraph>
        <KitTypography.Paragraph size="small" weight="medium">
            Aristid Design Paragraph-S medium
        </KitTypography.Paragraph>
        <KitTypography.Paragraph size="small" weight="regular">
            Aristid Design Paragraph-S regular
        </KitTypography.Paragraph>
        <KitTypography.Link href="https://aristid.com" target="_blank">
            Aristid Design (Link)
        </KitTypography.Link>
        <KitTypography.Title level="h3">Colored Text</KitTypography.Title>
        <KitTypography.Paragraph color="primary">Aristid Design</KitTypography.Paragraph>
        <KitTypography.Paragraph color="red">Aristid Design</KitTypography.Paragraph>
        <KitTypography.Paragraph color="green">Aristid Design</KitTypography.Paragraph>
    </>
);
