import React from 'react';
import {KitAvatar} from '@kit/DataDisplay';
import {KitSpace} from '@kit/Layout';

const shape = ['circle', 'square'];

const color = ['default', 'blueInvert'];

const pophoverPlacement = ['top', 'bottom'];

const pophoverTrigger = ['hover', 'click', 'focus'];

export const AvatarArgTypes = {
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
        description: 'The color of avatar',
        options: color,
        control: {
            type: 'select',
            defaultValue: 'default'
        },
        table: {
            type: {
                summary: 'default | blueInvert'
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

export const Template = ({component, ...args}) => {
    return (
        <>
            <KitSpace>
                <KitAvatar {...args}>U</KitAvatar>
            </KitSpace>
            <br />
            <br />
            <KitSpace>
                <KitAvatar.Group {...args} size={args.sizeGroup}>
                    <KitAvatar>G</KitAvatar>
                    <KitAvatar>R</KitAvatar>
                    <KitAvatar>E</KitAvatar>
                    <KitAvatar>N</KitAvatar>
                    <KitAvatar>O</KitAvatar>
                    <KitAvatar>B</KitAvatar>
                    <KitAvatar>L</KitAvatar>
                    <KitAvatar>E</KitAvatar>
                </KitAvatar.Group>
            </KitSpace>
        </>
    );
};
