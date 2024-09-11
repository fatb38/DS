export const argTypes = {
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'InputWrapper'
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
            category: 'InputWrapper'
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
            category: 'InputWrapper',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        description: 'Whether the content is disabled',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'InputWrapper',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    bordered: {
        name: 'bordered',
        description: 'Whether the content is bordered',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'InputWrapper',

            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    hoverable: {
        name: 'hoverable',
        description: 'Whether the input border color changes on hover. Only works if `bordered` is set to true',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'InputWrapper',

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
            category: 'InputWrapper'
        }
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
            category: 'InputWrapper',

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
            category: 'InputWrapper',

            defaultValue: {summary: null}
        },
        defaultValue: false
    },
    className: {
        name: 'className',
        description: 'Component class name',
        table: {
            type: {
                summary: 'string'
            },
            category: 'InputWrapper'
        }
    },
    onInfoClick: {
        name: 'onInfoClick',
        description: 'If set, show info icon, and set the handler to handle `click` event on it',
        options: ['-', 'log to console'],
        control: {type: 'select'},
        table: {
            type: {
                summary: '(e: MouseEvent<HTMLElement>) => void;'
            },
            category: 'InputWrapper'
        }
    },
    onFocus: {
        name: 'onFocus',
        description: 'If set, it will trigger the given function when the content is focused',
        table: {
            type: {
                summary: '(e: FocusEvent<HTMLDivElement>) => void'
            },
            category: 'InputWrapper'
        }
    },
    onBlur: {
        name: 'onBlur',
        description: 'If set, it will trigger the given function when focus is removed',
        table: {
            type: {
                summary: '(e: FocusEvent<HTMLDivElement>) => void'
            },
            category: 'InputWrapper'
        }
    }
};
