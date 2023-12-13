export const argTypes = {
    title: {
        name: 'title',
        control: {type: 'text'},
        description: 'Title to display',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        }
    },
    search: {
        name: 'search',
        control: {type: 'boolean'},
        description: 'If set, show a search input. Accepts [Input] porps',
        table: {
            type: {
                summary: 'IKitInput'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        }
    },
    breadcrumb: {
        name: 'breadcrumb',
        control: {type: 'boolean'},
        description: 'Display a breadcrumb. [Breadcrumb]',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        },
        defaultValue: '-'
    },
    actions: {
        name: 'actions',
        control: {type: 'boolean'},
        description: 'Display Actions buttons and / of Selects. (KitButton|KitSelect)[]',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Header'
        },
        defaultValue: '-'
    },
    onPlusClick: {
        name: 'onPlusClick',
        description: "When set, show a '+' button on the right, and set the handler to handle `click` event",
        control: {type: 'boolean'},
        table: {
            type: {
                summary: '(event: MouseEvent) => void'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        },
        defaultValue: '-'
    }
};
