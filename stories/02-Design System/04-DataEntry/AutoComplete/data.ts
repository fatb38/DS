export const argTypes = {
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'AutoComplete'
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
            category: 'AutoComplete',
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
            category: 'AutoComplete',
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
            category: 'AutoComplete',
            defaultValue: {summary: null}
        },
        defaultValue: false
    },
    helper: {
        name: 'helper',
        description: 'Helper displayed below the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'AutoComplete'
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
            category: 'AutoComplete'
        }
    },
    allowClear: {
        name: 'allowClear',
        description: 'Show clear button',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'AutoComplete',
            defaultValue: {summary: true}
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
            category: 'AutoComplete',
            defaultValue: {summary: false}
        }
    },
    backfill: {
        name: 'backfill',
        description: 'If backfill selected item the input when using keyboard',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'AutoComplete',
            defaultValue: {summary: false}
        }
    },
    defaultActiveFirstOption: {
        name: 'defaultActiveFirstOption',
        description: 'Whether active first option by default',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'AutoComplete',
            defaultValue: {summary: true}
        }
    },
    defaultOpen: {
        name: 'defaultOpen',
        description: 'Initial open state of dropdown',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    defaultValue: {
        name: 'defaultValue',
        description: 'Initial selected option',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Whether disabled select',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'AutoComplete',
            defaultValue: {summary: false}
        }
    },
    popupClassName: {
        name: 'popupClassName',
        description: 'The className of dropdown menu',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    dropdownMatchSelectWidth: {
        name: 'dropdownMatchSelectWidth',
        description:
            'Determine whether the dropdown menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | number'
            },
            category: 'AutoComplete',
            defaultValue: {summary: true}
        }
    },
    filterOption: {
        name: 'filterOption',
        description:
            'If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | function(inputValue, option)'
            },
            category: 'AutoComplete',
            defaultValue: {summary: true}
        }
    },
    notFoundContent: {
        name: 'notFoundContent',
        description: 'Specify content to show when no result matches',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'AutoComplete',
            defaultValue: {summary: 'Not Found'}
        }
    },
    open: {
        name: 'open',
        description: 'Controlled open state of dropdown',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    options: {
        name: 'options',
        description: 'Select options. Will get better perf than jsx definition',
        table: {
            type: {
                summary: '{ label, value }[]'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    placeholder: {
        name: 'placeholder',
        description: 'The placeholder of input',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'AutoComplete',
            defaultValue: {summary: 'Not Found'}
        }
    },
    status: {
        name: 'status',
        description: 'Set validation status',
        options: ['error', 'warning', '-'],
        control: {type: 'text'},
        table: {
            type: {
                summary: 'error | warning'
            },
            category: 'AutoComplete',
            defaultValue: {summary: 'Not Found'}
        }
    },
    value: {
        name: 'value',
        description: 'Selected option',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    onBlur: {
        name: 'onBlur',
        description: 'Called when leaving the component',
        table: {
            type: {
                summary: 'function()'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Called when selecting an option or changing an input value',
        table: {
            type: {
                summary: 'function(value)'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    onDropdownVisibleChange: {
        name: 'onDropdownVisibleChange',
        description: 'Call when dropdown open',
        table: {
            type: {
                summary: 'function(open)'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    onFocus: {
        name: 'onFocus',
        description: 'Called when entering the component',
        table: {
            type: {
                summary: 'function()'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    onSearch: {
        name: 'onSearch',
        description: 'Called when searching items',
        table: {
            type: {
                summary: 'function(value)'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    onSelect: {
        name: 'onSelect',
        description: "Called when a option is selected. param is option's value and option instance",
        table: {
            type: {
                summary: 'function(value, option)'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
        }
    },
    onSelonClearect: {
        name: 'onClear',
        description: 'Called when clear',
        table: {
            type: {
                summary: 'function()'
            },
            category: 'AutoComplete',
            defaultValue: {summary: '-'}
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
            category: 'AutoComplete',
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
            category: 'AutoComplete'
        }
    }
};
