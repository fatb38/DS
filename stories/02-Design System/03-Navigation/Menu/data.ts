export const argTypes = {
    showCloseButton: {
        name: 'showCloseButton',
        description: 'Show Menu close button',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showSegmentedButton: {
        name: 'showSegmentedButton',
        description: 'Show Menu segmented button',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showPrimaryInput: {
        name: 'showPrimaryInput',
        description: 'Show Menu primary input',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showSecondaryInput: {
        name: 'showSecondaryInput',
        description: 'Show Menu secondary input',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showItemMenuIcon: {
        name: 'showItemMenuIcon',
        description: 'Show ItemMenu icon',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showItemMenuActions: {
        name: 'showItemMenuActions',
        description: 'Show ItemMenu actions',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showItemMenuCheckbox: {
        name: 'showItemMenuCheckbox',
        description: 'Show ItemMenu checkbox',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    showItemMenuRafter: {
        name: 'showItemMenuRafter',
        description: 'Show ItemMenu rafter',
        control: {type: 'boolean'},
        table: {
            category: 'For testing only'
        }
    },
    title: {
        name: 'title',
        description: 'Title to display on one line',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Menu'
        }
    },
    onCloseClick: {
        name: 'onCloseClick',
        description: 'Display a close button and set the handler to handle click event',
        control: {type: 'none'},
        table: {
            type: {
                summary: 'Function'
            },
            category: 'Menu'
        }
    },
    segmentedButton: {
        name: 'segmentedButton',
        description: 'Display a segmented button',
        control: {type: 'none'},
        table: {
            type: {
                summary: 'ReactElement<IKitButton>'
            },
            category: 'Menu'
        }
    },
    primaryInput: {
        name: 'primaryInput',
        description: 'Display an input filed',
        control: {type: 'none'},
        table: {
            type: {
                summary: 'ReactElement<IKitInput>'
            },
            category: 'Menu'
        }
    },
    secondaryInput: {
        name: 'secondaryInput',
        description: 'Display an second input field',
        control: {type: 'none'},
        table: {
            type: {
                summary: 'ReactElement<IKitInput>'
            },
            category: 'Menu'
        }
    },
    disableSecureClick: {
        name: 'disableSecureClick',
        control: {type: 'boolean'},
        description: 'Disable double click security of the item menu',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemMenu',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    itemMenuTitle: {
        name: 'title',
        description: 'Title to display on one line',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuIcon: {
        name: 'icon',
        description: 'Icon to display',
        table: {
            type: {
                summary: 'IconDefinition'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuValue: {
        name: 'value',
        description: 'Value to display at the end of the item',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuActions: {
        name: 'actions',
        description: 'Actions list to display at the end of the item',
        table: {
            type: {
                summary: 'IKitItemMenuActions'
            },
            category: 'ItemMenu'
        }
    },
    isSelected: {
        name: 'isSelected',
        description: 'Selected state of the item menu',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuOnSelectChange: {
        name: 'onSelectChange',
        description: 'The callback function that is triggered when the state changes',
        table: {
            type: {
                summary: '(e: CheckboxChangeEvent) => void'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuOnRafterClick: {
        name: 'onRafterClick',
        description: 'Set the handler to handle `click` event on the rafter',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'ItemMenu'
        }
    },
    itemMenuOnClick: {
        name: 'onClick',
        description: 'Set the handler to handle `click` event on the itemMenu',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'ItemMenu'
        }
    }
};
