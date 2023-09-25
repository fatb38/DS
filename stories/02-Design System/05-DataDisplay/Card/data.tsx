import React from 'react';
import {KitCard} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {AntDesignOutlined, DownloadOutlined, FolderOpenOutlined} from '@ant-design/icons';
import {KitAvatar, KitImage} from '@kit/DataDisplay';
import KitCardProps from '@kit/DataDisplay/Card/types';
import {KitButton, KitIcon} from '@kit/General/';

export const fakeContent = {
    base: {
        title: 'Tondeuse à gazon',
        description: 'Tondeuse thermique Auto tractée 70 VL 55 TH',
        extrainfo: '550.00€'
    },
    colors: [
        {label: 'test', color: '#00D9A9'},
        {label: 'toto', color: '#009876'}
    ],
    tags: ['3 opérations'],
    image: <KitImage src="images/tondeuse.png" />,
    icon: <KitIcon icon={<AntDesignOutlined />} />,
    avatar: <KitAvatar>G</KitAvatar>,
    onSeectChange: '',
    onEdit: '',
    actions: [
        <KitButton onClick={() => console.log('download action')}>
            <DownloadOutlined />
        </KitButton>,
        <KitButton onClick={() => console.log('open action')}>
            <FolderOpenOutlined />
        </KitButton>
    ]
};

export const argTypes = {
    vertical: {
        name: 'vertical',
        description: 'Change Card layout to vertical',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Is Card disabled',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    picture: {
        name: 'picture',
        description: 'Set the picure area content. Can e one of `Image` `Avatar` or `Icon`',
        options: ['-', 'Image', 'Icon', 'Avatar'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactElement<KitAvatarProps> | ReactElement<KitIconProps> | ReactElement<KitImageProps>'
            },
            category: 'Card'
        }
    },
    colors: {
        name: 'colors',
        description: 'set list of colors to display. cardColor[]',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    title: {
        name: 'title',
        description: 'Sets the Card title',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Card'
        }
    },
    description: {
        name: 'description',
        description: 'Sets the Card description',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Card'
        }
    },
    extrainfo: {
        name: 'extrainfo',
        description: 'Sets the Card extrainfo',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Card'
        }
    },
    tags: {
        name: 'tags',
        description: 'set list of tags to display. string[]',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    actions: {
        name: 'actions',
        description: 'set list of actions to add. array of `Button`',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Card'
        }
    },
    onSelectChange: {
        name: 'onSelectChange',
        description: 'The callback function that is triggered when the state change. When set makes Card selectable',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: '(checkedValue: CheckboxValueType[]) => void'
            },
            defaultValue: {summary: '-'},
            category: 'CheCardckbox'
        },
        defaultValue: () => {}
    },
    onEdit: {
        name: 'onEdit',
        description:
            'The callback function that is triggered when click on the Edit buttone. When set makes the card Editable',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: '() => void'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        },
        defaultValue: () => {}
    }
};

const getPicture = picture => {
    switch (picture) {
        case 'Image':
            return fakeContent.image;
        case 'Avatar':
            return fakeContent.avatar;
        case 'Icon':
            return fakeContent.icon;
        default:
            return null;
    }
};

export const Template = (args: KitCardProps) => {
    const {colors, picture, tags, actions, ...rest} = args;
    const props: KitCardProps = {
        ...rest,
        picture: getPicture(picture),
        title: rest.title || fakeContent.base.title,
        description: rest.description || fakeContent.base.description,
        extrainfo: rest.extrainfo || fakeContent.base.extrainfo
    };
    if (colors) {
        props.colors = fakeContent.colors;
    }
    if (tags) {
        props.tags = fakeContent.tags;
    }
    if (actions) {
        props.actions = fakeContent.actions;
    }

    return (
        <KitSpace>
            <KitCard {...props} />
        </KitSpace>
    );
};
