const SelectArgTypes = {
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Select'
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
            category: 'Select'
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
            },
            category: 'Select'
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
            category: 'Select',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    mode: {
        name: 'mode',
        control: {type: 'text'},
        description: 'Select mode. Can be `multiple`, `tags` or `undefined`for simple mode',
        table: {
            type: {
                summary: 'string | undefined'
            },
            defaultValue: {
                summary: 'undefined'
            },
            category: 'Select'
        },
        defaultValue: undefined
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
            category: 'Select',
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
            category: 'Select',
            defaultValue: {summary: null}
        },
        defaultValue: false
    },
    placeholder: {
        name: 'placeholder',
        control: {type: 'text'},
        description: 'Placeholder of select',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        }
    },
    allowClear: {
        name: 'allowClear',
        control: {type: 'boolean'},
        description: 'Show clear button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Select'
        },
        defaultValue: false
    },
    oneLineTags: {
        name: 'oneLineTags',
        control: {type: 'boolean'},
        description: 'Display tags on one line. Only applies when `mode` is set to `multiple` or `tags`',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    showSearch: {
        name: 'showSearch',
        control: {type: 'boolean'},
        description: 'Whether select is searchable',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: 'single: false, multiple: true'},
            category: 'Select'
        },
        defaultValue: false
    },
    autoClearSearchValue: {
        name: 'autoClearSearchValue',
        control: {type: 'boolean'},
        description:
            'Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags`',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Select'
        },
        defaultValue: true
    },
    autoFocus: {
        name: 'autoFocus',
        control: {type: 'boolean'},
        description: 'Get focus by default',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    filterOption: {
        name: 'filterOption',
        control: {type: 'boolean'},
        description:
            'If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and option, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded',
        table: {
            type: {
                summary: 'boolean | function(inputValue, option)'
            },
            defaultValue: {summary: true},
            category: 'Select'
        },
        defaultValue: true
    },
    optionFilterProp: {
        name: 'optionFilterProp',
        control: {type: 'text'},
        description:
            'Which prop value of option will be used for filter if filterOption is true. If `options` is set, it should be set to `label`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'value'},
            category: 'Select'
        },
        defaultValue: 'value'
    },
    notFoundContent: {
        name: 'notFoundContent',
        description: 'Specify content to show when no result matches',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: `Not Found`},
            category: 'Select'
        },
        defaultValue: 'Not Found'
    },
    defaultActiveFirstOption: {
        name: 'defaultActiveFirstOption',
        control: {type: 'boolean'},
        description: 'Whether active first option by default',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Select'
        },
        defaultValue: true
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
            category: 'Select'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Whether disabled select',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    loading: {
        name: 'loading',
        control: {type: 'boolean'},
        description: 'Indicate loading state',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    showArrow: {
        name: 'showArrow',
        control: {type: 'boolean'},
        description: 'Whether to show the drop-down arrow',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Select'
        },
        defaultValue: true
    },
    defaultValue: {
        name: 'defaultValue',
        control: {type: 'text'},
        description: 'Initial selected option',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: 'string | string[] | number | number[] | LabeledValue | LabeledValue[]'
            },
            category: 'Select'
        },
        defaultValue: true
    },
    popupClassName: {
        name: 'popupClassName',
        control: {type: 'text'},
        description: 'The className of dropdown menu',
        table: {
            type: {
                summary: 'text'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: true
    },
    options: {
        name: 'options',
        control: {type: 'text'},
        description: 'Select options. Will get better perf than jsx definition',
        table: {
            type: {
                summary: 'text'
            },
            defaultValue: {summary: '{ label, value }[] }'},
            category: 'Select'
        }
    },
    labelOnly: {
        name: 'labelOnly',
        control: {type: 'boolean'},
        description: 'If options contains icons or colors they will be ignored',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Select'
        },
        defaultValue: false
    },
    value: {
        name: 'value',
        control: {type: 'text'},
        description: 'Current selected option (considered as a immutable array)',
        table: {
            type: {
                summary: 'string | string[] | <br />number | number[] | <br />LabeledValue | LabeledValue[]'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        }
    },
    maxCount: {
        name: 'maxCount',
        control: {type: 'number'},
        description: 'The max number of items can be selected, only applies when `mode` is `multiple` or `tags`',
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        }
    },
    placement: {
        name: 'placement',
        control: {type: 'select'},
        options: ['bottomLeft', 'bottomRight', 'TopLeft', 'topRight'],
        description: 'The position where the selection box pops up',
        table: {
            type: {
                summary: '`bottomLeft` `bottomRight` `topLeft` `topRight`'
            },
            defaultValue: {summary: 'bottomLeft'},
            category: 'Select'
        }
    },
    getPopupContainer: {
        name: 'getPopupContainer',
        description:
            'Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative. [Example](https://codesandbox.io/s/4j168r7jw0)',
        table: {
            type: {
                summary: 'function(triggerNode)'
            },
            defaultValue: {summary: '() => document.body'},
            category: 'Select'
        }
    },
    onBlur: {
        name: 'onBlur',
        description: 'Called when blur',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onChange: {
        name: 'onChange',
        description: 'Called when select an option or input value change',
        table: {
            type: {
                summary: 'function(value, option:Option | Array<Option>)'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onClear: {
        name: 'onClear',
        description: 'Called when clear',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onDropdownVisibleChange: {
        name: 'onDropdownVisibleChange',
        description: 'Called when dropdown open',
        table: {
            type: {
                summary: 'function(open)'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onFocus: {
        name: 'onFocus',
        description: 'Called when focus',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onMouseEnter: {
        name: 'onMouseEnter',
        description: 'Called when mouse enter',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onMouseLeave: {
        name: 'onMouseLeave',
        description: 'Called when mouse leave',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onPopupScroll: {
        name: 'onPopupScroll',
        description: 'Called when dropdown scrolls',
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onSelect: {
        name: 'onSelect',
        description:
            "Called when an option is selected, the params are option's value (or key) and option instance. function(value: string | number | LabeledValue, option: Option)",
        table: {
            type: {
                summary: 'function'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
    },
    onSearch: {
        name: 'onSearch',
        description: 'Callback function that is fired when input changed',
        table: {
            type: {
                summary: 'function(value: string)'
            },
            defaultValue: {summary: '-'},
            category: 'Select'
        },
        defaultValue: () => {}
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
            category: 'Select',
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
            category: 'Select'
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

export const argTypes = {
    ...SelectArgTypes
};
