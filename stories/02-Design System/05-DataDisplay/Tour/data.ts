const placement = [
    'top',
    'left',
    'right',
    'bottom',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
];

export const argTypes = {
    arrow: {
        name: 'arrow',
        description:
            'Whether to show the arrow, including the configuration whether to point to the center of the element',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | { pointAtCenter: boolean}'
            },
            category: 'Tour'
        }
    },
    closeIcon: {
        name: 'closeIcon',
        description: 'Customize close icon',
        options: ['-', 'faCircleXmark', 'faXmark', 'faRectangleXmark'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'React.ReactNode'
            },
            category: 'Tour'
        }
    },
    placement: {
        name: 'placement',
        description: 'Position of the guide card relative to the target element',
        options: placement,
        control: {
            type: 'select',
            defaultValue: '-'
        },
        table: {
            type: {
                summary:
                    'center | left | leftTop | leftBottom | right | rightTop | rightBottom | top | topLeft | topRight | bottom | bottomLeft | bottomRight'
            },
            category: 'Tour'
        }
    },
    onClose: {
        name: 'onClose',
        description: 'Callback function on shutdown',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'Tour'
        }
    },
    mask: {
        name: 'mask',
        description: 'Whether to enable masking, change mask style and fill color by pass custom props',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | { style?: React.CSSProperties; color?: string; }'
            },
            defaultValue: {
                summary: true
            },
            category: 'Tour'
        }
    },
    type: {
        name: 'type',
        description: 'Type, affects the background color and text color',
        table: {
            type: {
                summary: 'default primary'
            },
            defaultValue: {
                summary: 'default'
            },
            category: 'Tour'
        }
    },
    open: {
        name: 'open',
        description: 'Open tour',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tour'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback when the step changes. Current is the previous step',
        table: {
            type: {
                summary: '(current: number) => void'
            },
            category: 'Tour'
        }
    },
    current: {
        name: 'current',
        description: 'What is the current step',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Tour'
        }
    },
    scrollIntoViewOptions: {
        name: 'scrollIntoViewOptions',
        description: 'support pass custom scrollIntoView options',
        table: {
            type: {
                summary: 'boolean | ScrollIntoViewOptions'
            },
            defaultValue: {summary: true},
            category: 'Tour'
        }
    },
    indicatorsRender: {
        name: 'indicatorsRender',
        description: 'custom indicator',
        table: {
            type: {
                summary: '(current: number, total: number) => ReactNode'
            },
            category: 'Tour'
        }
    },
    zIndex: {
        name: 'zIndex',
        description: `Tour's zIndex`,
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: '1001'
            },
            category: 'Tour'
        }
    },
    target: {
        name: 'target',
        description: 'Get the element the guide card points to. Empty makes it show in center of screen',
        table: {
            type: {
                summary: '() => HTMLElement HTMLElement'
            },
            category: 'TourStep'
        }
    },
    arrowStep: {
        name: 'arrow',
        description:
            'Whether to show the arrow, including the configuration whether to point to the center of the element',
        table: {
            type: {
                summary: 'boolean { pointAtCenter: boolean}'
            },
            defaultValue: {
                summary: true
            },
            category: 'TourStep'
        }
    },
    closeIconStep: {
        name: 'closeIcon',
        description: 'Customize close icon',
        table: {
            type: {
                summary: 'React.ReactNode'
            },
            defaultValue: {
                summary: true
            },
            category: 'TourStep'
        }
    },
    cover: {
        name: 'cover',
        description: 'Displayed pictures or videos',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'TourStep'
        }
    },
    title: {
        name: 'title',
        description: 'title',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'TourStep'
        }
    },
    description: {
        name: 'description',
        description: 'description',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'TourStep'
        }
    },
    placementStep: {
        name: 'placement',
        description: 'Position of the guide card relative to the target element',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'TourStep'
        }
    },
    onCloseStep: {
        name: 'onClose',
        description: 'Callback function on shutdown',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'TourStep'
        }
    },
    maskStep: {
        name: 'mask',
        description:
            'Whether to enable masking, change mask style and fill color by pass custom props, the default follows the mask property of Tour',
        table: {
            type: {
                summary: 'boolean | { style?: React.CSSProperties; color?: string; }'
            },
            defaultValue: {
                summary: true
            },
            category: 'TourStep'
        }
    },
    typeStep: {
        name: 'type',
        description: 'Type, affects the background color and text color',
        table: {
            type: {
                summary: 'default primary'
            },
            defaultValue: {
                summary: 'default'
            },
            category: 'TourStep'
        }
    },
    nextButtonProps: {
        name: 'nextButtonProps',
        description: 'Properties of the Next button',
        table: {
            type: {
                summary: '{ children: ReactNode; onClick: Function }'
            },
            category: 'TourStep'
        }
    },
    prevButtonProps: {
        name: 'prevButtonProps',
        description: 'Properties of the previous button',
        table: {
            type: {
                summary: '{ children: ReactNode; onClick: Function }'
            },
            category: 'TourStep'
        }
    },
    scrollIntoViewOptionsStep: {
        name: 'scrollIntoViewOptions',
        description:
            'support pass custom scrollIntoView options, the default follows the `scrollIntoViewOptions` property of Tour',
        table: {
            type: {
                summary: 'boolean | ScrollIntoViewOptions'
            },
            defaultValue: {
                summary: true
            },
            category: 'TourStep'
        }
    }
};
