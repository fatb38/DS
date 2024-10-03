const type = ['success', 'info', 'warning', 'error'];

export const argTypes = {
    type: {
        name: 'type',
        description: 'Type of Alert styles, options: `success`, `info`, `warning`, `error`',
        options: type,
        control: {
            type: 'select',
            defaultValue: 'info'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Alert'
        }
    },
    message: {
        name: 'message',
        description: 'Content of Alert',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Alert'
        }
    },
    description: {
        name: 'description',
        description: 'Additional content of Alert',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Alert'
        }
    },
    details: {
        name: 'details',
        description: 'Add a collapsible details section',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Alert'
        }
    },
    customContent: {
        name: 'customContent',
        description: 'Add custom Content at the bottom of the alert',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Alert'
        }
    },
    closable: {
        name: 'closable',
        description: 'Whether Alert can be closed',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Alert'
        }
    },
    showIcon: {
        name: 'showIcon',
        description: 'Whether to show icon',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: 'false'
            },
            category: 'Alert'
        }
    },
    onClose: {
        name: 'onClose',
        description: 'Callback when Alert is closed',
        table: {
            type: {
                summary: '(e: MouseEvent) => void'
            },
            category: 'Alert'
        }
    }
};
