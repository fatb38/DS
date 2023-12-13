const TagArgTypes = {
    label: {
        name: 'label',
        control: {
            type: 'text'
        },
        description: 'label of the tag',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'Label'},
            category: 'Tag',
            subcategory: 'For testing only'
        },
        defaultValue: 'Label'
    },
    color: {
        name: 'color',
        control: {type: 'color'},
        description: 'Set a color',
        table: {
            type: {
                summary:
                    '`hexadecimal` | `rgb` | `hsl` | `mediumGrey` | `yellow` | `orange` | `pink` | `red` | `blue` | `green`'
            },
            category: 'Tag'
        }
    },
    secondaryColorInvert: {
        name: 'secondaryColorInvert',
        description: 'Allow colors invertion only if color is set with a KitColorKeys',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tag'
        }
    },
    onClose: {
        name: 'onClose',
        description: 'Callback executed when tag is closed',
        table: {
            type: {
                summary: "'(e) => void'"
            },
            category: 'Tag'
        }
    }
};

export const argTypes = {
    ...TagArgTypes
};
