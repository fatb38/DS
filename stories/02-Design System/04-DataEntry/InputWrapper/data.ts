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
    className: {
        name: 'className',
        description: 'Component class name',
        table: {
            type: {
                summary: 'string'
            }
        }
    }
};
