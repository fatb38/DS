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
            category: 'Checkbox.Group'
        }
    },
    required: {
        name: 'required',
        description: 'Whether the input is mandatory',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Checkbox.Group',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    infoIcon: {
        name: 'infoIcon',
        description: 'Custom Icon to display when onInfoClick is set',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Checkbox.Group',
            defaultValue: {summary: '<FontAwesomeIcon icon={faCircleInfo} />'}
        },
        defaultValue: false
    },
    actions: {
        name: 'actions',
        description: 'Actions to add on the right of the label',
        table: {
            type: {
                summary: 'ReactNode[]'
            },
            category: 'Checkbox.Group',
            defaultValue: {summary: null}
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        description: 'If disable all checkboxes',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Checkbox.Group'
        },
        defaultValue: false
    },
    bordered: {
        name: 'bordered',
        control: {type: 'boolean'},
        description: 'Add a border around group items',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Checkbox.Group'
        },
        defaultValue: false
    },
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Checkbox.Group'
        }
    },
    helper: {
        name: 'helper',
        description: 'Helper displayed below the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Checkbox.Group'
        }
    },
    name: {
        name: 'name',
        description: 'The `name` property of all `input[type="checkbox"]` children',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Checkbox.Group'
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
            category: 'Checkbox.Group'
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
            category: 'Checkbox.Group'
        }
    },
    wrapperClassName: {
        name: 'wrapperClassName',
        description: 'Component wrapper class name',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Checkbox.Group'
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
            category: 'Checkbox.Group'
        }
    },
    onInfoClick: {
        name: 'onInfoClick',
        description: 'If set, show info icon, and set the handler to handle `click` event on it',
        table: {
            type: {
                summary: '(e: MouseEvent<HTMLElement, MouseEvent>) => void;'
            },
            category: 'Checkbox.Group',
            defaultValue: {summary: '-'}
        },
        defaultValue: () => {}
    }
};

export const argTypes = {
    ...CheckboxArgTypes,
    ...CheckboxGroupArgTypes
};
