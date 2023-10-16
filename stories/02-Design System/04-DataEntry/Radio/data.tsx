import React from 'react';
import {KitRadio} from '@kit/DataEntry/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';

const RadioArgTypes = {
    label: {
        name: 'label',
        control: {type: 'text'},
        description: 'label of the checkbox',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Radio',
            subcategory: 'For testing only'
        },
        defaultValue: 'Label'
    },
    autoFocus: {
        name: 'autoFocus',
        control: {type: 'boolean'},
        description: 'Whether get focus when component mounted',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Radio'
        },
        defaultValue: false
    },
    checked: {
        name: 'checked',
        control: {type: 'boolean'},
        description: 'Specifies whether the radio is selected',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Radio'
        },
        defaultValue: false
    },
    defaultChecked: {
        name: 'defaultChecked',
        control: {type: 'boolean'},
        description: 'Specifies the initial state: whether or not the radio is selected',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Radio'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'If Disable radio',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Radio'
        },
        defaultValue: false
    },
    danger: {
        name: 'danger',
        control: {type: 'boolean'},
        description: 'If Danger radio',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Radio'
        },
        defaultValue: false
    },
    value: {
        name: 'value',
        control: {type: 'text'},
        description: 'According to value for comparison, to determine whether the selected',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: false},
            category: 'Radio'
        },
        defaultValue: false
    }
};

const RadioGroupArgTypes = {
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
        description: 'Disable all radio buttons',
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
        description: ' The `name` property of all `input[type="radio"]` children',
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
        description: ' Set children options',
        table: {
            type: {
                summary: 'string[] | number[] | Array<{ label: ReactNode; value: string; disabled?: boolean; }>'
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
        description: ' The callback function that is triggered when the state changes ',
        table: {
            type: {
                summary: 'function(e:Event)'
            },
            defaultValue: {summary: '-'},
            category: 'Radio.Group'
        }
    }
};

export const argTypes = {
    ...RadioArgTypes,
    ...RadioGroupArgTypes
};

export const plainOptions = ['Apple', 'Pear', 'Orange'];
export const defaultCheckedList = ['Apple', 'Orange'];

export const Template = args => {
    return <KitRadio {...args}>Radio label</KitRadio>;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace size="m">
            <KitSpace direction="vertical">
                <KitRadio>Radio</KitRadio>
                <KitRadio checked>Radio</KitRadio>
                <KitRadio disabled>Radio</KitRadio>
                <KitRadio disabled checked>
                    Radio
                </KitRadio>
            </KitSpace>
            <KitSpace direction="vertical">
                <KitRadio danger>Radio</KitRadio>
                <KitRadio danger checked>
                    Radio
                </KitRadio>
                <KitRadio danger disabled>
                    Radio
                </KitRadio>
                <KitRadio danger disabled checked>
                    Radio
                </KitRadio>
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Radio';
EditorTemplate.title = 'Radio';
