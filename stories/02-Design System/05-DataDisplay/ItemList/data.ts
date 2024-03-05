export const argTypes = {
    displayCheckbox: {
        name: 'Display checkbox',
        description: '',
        control: {
            type: 'boolean'
        },
        table: {
            category: 'For testing only'
        }
    },
    displayRafter: {
        name: 'Display rafter',
        description: '',
        control: {
            type: 'boolean'
        },
        table: {
            category: 'For testing only'
        }
    },
    disableSecureClick: {
        name: 'disableSecureClick',
        control: {type: 'boolean'},
        description: 'Disable double click security of the item list',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    itemListClickable: {
        name: 'ItemList clickable',
        description: '',
        control: {
            type: 'boolean'
        },
        table: {
            category: 'For testing only'
        }
    },
    title: {
        name: 'title',
        description: 'Title content on one line',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemList'
        }
    },
    description: {
        name: 'description',
        description: 'Description content on two lines with ellipsis',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemList'
        }
    },
    picture: {
        name: 'picture',
        description: 'Image or Icon',
        options: ['-', 'Image', 'Icon', 'Avatar'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactElement<IKitAvatar> | ReactElement<IKitIcon> | ReactElement<IKitImage>'
            },
            category: 'ItemList'
        }
    },
    onSelect: {
        name: 'onSelect',
        description: 'The callback function that is triggered when the state changes',
        table: {
            type: {
                summary: '(e: CheckboxChangeEvent) => void'
            },
            category: 'ItemList'
        }
    },
    tagNumber: {
        name: 'tagNumber',
        description: 'Number to display in a tag element',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            category: 'ItemList'
        }
    },
    onRafterClick: {
        name: 'onRafterClick',
        description: 'Set the handler to handle `click` event on the rafter',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'ItemList'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Disabled state of ItemList',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemList'
        }
    },
    selected: {
        name: 'selected',
        control: {type: 'boolean'},
        description: 'If `true` the ItemList is outlined.',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    onClick: {
        name: 'onClick',
        description: 'Set the handler to handle `click` event on the whole ItemList',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'ItemList'
        }
    },
    draggable: {
        name: 'draggable',
        description:
            'A boolean that indicates the item is draggable. A dedicated icon appears, the drag and drop feature must be implemented in your application.',
        control: 'boolean',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: 'boolean'
            },
            category: 'ItemList'
        }
    }
};
