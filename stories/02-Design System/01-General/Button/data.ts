export const argTypes = {
    block: {
        name: 'block',
        control: {type: 'boolean'},
        description: 'Option to fit button width to its parent width',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    danger: {
        name: 'danger',
        control: {type: 'boolean'},
        description: 'Set the danger status of button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Disabled state of button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    disableSecureClick: {
        name: 'disableSecureClick',
        control: {type: 'boolean'},
        description: 'Disable double click security of the button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    icon: {
        name: 'icon',
        options: ['-', 'faMagnifyingGlass', 'faDownload', 'faCircleCheck'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        },
        description: 'Set the icon component of button'
    },
    iconSize: {
        name: 'iconSize',
        options: ['xs', 's', 'm', 'l', 'xl'],
        control: {type: 'select'},
        description: 'Set a size to the icon button',
        table: {
            type: {
                summary: 'xs | s | m | l | xl'
            },
            defaultValue: {summary: 'm'},
            category: 'Button'
        },
        defaultValue: false
    },
    loading: {
        name: 'loading',
        control: {type: 'boolean'},
        description: 'Set the loading status of button',
        table: {
            type: {
                summary: 'boolean | { delay: number }'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    type: {
        name: 'type',
        options: ['primary', 'secondary', 'tertiary', 'text', 'segmented'],
        control: {type: 'select'},
        description: 'Can be set to `primary` | `secondary` | `tertiary` | `text` | `segmented`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'default'},
            category: 'Button'
        },
        defaultValue: 'default'
    },
    htmlType: {
        name: 'htmlType',
        options: ['submit', 'button', 'reset'],
        control: {type: 'select'},
        description: 'Can be set to `submit` | `button` | `reset`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'default'},
            category: 'Button'
        },
        defaultValue: 'default'
    },
    form: {
        name: 'form',
        description: 'Link the button to a form by its id. Usefull when button is outside the form.',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: null},
            category: 'Button'
        },
        defaultValue: 'default'
    },
    active: {
        name: 'active',
        control: {type: 'boolean'},
        description: '[Only for segmented type] - Option to display segmented button with an active state',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    checked: {
        name: 'checked',
        control: {type: 'boolean'},
        description: '[Only for segmented type] - Option to display segmented button with a check icon',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    color: {
        name: 'color',
        options: ['mediumGrey', 'yellow', 'orange', 'pink', 'red', 'blue', 'green', 'grey', 'black'],
        control: {type: 'select'},
        description: '[Only for segmented type] - Option to display segmented button with an other color',
        table: {
            type: {
                summary: 'KitColorKeys'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    onClick: {
        name: 'onClick',
        description: 'Set the handler to handle `click` event',
        table: {
            type: {
                summary: '(event: MouseEvent) => void'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        },
        defaultValue: () => {}
    },
    className: {
        table: {
            disable: true
        }
    },
    dangerModal: {
        table: {
            disable: true
        }
    },
    styles: {
        table: {
            disable: true
        }
    }
};
