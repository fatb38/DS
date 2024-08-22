import {ReactNode} from 'react';
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

export const EditorTemplate: IEditorTemplate = () => (
    <KitGrid.Row>
        <KitGrid.Col span={5}>
            <KitSpace direction="vertical">
                <KitTypography.Title>h1. Aristid Design</KitTypography.Title>
                <KitTypography.Title level="h2">h2. Aristid Design</KitTypography.Title>
                <KitTypography.Title level="h3">h3. Aristid Design</KitTypography.Title>
                <KitTypography.Title level="h4">h4. Aristid Design</KitTypography.Title>
            </KitSpace>
        </KitGrid.Col>
        <KitGrid.Col span={5}>
            <KitSpace direction="vertical">
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
        </KitGrid.Col>
        <KitGrid.Col span={8}>
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
                <KitTypography.Paragraph size="fontSize1">Aristid Design Paragraph - fontSize1</KitTypography.Paragraph>
                <KitTypography.Paragraph size="fontSize2">Aristid Design Paragraph - fontSize2</KitTypography.Paragraph>
                <KitTypography.Paragraph size="fontSize3">Aristid Design Paragraph - fontSize3</KitTypography.Paragraph>
                <KitTypography.Paragraph size="fontSize4">Aristid Design Paragraph - fontSize4</KitTypography.Paragraph>
                <KitTypography.Paragraph size="fontSize5">Aristid Design Paragraph - fontSize5</KitTypography.Paragraph>
                <KitTypography.Paragraph size="fontSize6">Aristid Design Paragraph - fontSize6</KitTypography.Paragraph>
                <KitTypography.Paragraph size="fontSize7">Aristid Design Paragraph - fontSize7</KitTypography.Paragraph>
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
        </KitGrid.Col>
    </KitGrid.Row>
);
EditorTemplate.path = 'components.Typography';
EditorTemplate.title = 'Typography';
