import {ReactNode} from 'react';
import {KitTypography} from '@kit/General/';
import {IEditorTemplate} from '../../../types';
import {IKitTypography} from '@theme/types/general/typography';
import {KitSpace} from '@kit/Layout';

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
    <div style={{width: '100%', display: 'grid', gridTemplateColumns: '50% 50%'}}>
        <div>
            <KitSpace direction="vertical">
                <KitTypography.Title>h1. Aristid Designs</KitTypography.Title>
                <KitTypography.Title level="h2">h2. Aristid Design</KitTypography.Title>
                <KitTypography.Title level="h3">h3. Aristid Design</KitTypography.Title>
                <KitTypography.Title level="h4">h4. Aristid Design</KitTypography.Title>
            </KitSpace>
        </div>
        <div>
            <KitSpace direction="vertical">
                <KitSpace direction="vertical" size="none">
                    <KitTypography.Text weight="bold">Aristid Design Text - bold</KitTypography.Text>
                    <KitTypography.Text weight="medium">Aristid Design Text - medium</KitTypography.Text>
                    <KitTypography.Text weight="regular">Aristid Design Text - regular</KitTypography.Text>
                </KitSpace>
                <KitSpace direction="vertical" size="none">
                    <KitTypography.Text weight="regular" size="fontSize1">
                        Aristid Design Text - fontSize 1
                    </KitTypography.Text>
                    <KitTypography.Text weight="regular" size="fontSize2">
                        Aristid Design Text - fontSize 2
                    </KitTypography.Text>
                    <KitTypography.Text weight="regular" size="fontSize3">
                        Aristid Design Text - fontSize 3
                    </KitTypography.Text>
                    <KitTypography.Text weight="regular" size="fontSize4">
                        Aristid Design Text - fontSize 4
                    </KitTypography.Text>
                    <KitTypography.Text weight="regular" size="fontSize5">
                        Aristid Design Text - fontSize 5
                    </KitTypography.Text>
                    <KitTypography.Text weight="regular" size="fontSize6">
                        Aristid Design Text - fontSize 6
                    </KitTypography.Text>
                    <KitTypography.Text weight="regular" size="fontSize7">
                        Aristid Design Text - fontSize 7
                    </KitTypography.Text>
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
        </div>
    </div>
);
EditorTemplate.path = 'components.Typography';
EditorTemplate.title = 'Typography';
