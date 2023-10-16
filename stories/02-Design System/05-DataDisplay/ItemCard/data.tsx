import React from 'react';
import {KitItemCard} from '@kit/DataDisplay/';
import {KitSpace} from '@kit/Layout/';
import {KitAvatar, KitImage} from '@kit/DataDisplay';
import IKitItemCard from '@kit/DataDisplay/ItemCard/types';
import {KitButton, KitIcon} from '@kit/General/';
import {IEditorTemplate} from '../../../types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faFolderOpen, faImage} from '@fortawesome/free-regular-svg-icons';

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
    image: <KitImage src="public/images/tondeuse.png" />,
    icon: <KitIcon icon={<FontAwesomeIcon icon={faImage} />} />,
    avatar: <KitAvatar>G</KitAvatar>,
    onSeectChange: '',
    onEdit: '',
    actions: [
        <KitButton onClick={() => console.log('download action')}>
            <FontAwesomeIcon icon={faDownload} />
        </KitButton>,
        <KitButton onClick={() => console.log('open action')}>
            <FontAwesomeIcon icon={faFolderOpen} />
        </KitButton>
    ]
};

export const argTypes = {
    vertical: {
        name: 'vertical',
        description: 'Change ItemCard layout to vertical',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Is ItemCard disabled',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
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
                summary: 'ReactElement<IKitAvatar> | ReactElement<IKitIcon> | ReactElement<IKitImage>'
            },
            category: 'ItemCard'
        }
    },
    fullWidthAvatar: {
        name: 'fullWidthAvatar',
        description: 'Sets wether the avatar should fill the entire picture area',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemCard'
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
            category: 'ItemCard'
        }
    },
    title: {
        name: 'title',
        description: 'Sets the ItemCard title',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemCard'
        }
    },
    description: {
        name: 'description',
        description: 'Sets the ItemCard description',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemCard'
        }
    },
    extrainfo: {
        name: 'extrainfo',
        description: 'Sets the ItemCard extrainfo',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemCard'
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
            category: 'ItemCard'
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
            category: 'ItemCard'
        }
    },
    onSelectChange: {
        name: 'onSelectChange',
        description:
            'The callback function that is triggered when the state change. When set makes ItemCard selectable',
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

export const Template = (args: IKitItemCard) => {
    const {colors, picture, tags, actions, ...rest} = args;
    const props: IKitItemCard = {
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
            <KitItemCard {...props} />
        </KitSpace>
    );
};

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace>
            <KitItemCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="public/images/tondeuse.png" />}
                tags={['3 opérations']}
            />
            <KitItemCard
                title="Tondeuse à gazon"
                description="Tondeuse thermique Auto tractée 70 VL 55 TH"
                extrainfo="550.00€"
                picture={<KitImage src="public/images/tondeuse.png" />}
                colors={[
                    {label: 'test', color: '#00D9A9'},
                    {label: 'toto', color: '#009876'}
                ]}
                onSelectChange={e => {
                    console.log(e);
                }}
                onEdit={() => {
                    console.log('onEdit');
                }}
                actions={[
                    <KitButton onClick={() => console.log('download action')}>
                        <DownloadOutlined />
                    </KitButton>,
                    <KitButton onClick={() => console.log('open action')}>
                        <FolderOpenOutlined />
                    </KitButton>
                ]}
                disabled
            />
        </KitSpace>
    );
};
EditorTemplate.path = 'components.ItemCard';
EditorTemplate.title = 'ItemCard';
