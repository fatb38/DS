export const argTypes = {
    active: {
        description: 'Active the shimmer effect on the skeleton indicate that something is loading',
        table: {
            category: 'Common'
        }
    },
    className: {
        description: 'override basic className props',
        table: {
            category: 'Common'
        }
    },
    style: {
        description: 'override basic style props',
        table: {
            category: 'Common'
        }
    },
    shape: {
        description: 'define the shape of the avatar skeleton',
        options: ['circle', 'square'],
        control: {
            type: 'select'
        },
        table: {
            category: 'Avatar',
            type: {
                summary: 'circle | square'
            },
            defaultValue: {
                summary: 'circle'
            }
        }
    },
    size: {
        description: 'define the size of the avatar skeleton',
        options: ['small', 'medium', 'large'],
        control: {
            type: 'select'
        },
        table: {
            category: 'Avatar',
            type: {
                summary: 'small | medium | large | number'
            },
            defaultValue: {
                summary: 'medium'
            }
        }
    },
    display: {
        description: 'define the display of the item card skeleton',
        options: ['card', 'list'],
        control: {
            type: 'select'
        },
        table: {
            category: 'ItemCard',
            type: {
                summary: 'card | list'
            },
            defaultValue: {
                summary: 'card'
            }
        }
    }
};
