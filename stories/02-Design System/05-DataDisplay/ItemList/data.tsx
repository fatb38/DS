import React from 'react';
import {KitImage, KitItemList} from '@kit/DataDisplay/';
import {KitIcon} from '@kit/General/';
import {UserOutlined} from '@ant-design/icons';

export const mockData = {
    base: {
        title: 'Tondeuse à gazon',
        description: 'Tondeuse thermique Auto tractée 70 VL 55 TH'
    },
    long: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod es do is un incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum id est laborum.'
    },
    tag: 4,
    image: <KitImage src="images/tondeuse.png" />,
    icon: <KitIcon icon={<UserOutlined />} />,
    onSelectChange: e => console.log('selected', e.target.checked),
    onRafterClick: () => console.log('click rafter'),
    onClick: () => console.log('on click itemlist')
};

export const ItemListArgTypes = {
    displayCheckbox: {
        name: 'Display checkbox',
        description: '',
        control: {
            type: 'boolean'
        },
        table: {
            category: 'For testing only'
        }
    },
    displayRafter: {
        name: 'Display rafter',
        description: '',
        control: {
            type: 'boolean'
        },
        table: {
            category: 'For testing only'
        }
    },
    itemListClickable: {
        name: 'ItemList clickable',
        description: '',
        control: {
            type: 'boolean'
        },
        table: {
            category: 'For testing only'
        }
    },
    title: {
        name: 'title',
        description: 'Title content on one line',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemList'
        }
    },
    description: {
        name: 'description',
        description: 'Description content on two lines with ellipsis',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'ItemList'
        }
    },
    picture: {
        name: 'picture',
        description: 'Image or Icon',
        table: {
            type: {
                summary: 'ReactElement<KitAvatarProps> | ReactElement<KitIconProps> | ReactElement<KitImageProps>'
            },
            category: 'ItemList'
        }
    },
    onSelectChange: {
        name: 'onSelectChange',
        description: 'The callback function that is triggered when the state changes',
        table: {
            type: {
                summary: '(e: CheckboxChangeEvent) => void'
            },
            category: 'ItemList'
        }
    },
    tagNumber: {
        name: 'tagNumber',
        description: 'Number to display in a tag element',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            category: 'ItemList'
        }
    },
    onRafterClick: {
        name: 'onRafterClick',
        description: 'Set the handler to handle `click` event on the rafter',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'ItemList'
        }
    },
    isDisabled: {
        name: 'isDisabled',
        description: 'Disabled state of ItemList',
        control: {
            type: 'boolean'
        },
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ItemList'
        }
    },
    onClick: {
        name: 'onClick',
        description: 'Set the handler to handle `click` event on the whole ItemList',
        table: {
            type: {
                summary: 'Function'
            },
            category: 'ItemList'
        }
    }
};

export const Template = ({component, ...args}) => {
    return (
        <KitItemList
            {...args}
            onSelectChange={args.displayCheckbox ? () => console.log('select changer') : undefined}
            onRafterClick={args.displayRafter ? () => console.log('click rafter') : undefined}
            onClick={args.itemListClickable ? () => console.log('click itemList') : undefined}
        />
    );
};
