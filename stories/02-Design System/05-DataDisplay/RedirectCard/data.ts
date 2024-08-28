export const argTypes = {
    className: {
        name: 'className',
        description: 'Override basic className props',
        table: {
            type: {
                summary: 'string'
            },
            category: 'RedirectCard'
        }
    },
    style: {
        name: 'style',
        description: 'Override basic style props',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'RedirectCard'
        }
    },
    title: {
        name: 'title',
        description: 'Title of the redirect card',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'RedirectCard'
        }
    },
    description: {
        name: 'description',
        description: 'Description of the redirect card',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'RedirectCard'
        }
    },
    icon: {
        name: 'icon',
        description: 'Icon of the redirect card',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'RedirectCard'
        }
    },
    imageAlt: {
        name: 'coverAlt',
        description: 'Alt text of the image',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'RedirectCard'
        }
    },
    imageSrc: {
        name: 'coverSrc',
        description: 'Source of the image',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'RedirectCard'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Disable the redirect card',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'RedirectCard'
        }
    },
    onClick: {
        name: 'onClick',
        description: 'Callback when the redirect card is clicked',
        table: {
            type: {
                summary: '(e: MouseEvent<HTMLElement>) => void'
            },
            category: 'RedirectCard'
        }
    },
    actions: {
        name: 'actions',
        description: 'Actions to display on the RedirectCard (max 3)',
        table: {
            type: {
                summary: '[IKitActionButton | undefined, IKitActionButton | undefined, IKitActionButton | undefined]'
            },
            category: 'RedirectCard'
        }
    }
};
