export const argTypes = {
    vertical: {
        name: 'vertical',
        description: 'Change ItemCard layout to vertical',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Is ItemCard disabled',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    picture: {
        name: 'picture',
        description: 'Set the picure area content. Can e one of `Image` `Avatar` or `Icon`',
        options: ['-', 'Image', 'Icon', 'Avatar'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactElement<IKitAvatar> | ReactElement<IKitIcon> | ReactElement<IKitImage>'
            },
            category: 'ItemCard'
        }
    },
    fullWidthAvatar: {
        name: 'fullWidthAvatar',
        description: 'Sets wether the avatar should fill the entire picture area',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    colors: {
        name: 'colors',
        description: 'set list of colors to display. cardColor[]',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    title: {
        name: 'title',
        description: 'Sets the ItemCard title',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemCard'
        }
    },
    description: {
        name: 'description',
        description: 'Sets the ItemCard description',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemCard'
        }
    },
    extrainfo: {
        name: 'extrainfo',
        description: 'Sets the ItemCard extrainfo',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemCard'
        }
    },
    tags: {
        name: 'tags',
        description: 'set list of tags to display. string[]',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    actions: {
        name: 'actions',
        description: 'set list of actions to add. array of `Button`',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    onSelectChange: {
        name: 'onSelectChange',
        description:
            'The callback function that is triggered when the state change. When set makes ItemCard selectable',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: '(checkedValue: CheckboxValueType[]) => void'
            },
            defaultValue: {summary: '-'},
            category: 'CheCardckbox'
        },
        defaultValue: () => {}
    },
    onEdit: {
        name: 'onEdit',
        description:
            'The callback function that is triggered when click on the Edit buttone. When set makes the card Editable',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: '() => void'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        },
        defaultValue: () => {}
    }
};
