export const argTypes = {
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'InputNumber'
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
            category: 'InputNumber'
        }
    },
    required: {
        name: 'required',
        description: 'Whether the input is mandatory',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'InputNumber',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    infoIcon: {
        name: 'infoIcon',
        description: 'Custom Icon to display when onInfoClick is set',
        options: ['-', 'faMagnifyingGlass', 'faDownload', 'faCircleCheck'],
        control: {type: 'select'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'InputNumber',
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
            category: 'InputNumber',
            defaultValue: {summary: null}
        },
        defaultValue: false
    },
    placeHolder: {
        name: 'placeHolder',
        description: 'HTML input placeholder',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'InputNumber'
        }
    },
    autoFocus: {
        name: 'autoFocus',
        description: 'If get focus when component mounted',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'InputNumber',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    controls: {
        name: 'controls',
        description: 'Whether to show `+-` controls, or set custom arrows icon',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | { upIcon?: React.ReactNode; downIcon?: React.ReactNode; }'
            },
            category: 'InputNumber'
        }
    },
    decimalSeparator: {
        name: 'decimalSeparator',
        description: 'Decimal separator',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'InputNumber'
        }
    },
    defaultValue: {
        name: 'defaultValue',
        description: 'The initial value',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'InputNumber'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'If disable the input',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'InputNumber',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    formatter: {
        name: 'formatter',
        description: 'Specifies the format of the value presented',
        table: {
            type: {
                summary: 'function(value: number | string, info: { userTyping: boolean, input: string }): string'
            },
            category: 'InputNumber'
        }
    },
    keyboard: {
        name: 'keyboard',
        description: 'If enable keyboard behavior',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'InputNumber',
            defaultValue: {summary: true}
        },
        defaultValue: true
    },
    max: {
        name: 'max',
        description: 'The max value	',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'InputNumber',
            defaultValue: {summary: 'Number.MAX_SAFE_INTEGER'}
        },
        defaultValue: true
    },
    min: {
        name: 'min',
        description: 'The min value	',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'InputNumber',
            defaultValue: {summary: 'Number.MIN_SAFE_INTEGER'}
        },
        defaultValue: true
    },
    parser: {
        name: 'parser',
        description: 'Specifies the value extracted from formatter',
        table: {
            type: {
                summary: 'function(string): number'
            },
            category: 'InputNumber'
        }
    },
    precision: {
        name: 'precision',
        description: 'The precision of input value. Will use `formatter` when config of `formatter`',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'InputNumber'
        }
    },
    readOnly: {
        name: 'readOnly',
        description: 'If readonly the input',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'InputNumber',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    status: {
        name: 'status',
        description: 'Set validation status',
        options: ['', 'error', 'warning'],
        control: {type: 'select'},
        table: {
            type: {
                summary: "'error' | 'warning'"
            },
            category: 'InputNumber'
        }
    },
    prefix: {
        name: 'prefix',
        description: 'Set the icon component of button (Not working for TextArea)',
        options: ['', 'SearchOutlined', 'CheckCircleOutlined'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'InputNumber'
        }
    },
    step: {
        name: 'step',
        description: 'The number to which the current value is increased or decreased. It can be an integer or decimal',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number | string'
            },
            category: 'InputNumber',
            defaultValue: {summary: '1'}
        },
        defaultValue: '1'
    },
    stringMode: {
        name: 'stringMode',
        description: 'Set value as string to support high precision decimals. Will return string value by `onChange`',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'InputNumber',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    value: {
        name: 'value',
        description: 'The current value	',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'InputNumber'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'The callback triggered when the value is changed',
        table: {
            type: {
                summary: 'function(value: number | string | null)'
            },
            category: 'InputNumber'
        }
    },
    onPressEnter: {
        name: 'onPressEnter',
        description: 'The callback function that is triggered when Enter key is pressed',
        table: {
            type: {
                summary: 'function(e)'
            },
            category: 'InputNumber'
        }
    },
    onStep: {
        name: 'onStep',
        description: 'The callback function that is triggered when click up or down buttons',
        table: {
            type: {
                summary: "(value: number, info: { offset: number, type: 'up' | 'down' }) => void"
            },
            category: 'InputNumber'
        }
    },
    onInfoClick: {
        name: 'onInfoClick',
        description: 'If set, show info icon, and set the handler to handle `click` event on it',
        options: ['-', 'log to console'],
        control: {type: 'select'},
        table: {
            type: {
                summary: '(e: MouseEvent<HTMLElement, MouseEvent>) => void;'
            },
            category: 'InputNumber',
            defaultValue: {summary: '-'}
        },
        defaultValue: () => {}
    },
    wrapperClassName: {
        name: 'wrapperClassName',
        description: 'Component wrapper class name',
        table: {
            type: {
                summary: 'string'
            },
            category: 'InputNumber'
        }
    }
};
