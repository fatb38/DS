const shape = ['circle', 'square'];

const pophoverPlacement = ['top', 'bottom'];

const pophoverTrigger = ['hover', 'click', 'focus'];

const imageFit = ['cover', 'contain', 'fill'];

export const argTypes = {
    alt: {
        name: 'alt',
        description: 'This attribute defines the alternative text describing the image',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Avatar'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Display avatar in disabled state',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Avatar'
        }
    },
    gap: {
        name: 'gap',
        description: 'Letter type unit distance between left and right sides',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 4
            },
            category: 'Avatar'
        }
    },
    icon: {
        name: 'icon',
        description: 'Custom icon type for an icon avatar',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Avatar'
        }
    },
    shape: {
        name: 'shape',
        description: 'The shape of avatar',
        options: shape,
        control: {
            type: 'select',
            defaultValue: 'circle'
        },
        table: {
            type: {
                summary: 'circle | square'
            },
            category: 'Avatar'
        }
    },
    color: {
        name: 'color',
        control: {type: 'color'},
        description: 'Set a color',
        table: {
            type: {
                summary:
                    '`hexadecimal` | `rgb` | `hsl` | `yellow` | `pink` | `warning` | `error` | `success` | `primary`'
            },
            category: 'Avatar'
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
            category: 'Avatar'
        }
    },
    size: {
        name: 'size',
        description: 'The size of the avatar',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'number | large | small | default | { xs: number, sm: number, ...}'
            },
            defaultValue: {
                summary: 'default'
            },
            category: 'Avatar'
        }
    },
    label: {
        name: 'label',
        description: 'The label that will be used to generate the initials',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Avatar'
        }
    },
    initialsMaxChars: {
        name: 'labinitialsMaxCharsel',
        description: 'The maximum number of characters to use for the initials',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'number'
            },
            category: 'Avatar'
        }
    },
    src: {
        name: 'src',
        description: 'The address of the image for an image avatar or image element',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string | ReactNode'
            },
            category: 'Avatar'
        }
    },
    srcSet: {
        name: 'srcSet',
        description: 'A list of sources to use for different screen resolutions',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Avatar'
        }
    },
    imageFit: {
        name: 'imageFit',
        description: 'The fit type of the image',
        options: imageFit,
        control: {
            type: 'select',
            defaultValue: 'cover'
        },
        table: {
            type: {
                summary: 'contain | cover | fill'
            },
            defaultValue: {
                summary: 'cover'
            },
            category: 'Avatar'
        }
    },
    draggable: {
        name: 'draggable',
        description: 'Whether the picture is allowed to be dragged',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: "boolean | 'true' | 'false'"
            },
            defaultValue: {
                summary: true
            },
            category: 'Avatar'
        }
    },
    crossOrigin: {
        name: 'crossOrigin',
        description: 'CORS settings attributes',
        table: {
            type: {
                summary: "'anonymous' | 'use-credentials' | ''"
            },
            category: 'Avatar'
        }
    },
    onError: {
        name: 'onError',
        description: 'Handler when img load error, return false to prevent default fallback behavior',
        table: {
            type: {
                summary: '() => boolean'
            },
            category: 'Avatar'
        }
    },
    maxCount: {
        name: 'maxCount',
        description: 'Max avatars to show',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            category: 'AvatarGroup'
        }
    },
    maxPopoverPlacement: {
        name: 'maxPopoverPlacement',
        description: 'The placement of excess avatar Popover',
        options: pophoverPlacement,
        control: {
            type: 'select',
            defaultValue: 'top'
        },
        table: {
            type: {
                summary: 'top | bottom'
            },
            defaultValue: {
                summary: 'top'
            },
            category: 'AvatarGroup'
        }
    },
    maxPopoverTrigger: {
        name: 'maxPopoverTrigger',
        description: 'Set the trigger of excess avatar Popover',
        options: pophoverTrigger,
        control: {
            type: 'select',
            defaultValue: 'hover'
        },
        table: {
            type: {
                summary: 'hover | focus | click'
            },
            defaultValue: {
                summary: 'hover'
            },
            category: 'AvatarGroup'
        }
    },
    groupDisabled: {
        name: 'disabled',
        description: 'Display Avatar group in disabled state',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'AvatarGroup'
        }
    },
    sizeGroup: {
        name: 'size',
        description: 'The size of the avatar',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'number | large | small | default | { xs: number, sm: number, ...}'
            },
            defaultValue: {
                summary: 'default'
            },
            category: 'AvatarGroup'
        }
    }
};
