export const argTypes = {
    idCardProps: {
        name: 'idCardProps',
        description: '',
        table: {
            category: 'ItemList',
            type: {
                summary: 'IKitIdCard'
            }
        }
    },
    idCardSubstitute: {
        name: 'idCardSubstitute',
        description: '',
        table: {
            category: 'ItemList',
            type: {
                summary: 'ReactNode'
            }
        }
    },
    draggableHandler: {
        name: 'draggableHandler',
        description: '',
        table: {
            category: 'ItemList',
            type: {
                summary: 'ReactNode'
            }
        }
    },
    checkboxAriaLabel: {
        name: 'checkboxAriaLabel',
        description: '',
        control: {
            type: 'text'
        },
        table: {
            category: 'ItemList',
            type: {
                summary: 'String'
            }
        }
    },
    onSelect: {
        name: 'onSelect',
        description: '',
        table: {
            category: 'ItemList',
            type: {
                summary: '(isChecked: boolean) => void'
            }
        }
    },
    onClick: {
        name: 'onClick',
        description: '',
        table: {
            category: 'ItemList',
            type: {
                summary: '() => void'
            }
        }
    },
    actions: {
        name: 'actions',
        description: '',
        table: {
            category: 'ItemList',
            type: {
                summary: 'IKitActionButton[]'
            }
        }
    },
    content: {
        name: 'content',
        description: '',
        table: {
            category: 'ItemList',
            type: {
                summary: 'ReactNode'
            }
        }
    },
    disabled: {
        name: 'disabled',
        description: 'disable ItemList component except **draggableHandler** and **content**',
        table: {
            category: 'ItemList'
        }
    }
};
