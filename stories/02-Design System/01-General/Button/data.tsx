import React from 'react';
import {DownloadOutlined, CheckCircleOutlined, SearchOutlined} from '@ant-design/icons';
import {KitButton} from '@kit/General/';

export const ButtonArgTypes = {
    block: {
        name: 'block',
        control: {type: 'boolean'},
        description: 'Option to fit button width to its parent width',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    danger: {
        name: 'danger',
        control: {type: 'boolean'},
        description: 'Set the danger status of button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Disabled state of button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    href: {
        name: 'href',
        control: {type: 'text'},
        description: 'Redirect url of link button',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        }
    },
    htmlType: {
        name: 'htmlType',
        control: {type: 'text'},
        description:
            'Set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'button'},
            category: 'Button'
        }
    },
    icon: {
        name: 'icon',
        type: {name: 'ReactNode', required: false},
        options: ['-', 'SearchOutlined', 'DownloadOutlined', 'CheckCircleOutlined'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        },
        description: 'Set the icon component of button'
    },
    loading: {
        name: 'loading',
        control: {type: 'boolean'},
        description: 'Set the loading status of button',
        table: {
            type: {
                summary: 'boolean | { delay: number }'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    target: {
        name: 'target',
        description: 'Same as target attribute of a, works when href is specified',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        }
    },
    type: {
        name: 'type',
        options: ['primary', 'link', 'default', 'segmented'],
        control: {type: 'select'},
        description: 'Can be set to `primary` | `link` | `default` | `segmented`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'default'},
            category: 'Button'
        },
        defaultValue: 'default'
    },
    subtypeSegmented: {
        name: 'subtypeSegmented',
        options: ['default', 'green', 'gray'],
        control: {type: 'select'},
        description: 'Can be set to `default` | `green` | `gray`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'default'},
            category: 'Button'
        },
        defaultValue: 'default'
    },
    isActiveSegmented: {
        name: 'isActiveSegmented',
        control: {type: 'boolean'},
        description: '[Only for segmented type] - Option to display segmented button with an active state',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    isCheckedSegmented: {
        name: 'isCheckedSegmented',
        control: {type: 'boolean'},
        description: '[Only for segmented type] - Option to display segmented button with a check icon',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    bigIcon: {
        name: 'bigIcon',
        control: {type: 'boolean'},
        description: '[Only with KitSpace.Compact] Option to display only a big icon without padings in button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Button'
        },
        defaultValue: false
    },
    onClick: {
        name: 'onClick',
        description: 'Set the handler to handle `click` event',
        table: {
            type: {
                summary: '(event: MouseEvent) => void'
            },
            defaultValue: {summary: '-'},
            category: 'Button'
        },
        defaultValue: () => {}
    }
};

export const getIcon = ({icon}) => {
    switch (icon) {
        case 'SearchOutlined':
            return <SearchOutlined />;
        case 'DownloadOutlined':
            return <DownloadOutlined />;
        case 'CheckCircleOutlined':
            return <CheckCircleOutlined />;
        case '-':
        default:
            return null;
    }
};

export const Template = args => {
    const icon = getIcon(args);
    return (
        <KitButton {...args} icon={icon}>
            Label
        </KitButton>
    );
};
