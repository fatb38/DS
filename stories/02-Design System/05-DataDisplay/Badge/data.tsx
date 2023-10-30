import React from 'react';
import {KitAvatar, KitBadge} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {IEditorTemplate} from '../../../types';

const status = ['error', 'default', 'success', 'processing', 'warning'];

export const argTypes = {
    count: {
        name: 'count',
        description: 'Number to show in badge',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Badge'
        }
    },
    dot: {
        name: 'dot',
        description: 'Whether to display a red dot instead of `count`',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Badge'
        }
    },
    overflowCount: {
        name: 'overflowCount',
        description: 'Max count to show',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 99
            },
            category: 'Badge'
        }
    },
    showZero: {
        name: 'showZero',
        description: 'Whether to show badge when `count` is zero',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Badge'
        }
    },
    status: {
        name: 'status',
        description: 'Set Badge as a status dot',
        options: status,
        control: {
            type: 'select',
            defaultValue: 'error'
        },
        table: {
            type: {
                summary: 'success | processing | default | error | warning'
            },
            category: 'Badge'
        }
    },
    color: {
        name: 'color',
        control: {type: 'color'},
        description: 'Set a color',
        table: {
            type: {
                summary:
                    '`hexadecimal` | `rgb` | `hsl` | `mediumGrey` | `yellow` | `orange` | `pink` | `red` | `blue` | `green`'
            },
            category: 'Badge'
        }
    },
    secondaryColorInvert: {
        name: 'secondaryColorInvert',
        description: 'Allow colors invertion only if color is set with a KitColorKeys',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Badge'
        }
    },
    title: {
        name: 'title',
        description: 'Text to show when hovering over the badge',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Badge'
        }
    }
};

export const Template = args => {
    const {component, ...props} = args;
    return (
        <KitSpace>
            <KitBadge {...props} />
            <br />
            <br />
            <KitBadge {...props}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace size="s">
            <KitBadge count={5}>
                <KitAvatar shape="square" size="large" />
            </KitBadge>
            <KitBadge dot status="success">
                Success
            </KitBadge>
            <KitBadge dot status="error">
                Error
            </KitBadge>
            <KitBadge dot status="default">
                Default
            </KitBadge>
            <KitBadge dot status="processing">
                Processing
            </KitBadge>
            <KitBadge dot status="warning">
                Warning
            </KitBadge>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Badge';
EditorTemplate.title = 'Badge';
