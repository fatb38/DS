export const argTypes = {
    borderColor: {
        name: 'borderColor',
        description: 'Color of the section border',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'KitColorProp'
            },
            category: 'Section'
        },
        defaultValue: 'primary'
    },
    className: {
        name: 'className',
        description: 'override basic className props',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Section'
        }
    },
    style: {
        name: 'style',
        description: 'override basic style props',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Section'
        }
    }
};
