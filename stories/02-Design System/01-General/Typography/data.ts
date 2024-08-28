const components = ['Title', 'Text', 'Paragraph', 'Link'];

export const argTypes = {
    component: {
        name: 'component',
        description: 'Choose the component to play with (not a prop)',
        options: components,
        control: {
            type: 'select',
            defaultValue: 'Paragraph'
        },
        table: {
            type: {
                summary: '-'
            }
        },
        defaultValue: 'Paragraph'
    },
    content: {
        name: 'content',
        description: 'component content',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: '-'
            }
        },
        defaultValue: 'This is the content'
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Disabled content',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Common'
        },
        defaultValue: false
    },
    color: {
        name: 'color',
        control: {type: 'text'},
        description: 'Set a color',
        table: {
            type: {
                summary:
                    '`hexadecimal` | `rgb` | `hsl` | `yellow` | `pink` | `warning` | `error` | `success` | `primary` | `black` | `white` | `grey`'
            },
            defaultValue: {summary: false},
            category: 'Common'
        },
        defaultValue: null
    },
    ellipsis: {
        name: 'ellipsis',
        description:
            'Display ellipsis when text overflows, can configure rows and expandable by using object | boolean',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'object | boolean'
            },
            defaultValue: false,
            category: 'Common'
        },
        defaultValue: false
    },
    level: {
        name: 'level',
        description: 'Set content importance. Match with `h1`, `h2`, `h3`, `h4`',
        options: ['h1', 'h2', 'h3', 'h4'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'TitleLevelKeys'
            },
            defaultValue: {summary: 'h1'},
            category: 'Typography.Title'
        }
    },
    copyable: {
        name: 'copyable',
        description: 'Whether to be copyable, customize it via setting an  boolean',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: false,
            category: 'Common'
        },
        defaultValue: false
    },
    onClick: {
        name: 'onClick',
        description: 'Set the handler to handle `click` event',
        table: {
            type: {
                summary: '(event: MouseEvent) => void'
            },
            defaultValue: {summary: '-'},
            category: 'Common'
        },
        defaultValue: () => {}
    },
    weight: {
        name: 'weight',
        description: 'Font weight',
        options: ['', 'bold', 'medium', 'regular'],
        control: {
            type: 'select',
            required: false
        },
        table: {
            type: {
                summary: 'kitTextWeight'
            },
            defaultValue: {summary: 'medium'},
            category: 'Typography.Text, Typography.Paragraph, Typography.Link'
        },
        defaultValue: 'medium'
    },
    size: {
        name: 'size',
        description: 'Content Size',
        options: ['', 'fontSize1', 'fontSize2', 'fontSize3', 'fontSize4', 'fontSize5', 'fontSize6', 'fontSize7'],
        control: {
            type: 'select',
            required: false
        },
        table: {
            type: {
                summary: 'kitTextSize'
            },
            defaultValue: {summary: 'fontSize6'},
            category: 'Typography.Text, Typography.Paragraph, Typography.Link'
        },
        defaultValue: 'medium'
    }
};
