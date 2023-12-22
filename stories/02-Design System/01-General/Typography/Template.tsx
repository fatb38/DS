import React, {ReactNode} from 'react';
import {KitTypography} from '@kit/General/';
import {KitGrid, KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {IKitTypography} from '@theme/types/general/typography';

const getComponent = (component, content, args) => {
    switch (component) {
        case 'Title':
            return <KitTypography.Title {...args}>{content}</KitTypography.Title>;
        case 'Text':
            return <KitTypography.Text {...args}>{content}</KitTypography.Text>;
        case 'Link':
            return <KitTypography.Link {...args}>{content}</KitTypography.Link>;
        case 'Paragraph':
        default:
            return <KitTypography.Paragraph {...args}>{content}</KitTypography.Paragraph>;
    }
};

interface ITemplate extends IKitTypography {
    component: string;
    content: ReactNode;
}

export const Template = args => {
    const {component, content, ...props} = args as ITemplate;
    return <KitSpace direction="vertical">{getComponent(component, content, props)}</KitSpace>;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitGrid.Row>
            <KitGrid.Col span={12}>
                <KitSpace direction="vertical">
                    <KitTypography.Title>h1. Aristid Design</KitTypography.Title>
                    <KitTypography.Title level="h2">h2. Aristid Design</KitTypography.Title>
                    <KitTypography.Title level="h3">h3. Aristid Design</KitTypography.Title>
                    <KitTypography.Title level="h4">h4. Aristid Design</KitTypography.Title>
                </KitSpace>
            </KitGrid.Col>
            <KitGrid.Col span={12}>
                <KitSpace direction="vertical">
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
                </KitSpace>
            </KitGrid.Col>
        </KitGrid.Row>
    );
};
EditorTemplate.path = 'components.Typography';
EditorTemplate.title = 'Typography';
