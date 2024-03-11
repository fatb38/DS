const TemplateArgTypes = {
    title: {
        name: 'title',
        description: 'Customize the title',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'IdCard'
        }
    },
    description: {
        name: 'description',
        description: 'Customize the description',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'IdCard'
        }
    },
    avatar: {
        name: 'avatar',
        description: 'Display an avatar',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'IdCard'
        }
    }
};

export const argTypes = {
    ...TemplateArgTypes
};
