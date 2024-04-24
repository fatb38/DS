const TemplateArgTypes = {
    title: {
        name: 'title',
        description: 'Customize the title',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Error'
        }
    },
    description: {
        name: 'description',
        description: 'Customize the description',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Error'
        }
    }
};

export const argTypes = {
    ...TemplateArgTypes
};
