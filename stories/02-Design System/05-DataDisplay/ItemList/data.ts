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
    }
};
