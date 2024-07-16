const type = ['animated', 'linear'];

export const argTypes = {
    type: {
        name: 'type',
        description: 'Type of loader, options: `animated`, `linear`',
        options: type,
        control: {
            type: 'select',
            defaultValue: 'animated'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Loader'
        }
    },
    infinite: {
        name: 'infinite',
        description: 'If true, set the loader in a undeterminated state. Has no effect on `animated` type',
        control: {
            type: 'boolean',
            defaultValue: false
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Loader'
        }
    },
    value: {
        name: 'value',
        description:
            'Sets the value of the loader (between 0 and 100). Has no effect if type is `animated`, or ìnfinite` is true',
        control: {
            type: 'number',
            defaultValue: 0
        },
        table: {
            type: {
                summary: 'number'
            },
            category: 'Loader'
        }
    },
    className: {
        table: {
            disable: true
        }
    },
    style: {
        table: {
            disable: true
        }
    }
};
