export const argTypes = {
    color: {
        name: 'color',
        control: {type: 'color'},
        description: 'Custom color for icon',
        table: {
            type: {
                summary:
                    '`hexadecimal` | `rgb` | `hsl` | `yellow` | `pink`| `warning` | `error` | `success` | `primary`'
            }
        }
    },
    disableSecureClick: {
        name: 'disableSecureClick',
        control: {type: 'boolean'},
        description: 'Disable double click security of the icon',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    on: {
        name: 'on',
        description: "Wether to set icon in 'on' state",
        control: {
            type: 'boolean',
            defaultValue: false
        },
        table: {
            type: {
                summary: 'boolean'
            }
        },
        defaultValue: '-'
    },
    onClick: {
        name: 'onClick',
        description: 'Set the handler to handle click event	',
        table: {
            type: {
                summary: '(event: MouseEvent) => void'
            }
        },
        defaultValue: '-'
    },
    icon: {
        name: 'icon',
        description: 'Icon element of type ReactNode',
        options: ['faFile', 'faUser', 'faCar'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'}
        }
    }
};
