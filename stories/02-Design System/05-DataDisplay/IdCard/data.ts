const TemplateArgTypes = {
    title: {
        name: 'title',
        description: 'Customize the title',
        table: {
            category: 'IdCard'
        }
    },
    description: {
        name: 'description',
        description: 'Customize the description',
        table: {
            category: 'IdCard'
        }
    },
    avatarProps: {
        name: 'avatarProps',
        description: 'Props to display an Avatar',
        table: {
            category: 'IdCard'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Disabled IdCard',
        table: {
            category: 'IdCard'
        }
    },
    size: {
        name: 'size',
        description: 'Size of the IdCard',
        table: {
            category: 'IdCard'
        }
    }
};

export const argTypes = {
    ...TemplateArgTypes
};
