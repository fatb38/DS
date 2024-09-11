const components = ['Input', 'TextArea', 'Password'];

export const argTypes = {
    component: {
        name: 'component',
        description: 'Choose the component to play with (not a prop)',
        options: components,
        control: {
            type: 'select',
            defaultValue: 'Input'
        },
        defaultValue: 'Input'
    },
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    helper: {
        name: 'helper',
        description: 'Helper displayed below the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    htmlFor: {
        name: 'htmlFor',
        description:
            'Indicates the form element that the label describes. If you set the `id` prop, you should set the same `id` on the `htmlFor` prop',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    type: {
        name: 'type',
        description:
            'The type of input, see: [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) ( use `Input.TextArea` instead of type="textarea")',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            }
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
            category: 'Input',
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
            category: 'Input',
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
            category: 'Input',
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
            }
        }
    },
    rows: {
        name: 'rows',
        description: 'HTML textarea rows',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            }
        }
    },
    allowClear: {
        name: 'allowClear',
        description: 'If allow to remove input content with clear icon',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Input'
        },
        defaultValue: false
    },
    defaultValue: {
        name: 'defaultValue',
        description: 'The initial input content	',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Input'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Whether the input is disabled',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Input'
        },
        defaultValue: false
    },
    maxLength: {
        name: 'maxLength',
        description: 'The maximum number of characters in Input',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Input'
        }
    },
    showCount: {
        name: 'showCount',
        description: 'Whether to show character count',
        control: {type: 'boolean'},
        table: {
            type: {
                summary:
                    'boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }'
            },
            defaultValue: {summary: false},
            category: 'Input'
        },
        defaultValue: false
    },
    status: {
        name: 'status',
        description: 'Set validation status	',
        options: ['', 'error', 'warning'],
        control: {type: 'select'},
        table: {
            type: {
                summary: "'error' | 'warning'"
            },
            category: 'Input'
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
            category: 'Input'
        }
    },
    suffix: {
        name: 'suffix',
        description: 'The suffix icon for the Input (Not working for TextArea and Password)',
        options: ['', 'SearchOutlined', 'CheckCircleOutlined'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Input'
        }
    },
    value: {
        name: 'value',
        description: 'The input content value',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Input'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback when user input',
        table: {
            type: {
                summary: 'function(e)'
            },
            category: 'Input'
        }
    },
    onPressEnter: {
        name: 'onPressEnter',
        description: 'The callback function that is triggered when Enter key is pressed',
        table: {
            type: {
                summary: 'function(e)'
            },
            category: 'Input'
        }
    },
    inputHtml: {
        name: '',
        description: 'The rest of the props of Input are exactly the same as the original input.',
        table: {
            type: {
                summary: 'https://legacy.reactjs.org/docs/dom-elements.html#all-supported-html-attributes'
            },
            category: 'Input'
        }
    },
    autoSize: {
        name: 'autoSize',
        description: 'Height autosize feature, can be set to true | false or an object { minRows: 2, maxRows: 6 }',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | object'
            },
            defaultValue: {summary: true},
            category: 'Input.TextArea'
        },
        defaultValue: true
    },
    onResize: {
        name: 'onResize',
        description: 'The callback function that is triggered when resize',
        table: {
            type: {
                summary: 'function({ width, height })'
            },
            category: 'Input.TextArea'
        }
    },
    inputTextArea: {
        name: '',
        description: 'The rest of the props of TextArea are the same as the original',
        table: {
            type: {
                summary: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea'
            },
            category: 'Input.TextArea'
        }
    },
    iconRender: {
        name: 'iconRender',
        description: 'Custom toggle button	',
        table: {
            type: {
                summary: '(visible) => ReactNode'
            },
            defaultValue: {
                summary: '(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)'
            },
            category: 'Input.Password'
        }
    },
    visibilityToggle: {
        name: 'visibilityToggle',
        description: 'Whether show toggle button or control password visible',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | VisibilityToggle'
            },
            defaultValue: {summary: true},
            category: 'Input.Password'
        },
        defaultValue: true
    },
    visible: {
        name: 'visible',
        description: 'Whether the password is show or hide',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Input.Password.visibilityToggle'
        },
        defaultValue: false
    },
    onVisibleChange: {
        name: 'onVisibleChange',
        description: 'Callback executed when visibility of the password is changed',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Input.Password.visibilityToggle'
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
            category: 'Input',
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
            category: 'Input'
        }
    },
    readonly: {
        name: 'readonly',
        description: 'Boolean to set the input in readonly mode',
        table: {
            defaultValue: {summary: false},
            category: 'Common API'
        }
    }
};
