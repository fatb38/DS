/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import {KitTag} from '@kit/DataDisplay/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitTag} from '@kit/DataDisplay/Tag/types';

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
        control: {type: 'color'},
        description: 'Set a color',
        table: {
            type: {
                summary:
                    '`hexadecimal` | `rgb` | `hsl` | `mediumGrey` | `yellow` | `orange` | `pink` | `red` | `blue` | `green`'
            },
            category: 'Tag'
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

export const Template = (args: IKitTag & {label: string}) => {
    const {label, ...props} = args;
    return <KitTag {...props}>{label ? label : 'Default label'}</KitTag>;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace>
            <KitTag onClose={() => {}}>Tag</KitTag>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Tag';
EditorTemplate.title = 'Tag';
