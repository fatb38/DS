import React from 'react';
import {KitTypography} from '@kit/General/';
import {KitGrid, KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';

const components = ['Title', 'Text', 'Paragraph', 'Link'];

export const argTypes = {
    component: {
        name: 'component',
        description: 'Choose the component to play with (not a prop)',
        options: components,
        control: {
            type: 'select',
            defaultValue: 'Paragraph'
        },
        table: {
            type: {
                summary: '-'
            }
        },
        defaultValue: 'Paragraph'
    },
    content: {
        name: 'content',
        description: 'component content',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: '-'
            }
        },
        defaultValue: 'This is the content'
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Disabled content',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Common'
        },
        defaultValue: false
    },
    ellipsis: {
        name: 'ellipsis',
        description:
            'Display ellipsis when text overflows, can configure rows and expandable by using object | boolean',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'object | boolean'
            },
            defaultValue: false,
            category: 'Common'
        },
        defaultValue: false
    },
    level: {
        name: 'level',
        description: 'Set content importance. Match with `h1`, `h2`, `h3`, `h4`',
        options: ['h1', 'h2', 'h3', 'h4'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'TitleLevelKeys'
            },
            defaultValue: {summary: 'h1'},
            category: 'Typography.Title'
        }
    },
    copyable: {
        name: 'copyable',
        description: 'Whether to be copyable, customize it via setting an  boolean',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: false,
            category: 'Common'
        },
        defaultValue: false
    },
    onClick: {
        name: 'onClick',
        description: 'Set the handler to handle `click` event',
        table: {
            type: {
                summary: '(event: MouseEvent) => void'
            },
            defaultValue: {summary: '-'},
            category: 'Common'
        },
        defaultValue: () => {}
    },
    type: {
        name: 'type',
        description: 'Content Type',
        options: ['', 'secondary', 'success', 'warning', 'danger'],
        control: {
            type: 'select',
            required: false
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: '-',
            category: 'Typography.Text, Typography.Paragraph, Typography.Link'
        },
        defaultValue: '-'
    },
    weight: {
        name: 'weight',
        description: 'Font weight',
        options: ['', 'bold', 'medium', 'regular'],
        control: {
            type: 'select',
            required: false
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: 'medium',
            category: 'Typography.Text, Typography.Paragraph, Typography.Link'
        },
        defaultValue: 'medium'
    },
    size: {
        name: 'size',
        description: 'Content Size',
        options: ['', 'large', 'medium', 'small'],
        control: {
            type: 'select',
            required: false
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: 'medium',
            category: 'Typography.Text, Typography.Paragraph, Typography.Link'
        },
        defaultValue: 'medium'
    }
};

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

export const Template = args => {
    const {component, content, ...props} = args;
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
