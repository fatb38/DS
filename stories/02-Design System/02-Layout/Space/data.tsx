import React from 'react';
import {KitSpace} from '@kit/Layout/';
import {KitButton} from '@kit/General/';

export const SpaceArgTypes = {
    compact: {
        name: 'compact',
        control: {type: 'boolean'},
        description: 'test Compact mode',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: 'false'},
            category: 'Space',
            subcategory: 'for testing only'
        },
        defaultValue: false
    },
    align: {
        name: 'align',
        control: {type: 'select'},
        options: ['start', 'end', 'center', 'baseline'],
        description: 'Align items. one of `start` | `end` | `center` | `baseline',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Space'
        },
        defaultValue: '-'
    },
    direction: {
        name: 'direction',
        control: {type: 'select'},
        options: ['vertical', 'horizontal', 'center'],
        description: 'The space direction. One of `vertical` | `horizontal` | `center`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'horizontal'},
            category: 'Space'
        },
        defaultValue: 'horizontal'
    },
    size: {
        name: 'size',
        control: {type: 'select'},
        options: ['small', 'middle', 'large', 25],
        description: ' The space size. `Size` | `Size`[]',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'small'},
            category: 'Space'
        },
        defaultValue: 'small'
    },
    split: {
        name: 'split',
        description: ' Set split. `ReactNode`',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'Space'
        },
        defaultValue: '-'
    },
    wrap: {
        name: 'wrap',
        control: {type: 'boolean'},
        description: 'Auto wrap line, when `horizontal` effective',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: 'false'},
            category: 'Space'
        },
        defaultValue: false
    }
};

export const Template = ({compact, ...args}) => {
    let Component = compact ? KitSpace.Compact : KitSpace;

    return (
        <Component {...args}>
            <KitButton type="primary">Primary</KitButton>
            <KitButton>Default</KitButton>
        </Component>
    );
};
