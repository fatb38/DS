export const argTypes = {
    compact: {
        name: 'compact',
        control: {type: 'boolean'},
        description: 'test Compact mode',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: 'false'},
            category: 'Space',
            subcategory: 'for testing only'
        },
        defaultValue: false
    },
    align: {
        name: 'align',
        control: {type: 'select'},
        options: ['start', 'end', 'center', 'baseline'],
        description: 'Align items. one of `start` | `end` | `center` | `baseline',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Space'
        },
        defaultValue: '-'
    },
    direction: {
        name: 'direction',
        control: {type: 'select'},
        options: ['vertical', 'horizontal', 'center'],
        description: 'The space direction. One of `vertical` | `horizontal` | `center`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'horizontal'},
            category: 'Space'
        },
        defaultValue: 'horizontal'
    },
    size: {
        name: 'size',
        control: {type: 'select'},
        options: ['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'huge', 'veryHuge'],
        description: ' The space size. `KitSpaceSize` | [`KitSpaceSize`, `KitSpaceSize`]',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'xs'},
            category: 'Space'
        },
        defaultValue: 'xs'
    },
    split: {
        name: 'split',
        description: ' Set split. `ReactNode`',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'Space'
        },
        defaultValue: '-'
    },
    wrap: {
        name: 'wrap',
        control: {type: 'boolean'},
        description: 'Auto wrap line, when `horizontal` effective',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: 'false'},
            category: 'Space'
        },
        defaultValue: false
    }
};
