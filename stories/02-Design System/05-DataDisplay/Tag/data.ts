const TagArgTypes = {
    label: {
        name: 'label',
        control: {
            type: 'text'
        },
        description: 'label of the Tag',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'Label'},
            category: 'Tag',
            subcategory: 'For testing only'
        },
        defaultValue: 'Label'
    },
    showAvatar: {
        name: 'showAvatar',
        control: {
            type: 'boolean'
        },
        description: 'weather to show avatar or not',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tag',
            subcategory: 'For testing only'
        },
        defaultValue: false
    },
    type: {
        name: 'type',
        options: ['primary', 'secondary', 'neutral', 'error', 'success'],
        control: {type: 'select'},
        description: 'Can be set to `primary` | `secondary` | `neutral` | `error` | `success`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'neutral'},
            category: 'Tag'
        },
        defaultValue: 'default'
    },
    disabled: {
        name: 'disabled',
        control: {
            type: 'boolean'
        },
        description: 'Disabled state of tag',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tag'
        },
        defaultValue: false
    },
    idCardProps: {
        name: 'idCardProps',
        description: 'Props for the id card',
        table: {
            type: {
                summary: 'IKitIdCard'
            },
            category: 'Tag'
        }
    },
    onClick: {
        name: 'onClick',
        description: 'Callback executed when tag is clicked',
        table: {
            type: {
                summary: 'React.MouseEventHandler<HTMLSpanElement>'
            },
            category: 'Tag'
        }
    },
    onClose: {
        name: 'onClose',
        description: 'Callback executed when tag is closed',
        table: {
            type: {
                summary: '((e: React.MouseEvent<HTMLElement>) => void)'
            },
            category: 'Tag'
        }
    }
};

export const argTypes = {
    ...TagArgTypes
};
