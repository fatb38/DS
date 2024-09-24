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
    },
    httpErrorCode: {
        name: 'httpErrorCode',
        description: 'Choose the error code you need',
        control: {type: 'select'},
        options: ['401', '403', '404', '500', '502', '503', '-'],
        table: {
            type: {
                summary: 'string'
            },
            category: 'Error'
        }
    }
};

export const argTypes = {
    ...TemplateArgTypes
};
