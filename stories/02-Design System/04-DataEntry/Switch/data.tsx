/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import {KitSwitch} from '@kit/DataEntry/';
import {IEditorTemplate} from '../../../types';
import {KitSpace} from '@kit/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';
import {IKitSwitch} from '@kit/DataEntry/Switch/types';

const SwitchArgTypes = {
    label: {
        name: 'label',
        control: {type: 'text'},
        description: 'label of the checkbox',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Switch',
            subcategory: 'For testing only'
        },
        defaultValue: 'Label'
    },
    autoFocus: {
        name: 'autoFocus',
        control: {type: 'boolean'},
        description: 'SelectWhether get focus when component mounted',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Switch'
        },
        defaultValue: false
    },
    checked: {
        name: 'checked',
        control: {type: 'boolean'},
        description: 'Determine whether the Switch is checked',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Switch'
        },
        defaultValue: false
    },
    /*checkedChildren: {
        name: "checkedChildren",
        type: { name: "ReactNode", required: false },
        options: [
            "-",
            "CheckOutlined"
        ],
        control: {
            type: "select",
        },
        table: {
            type: {
                summary: "ReactNode",
            },
            defaultValue: { summary: "-" },
            category: "Switch",
        },
        description: "The content to be shown when the state is checked",
    },
    unCheckedChildren: {
        name: "unCheckedChildren",
        type: { name: "ReactNode", required: false },
        options: [
            "-",
            "CloseOutlined"
        ],
        control: {
            type: "select",
        },
        table: {
            type: {
                summary: "ReactNode",
            },
            defaultValue: { summary: "-" },
            category: "Switch",
        },
        description: "The content to be shown when the state is unchecked",
    },*/
    defaultChecked: {
        name: 'defaultChecked',
        control: {type: 'boolean'},
        description: 'Whether to set the initial state',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Switch'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Disable switch',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Switch'
        },
        defaultValue: false
    },
    loading: {
        name: 'loading',
        control: {type: 'boolean'},
        description: 'Loading state of switch',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Switch'
        },
        defaultValue: false
    },
    /*size: {
        name: "tysizepe",
        options: ["default", "small"],
        control: { type: "select" },
        description: "The size of the Switch, options: `default` | `small`",
        table: {
            type: {
                summary: "string",
            },
            defaultValue: { summary: "default" },
            category: "Switch",
        },
        defaultValue: "default",
    },*/
    onChange: {
        name: 'onChange',
        description: 'Trigger when the checked state is changing',
        table: {
            type: {
                summary: 'function(checked: boolean, event: Event)'
            },
            defaultValue: {summary: '-'},
            category: 'Switch'
        },
        defaultValue: () => {}
    },
    onClick: {
        name: 'onClick',
        description: 'Trigger when clicked',
        table: {
            type: {
                summary: 'function(checked: boolean, event: Event)'
            },
            defaultValue: {summary: '-'},
            category: 'Switch'
        },
        defaultValue: () => {}
    }
};

export const argTypes = {
    ...SwitchArgTypes
};

export const getIcon = value => {
    switch (value) {
        case 'checkOutlined':
            return <FontAwesomeIcon icon={faCheck} />;
        case 'CloseOutlined':
            return <FontAwesomeIcon icon={faXmark} />;
        default:
            return null;
    }
};

export const Template = (args: IKitSwitch) => {
    return <KitSwitch {...args}>Switch label</KitSwitch>;
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace size="m">
            <KitSwitch>Switch label</KitSwitch>
            <KitSwitch checked>Switch label</KitSwitch>
            <KitSwitch loading>Switch label</KitSwitch>
            <KitSwitch disabled>Switch label</KitSwitch>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Switch';
EditorTemplate.title = 'Switch';
