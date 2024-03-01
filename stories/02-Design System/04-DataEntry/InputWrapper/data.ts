export const argTypes = {
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
    required: {
        name: 'required',
        description: 'Whether the input is mandatory',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        description: 'Whether the input is disabled',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    bordered: {
        name: 'bordered',
        description: 'Whether the input is disabled',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
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
            }
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
            }
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
            defaultValue: {summary: '-'}
        },
        defaultValue: () => {}
    }
};
