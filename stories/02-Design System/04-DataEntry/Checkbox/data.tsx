/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import {KitCheckbox} from '@kit/DataEntry/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {IKitCheckbox} from '@kit/DataEntry/Checkbox/types';

const CheckboxArgTypes = {
    label: {
        name: 'label',
        control: {type: 'text'},
        description: 'label of the checkbox',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Checkbox',
            subcategory: 'For testing only'
        },
        defaultValue: 'Label'
    },
    autoFocus: {
        name: 'autoFocus',
        control: {type: 'boolean'},
        description: 'If get focus when component mounted',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Checkbox'
        },
        defaultValue: false
    },
    checked: {
        name: 'checked',
        control: {type: 'boolean'},
        description: 'Specifies whether the checkbox is selected ',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Checkbox'
        },
        defaultValue: false
    },
    defaultChecked: {
        name: 'defaultChecked',
        control: {type: 'boolean'},
        description: 'Specifies the initial state: whether or not the checkbox is selected',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Checkbox'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'If disable checkbox',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Checkbox'
        },
        defaultValue: false
    },
    danger: {
        name: 'danger',
        control: {type: 'boolean'},
        description: 'If danger checkbox',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Checkbox'
        },
        defaultValue: false
    },
    indeterminate: {
        name: 'indeterminate',
        control: {type: 'boolean'},
        description: 'The indeterminate checked state of checkbox',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Checkbox'
        },
        defaultValue: false
    },
    onChange: {
        name: 'onChange',
        description: 'The callback function that is triggered when the state changes',
        table: {
            type: {
                summary: '(e: CheckboxChangeEvent) => void'
            },
            defaultValue: {summary: '-'},
            category: 'Checkbox'
        }
    }
};

const CheckboxGroupArgTypes = {
    defaultValue: {
        name: 'defaultValue',
        description: 'Default selected value',
        table: {
            type: {
                summary: 'string | number'
            },
            defaultValue: {summary: '[]'},
            category: 'Checkbox Group'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'If disable all checkboxes',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Checkbox Group'
        },
        defaultValue: false
    },
    name: {
        name: 'name',
        description: 'The `name` property of all `input[type="checkbox"]` children',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Checkbox Group'
        }
    },
    options: {
        name: 'options',
        description: 'Specifies options',
        table: {
            type: {
                summary: 'string[] | number[] | Option[]'
            },
            defaultValue: {summary: '[]'},
            category: 'Checkbox Group'
        }
    },
    value: {
        name: 'value',
        description: 'Used for setting the currently selected value',
        table: {
            type: {
                summary: '(string | number)[]'
            },
            defaultValue: {summary: '[]'},
            category: 'Checkbox Group'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'The callback function that is triggered when the state changes',
        table: {
            type: {
                summary: '(checkedValue: CheckboxValueType[]) => void'
            },
            defaultValue: {summary: '-'},
            category: 'Checkbox'
        }
    }
};

export const argTypes = {
    ...CheckboxArgTypes,
    ...CheckboxGroupArgTypes
};

interface ITemplate extends IKitCheckbox {
    label: string;
}

export const Template = (args: IKitCheckbox) => {
    const {label, ...props} = args as ITemplate;
    return <KitCheckbox {...props}>{label}</KitCheckbox>;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace size="m">
            <KitSpace direction="vertical">
                <KitCheckbox>Checkbox</KitCheckbox>
                <KitCheckbox checked>Checkbox</KitCheckbox>
                <KitCheckbox disabled>Checkbox</KitCheckbox>
                <KitCheckbox disabled checked>
                    Checkbox
                </KitCheckbox>
            </KitSpace>
            <KitSpace direction="vertical">
                <KitCheckbox danger>Checkbox</KitCheckbox>
                <KitCheckbox danger checked>
                    Checkbox
                </KitCheckbox>
                <KitCheckbox danger disabled>
                    Checkbox
                </KitCheckbox>
                <KitCheckbox danger disabled checked>
                    Checkbox
                </KitCheckbox>
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Checkbox';
EditorTemplate.title = 'Checkbox';
