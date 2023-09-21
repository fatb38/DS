import React from 'react';

import {KitTag} from '@kit/DataEntry/';

const color = ['default', 'green', 'red', 'blue', 'blueInvert'];

const TagArgTypes = {
    label: {
        name: 'label',
        control: {
            type: 'text'
        },
        description: 'label of the tag',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'Label'},
            category: 'Tag',
            subcategory: 'For testing only'
        },
        defaultValue: 'Label'
    },
    color: {
        name: 'color',
        description: 'Set a color',
        options: color,
        control: {
            type: 'select',
            defaultValue: 'default'
        },
        table: {
            type: {
                summary: 'default | red | green | blue | blueInvert'
            },
            category: 'Tag'
        }
    },
    onClose: {
        name: 'onClose',
        description: 'Callback executed when tag is closed',
        table: {
            type: {
                summary: "'(e) => void'"
            },
            category: 'Tag'
        }
    }
};

export const argTypes = {
    ...TagArgTypes
};

export const Template = (args) => {
    const {label, ...props} = args;
    return <KitTag {...props}>{label ? label : 'Default label'}</KitTag>;
};
