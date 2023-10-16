import React from 'react';
import {KitDivider, KitGrid, KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';
import {KitTypography} from '@kit/General';

export const argTypes = {
    dashed: {
        name: 'dashed',
        control: {type: 'boolean'},
        description: 'Whether line is dashed',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: 'false'},
            category: 'Divider'
        },
        defaultValue: false
    },
    orientation: {
        name: 'orientation',
        control: {type: 'select'},
        options: ['left', 'right', 'center'],
        description: 'The position of title inside divider can be set to `left` | `right` | `center`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'center'},
            category: 'Divider'
        },
        defaultValue: 'center'
    },
    orientationMargin: {
        name: 'orientationMargin',
        control: {type: 'text'},
        description:
            'The margin-left/right between the title and its closest border, while the `orientation` must be `left` or `right`, If a numeric value of type string is provided without a unit, it is assumed to be in pixels (px) by default.',
        table: {
            type: {
                summary: 'string | number'
            },
            defaultValue: {summary: '-'},
            category: 'Divider'
        },
        defaultValue: ' '
    },
    type: {
        name: 'orientation',
        control: {type: 'select'},
        options: ['horizontal', 'vertical'],
        description: 'The direction type of divider can be set to `horizontal` | `vertical`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'horizontal'},
            category: 'Divider'
        },
        defaultValue: 'horizontal'
    },
    noMargin: {
        name: 'noMargin',
        control: {type: 'boolean'},
        description: 'Keep top and bottom margin or not',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Divider'
        },
        defaultValue: false
    },
    color: {
        name: 'color',
        control: {type: 'select'},
        options: ['default', 'lightGrey'],
        description: 'Border color can be set to `default` | `lightGrey`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'center'},
            category: 'Divider'
        },
        defaultValue: 'center'
    },
    label: {
        name: 'label',
        control: {type: 'text'},
        description: 'label of the divider',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Divider',
            subcategory: 'For testing only'
        },
        defaultValue: 'Label'
    }
};

export const Template = args => {
    const {label, ...props} = args;
    return <KitDivider {...props}>{label}</KitDivider>;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitGrid.Row>
            <KitGrid.Col span={24}>
                <KitSpace direction="vertical">
                    <KitSpace direction="vertical">
                        <KitTypography.Paragraph size="medium" weight="regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
                            ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </KitTypography.Paragraph>
                        <KitDivider>Label</KitDivider>
                        <KitTypography.Paragraph size="medium" weight="regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
                            ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </KitTypography.Paragraph>
                    </KitSpace>
                    <KitDivider />
                    <KitSpace align="center" style={{justifyContent: 'center'}}>
                        <KitTypography.Text>Lorem</KitTypography.Text>
                        <KitDivider type="vertical" />
                        <KitTypography.Text>ipsum</KitTypography.Text>
                        <KitDivider type="vertical" />
                        <KitTypography.Text>dolor</KitTypography.Text>
                    </KitSpace>
                </KitSpace>
            </KitGrid.Col>
        </KitGrid.Row>
    );
};
EditorTemplate.path = 'components.Divider';
EditorTemplate.title = 'Divider';
