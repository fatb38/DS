export const argTypes = {
    actions: {
        name: 'actions',
        description: 'The action list, show on the dropdown in hover of the button more.',
        table: {
            type: {
                summary: "IKitDropdownMenu['items']"
            },
            category: 'Card'
        }
    },
    activated: {
        name: 'activated',
        control: {type: 'boolean'},
        description: 'to determine with ux',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    brandingBar: {
        name: 'brandingBar',
        control: {type: 'boolean'},
        description: 'Display the branding bar that split image and content.',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    description: {
        name: 'description',
        control: {type: 'text'},
        description: 'Description of the card.',
        table: {
            type: {
                summary: 'text'
            },
            category: 'Card'
        }
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: "Disabled the card if `true`. When disabled, card cannot be focus and actions don't work",
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    onSelect: {
        name: 'onSelect',
        description: 'Checkbox onChange function.',
        table: {
            type: {
                summary: '() => void'
            },
            category: 'Card'
        }
    },
    onActivate: {
        name: 'onActivate',
        description: 'Switch onChange function.',
        table: {
            type: {
                summary: '() => void'
            },
            category: 'Card'
        }
    },
    extra: {
        name: 'extra',
        control: {type: 'text'},
        description: 'Extra description of the card.',
        table: {
            type: {
                summary: 'text'
            },
            category: 'Card'
        }
    },
    selected: {
        name: 'selected',
        control: {type: 'boolean'},
        description: 'If `true`the card is outlined.',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    title: {
        name: 'title',
        required: true,
        control: {type: 'text'},
        description: 'Title of the card.',
        table: {
            type: {
                summary: 'text'
            },
            category: 'Card'
        }
    },
    tags: {
        name: 'tags',
        description: 'Tags config to display list of tags.',
        table: {
            type: {
                summary: 'IKitTagConfig[]'
            },
            category: 'Card'
        }
    },
    previewSrc: {
        name: 'previewSrc',
        description: 'Src for the preview content.',
        table: {
            type: {
                summary: 'text'
            },
            category: 'Card'
        }
    }
};
