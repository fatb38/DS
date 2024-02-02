const RadioArgTypes = {
    label: {
        name: 'label',
        control: {type: 'text'},
        description: 'label of the Radio',
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
            category: 'Radio.Group'
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
            category: 'Radio.Group'
        },
        defaultValue: false
    },
    bordered: {
        name: 'bordered',
        description: 'Add a border around group items',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Radio.Group'
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
            category: 'Radio.Group'
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
            category: 'Radio.Group'
        }
    },
    name: {
        name: 'name',
        description: ' The `name` property of all `input[type="radio"]` children',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Radio.Group'
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
            category: 'Radio.Group'
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
            category: 'Radio.Group'
        }
    },
    wrapperClassName: {
        name: 'wrapperClassName',
        description: 'Component wrapper class name',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Radio.Group'
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
