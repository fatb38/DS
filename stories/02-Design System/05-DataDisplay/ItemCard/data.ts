export const argTypes = {
    className: {
        name: 'className',
        description: 'Override basic className props',
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemCard'
        }
    },
    style: {
        name: 'style',
        description: 'Override basic style props',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'ItemCard'
        }
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description:
            "Disabled the ItemCard if `true`. When disabled, ItemCard cannot be focused and actions don't work",
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    display: {
        name: 'display',
        control: {type: 'select', options: ['card', 'list']},
        description: 'Display style of the card',
        table: {
            type: {
                summary: 'card | list'
            },
            category: 'ItemCard'
        }
    },
    imageAlt: {
        name: 'imageAlt',
        description: 'Alt text of the image',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemCard'
        }
    },
    imageSrc: {
        name: 'imageSrc',
        description: 'Source of the image',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemCard'
        }
    },
    icon: {
        name: 'icon',
        description: 'Icon display as image',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'ItemCard'
        }
    },
    title: {
        name: 'title',
        required: true,
        control: {type: 'text'},
        description: 'Title of the ItemCard',
        table: {
            type: {
                summary: 'text'
            },
            category: 'ItemCard'
        }
    },
    description: {
        name: 'description',
        control: {type: 'text'},
        description: 'Description of the ItemCard',
        table: {
            type: {
                summary: 'text'
            },
            category: 'ItemCard'
        }
    },
    tagGroup: {
        name: 'tagGroup',
        description: 'Tag group config to display list of tags',
        table: {
            type: {
                summary: 'IKitTagGroup'
            },
            category: 'ItemCard'
        }
    },
    breadcrumbItems: {
        name: 'breadcrumbItems',
        description: 'Breadcrumb items to display the path of the ItemCard',
        table: {
            type: {
                summary: 'IKitBreadcrumbItem[]'
            },
            category: 'ItemCard'
        }
    },
    draggableHandler: {
        name: 'draggableHandler',
        description: 'Draggable handler to drag the ItemCard',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'ItemCard'
        }
    },
    selected: {
        name: 'selected',
        control: {type: 'boolean'},
        description: 'If `true` the ItemCard is outlined',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    onSelect: {
        name: 'onSelect',
        description: 'Checkbox onChange function',
        table: {
            type: {
                summary: '(e: CheckboxChangeEvent) => void'
            },
            category: 'ItemCard'
        }
    },
    activateLabel: {
        name: 'activateLabel',
        control: {type: 'text'},
        description: 'Label of the switch',
        table: {
            type: {
                summary: 'text'
            },
            category: 'ItemCard'
        }
    },
    activated: {
        name: 'activated',
        control: {type: 'boolean'},
        description: 'If `true` the switch is checked',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    onActivate: {
        name: 'onActivate',
        description: 'Switch onChange function',
        table: {
            type: {
                summary: 'SwitchChangeEventHandler'
            },
            category: 'ItemCard'
        }
    },
    extra: {
        name: 'extra',
        description: 'Extra content of the ItemCard',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'ItemCard'
        }
    },
    actions: {
        name: 'actions',
        description: 'Actions to display on the ItemCard',
        table: {
            type: {
                summary: '[IKitActionButton | undefined, IKitActionButton | undefined, IKitActionButton | undefined]'
            },
            category: 'ItemCard'
        }
    }
};
