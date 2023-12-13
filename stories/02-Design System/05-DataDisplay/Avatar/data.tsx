/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import {KitAvatar} from '@kit/DataDisplay';
import {KitDivider, KitSpace} from '@kit/Layout';
import {IEditorTemplate} from '../../../types';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IKitAvatar, IKitAvatarGroup} from '@kit/DataDisplay/Avatar/types';
import {AvatarSize} from 'antd/es/avatar/AvatarContext';

const shape = ['circle', 'square'];

const pophoverPlacement = ['top', 'bottom'];

const pophoverTrigger = ['hover', 'click', 'focus'];

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
                    '`hexadecimal` | `rgb` | `hsl` | `mediumGrey` | `yellow` | `orange` | `pink` | `red` | `blue` | `green`'
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

export const Template = (args: IKitAvatar & {sizeGroup: AvatarSize}) => {
    return (
        <>
            <KitSpace>
                <KitAvatar {...args}>U</KitAvatar>
            </KitSpace>
            <br />
            <br />
            <KitSpace>
                <KitAvatar.Group {...(args as IKitAvatarGroup)} size={args.sizeGroup}>
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

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace>
            <KitAvatar shape="circle" size="small">
                A
            </KitAvatar>
            <KitAvatar shape="circle">A</KitAvatar>
            <KitAvatar shape="circle" size="large">
                A
            </KitAvatar>
            <KitAvatar shape="square" size="small">
                V
            </KitAvatar>
            <KitAvatar shape="square">V</KitAvatar>
            <KitAvatar shape="square" size="large">
                V
            </KitAvatar>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Avatar';
EditorTemplate.title = 'Avatar';

export const EditorTemplateGroup: IEditorTemplate = () => {
    const url = 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1';

    return (
        <KitSpace direction="vertical" size={16}>
            <KitDivider orientation="left">Default KitAvatar.Group</KitDivider>
            <KitAvatar.Group>
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
            <KitDivider orientation="left">KitAvatar.Group with limit</KitDivider>
            <KitAvatar.Group maxCount={2}>
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
            <KitDivider orientation="left">KitAvatar.Group with max popover on click</KitDivider>
            <KitAvatar.Group maxCount={2} maxPopoverTrigger="click">
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
            <KitDivider orientation="left">KitAvatar.Group with limit and size large</KitDivider>
            <KitAvatar.Group maxCount={2} size="large">
                <KitAvatar src={url} />
                <KitAvatar>K</KitAvatar>
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
                <KitAvatar icon={<FontAwesomeIcon icon={faUser} />} />
            </KitAvatar.Group>
        </KitSpace>
    );
};
EditorTemplateGroup.path = 'components.AvatarGroup';
EditorTemplateGroup.title = 'AvatarGroup';
