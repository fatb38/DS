export const argTypes = {
    btn: {
        name: 'btn',
        description: 'Customized close button',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Notification'
        }
    },
    className: {
        name: 'className',
        description: 'Customized CSS class',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    closeIcon: {
        name: 'closeIcon',
        options: ['-', 'faCircleXmark', 'faXmark', 'faRectangleXmark'],
        control: {
            type: 'select'
        },
        description: 'Custom close icon',
        table: {
            type: {
                summary: 'boolean | ReactNode'
            },
            defaultValue: {
                summary: 'faXmark'
            },
            category: 'Notification'
        }
    },
    description: {
        name: 'description',
        description: 'The content of notification box **(required)**',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    duration: {
        name: 'duration',
        description:
            'Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 4.5
            },
            category: 'Notification'
        }
    },
    icon: {
        name: 'icon',
        options: ['-', 'faMagnifyingGlass', 'faDownload', 'faCircleCheck'],
        control: {
            type: 'select'
        },
        description: 'Customized icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Notification'
        }
    },
    key: {
        name: 'key',
        description: 'The unique identifier of the Notification',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    message: {
        name: 'message',
        description: 'The title of notification box **(required)**',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    placement: {
        name: 'placement',
        description: 'Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight`',
        options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
        control: {
            type: 'select',
            defaultValue: 'topRight'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Notification'
        }
    },
    style: {
        name: 'style',
        description: 'Customized inline style',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Notification'
        }
    },
    role: {
        name: 'role',
        description:
            'The semantics of notification content recognized by screen readers. The default value is alert. When set as the default value, the screen reader will promptly interrupt any ongoing content reading and prioritize the notification content for immediate attention.',
        table: {
            type: {
                summary: 'alert | status'
            },
            defaultValue: {
                summary: 'alert'
            },
            category: 'Notification'
        }
    },
    onClick: {
        name: 'onClick',
        description: 'Specify a function that will be called when the notification is clicked',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Notification'
        }
    },
    onClose: {
        name: 'onClose',
        description: 'Trigger when notification closed',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Notification'
        }
    },
    props: {
        name: 'props',
        description:
            'An object that can contain data-*, aria-*, or role props, to be put on the notification div. This currently only allows data-testid instead of data-* in TypeScript',
        table: {
            type: {
                summary: 'Object'
            },
            category: 'Notification'
        }
    }
};
