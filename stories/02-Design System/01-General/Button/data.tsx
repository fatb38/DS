import React from 'react';
import {
    DownloadOutlined,
    CheckCircleOutlined,
    SearchOutlined,
    ReloadOutlined,
    PoweroffOutlined
} from '@ant-design/icons';
import {KitButton} from '@kit/General/';
import {KitSpace} from '@kit/Layout';
import {IEditorTemplate} from '../../../types';

export const argTypes = {
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
    disableSecureClick: {
        name: 'disableSecureClick',
        control: {type: 'boolean'},
        description: 'Disable double click security of the button',
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
    iconSize: {
        name: 'iconSize',
        options: ['xs', 's', 'm', 'l', 'xl'],
        control: {type: 'select'},
        description: 'Set a size to the icon button',
        table: {
            type: {
                summary: 'xs | s | m | l | xl'
            },
            defaultValue: {summary: 'm'},
            category: 'Button'
        },
        defaultValue: false
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
        options: ['primary', 'default', 'text', 'link', 'segmented'],
        control: {type: 'select'},
        description: 'Can be set to `primary` | `default` | `text` | `link` | `segmented`',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'default'},
            category: 'Button'
        },
        defaultValue: 'default'
    },
    segmentedActived: {
        name: 'segmentedActived',
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
    segmentedChecked: {
        name: 'segmentedChecked',
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
    segmentedColor: {
        name: 'segmentedColor',
        options: ['mediumGrey', 'yellow', 'orange', 'pink', 'red', 'blue', 'green'],
        control: {type: 'select'},
        description: '[Only for segmented type] - Option to display segmented button with an other color',
        table: {
            type: {
                summary: 'KitColorKeys'
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
    },
    wrapperClassName: {
        name: 'wrapperClassName',
        description: 'Add a classname to the button wrapper',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Button'
        }
    },
    wrapperStyle: {
        name: 'wrapperStyle',
        description: 'Add a style to the button wrapper',
        table: {
            type: {
                summary: 'CssProperties'
            },
            category: 'Button'
        }
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

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <KitSpace direction="vertical">
            <KitSpace>
                <KitButton type="primary">Primary</KitButton>
                <KitButton type="primary" disabled>
                    Primary(disabled)
                </KitButton>
                <KitButton danger type="primary">
                    Danger Text
                </KitButton>
                <KitButton danger type="primary" disabled>
                    Danger Text(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton>Default</KitButton>
                <KitButton disabled>Default(disabled)</KitButton>
                <KitButton danger>Danger Default</KitButton>
                <KitButton danger disabled>
                    Danger Default(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton type="text">Text</KitButton>
                <KitButton type="text" disabled>
                    Text(disabled)
                </KitButton>
                <KitButton type="text" danger>
                    Text danger
                </KitButton>
                <KitButton type="text" danger disabled>
                    Text danger(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton type="link">Link</KitButton>
                <KitButton type="link" disabled>
                    Link(disabled)
                </KitButton>
                <KitButton type="link" danger>
                    Danger Link
                </KitButton>
                <KitButton type="link" danger disabled>
                    Danger Link(disabled)
                </KitButton>
            </KitSpace>
            <KitSpace>
                <KitButton type="segmented" icon={<SearchOutlined />} />
                <KitButton type="segmented" icon={<SearchOutlined />}>
                    Search
                </KitButton>
                <KitButton type="segmented" icon={<SearchOutlined />} disabled />
                <KitButton type="segmented" icon={<SearchOutlined />} disabled>
                    Search
                </KitButton>
                <KitButton type="segmented" icon={<SearchOutlined />} danger />
                <KitButton type="segmented" icon={<SearchOutlined />} danger>
                    Search
                </KitButton>
                <KitButton type="segmented" icon={<SearchOutlined />} danger disabled />
                <KitButton type="segmented" icon={<SearchOutlined />} danger disabled>
                    Search
                </KitButton>
            </KitSpace>
            <KitSpace wrap>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedActived />
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                    <KitButton type="segmented" icon={<ReloadOutlined />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} segmentedActived segmentedChecked />
                    <KitButton type="segmented" icon={<ReloadOutlined />} />
                </KitSpace.Compact>
                <KitSpace.Compact block>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} />
                    <KitButton type="segmented" icon={<SearchOutlined />} />
                    <KitButton type="segmented" icon={<ReloadOutlined />} segmentedActived segmentedChecked />
                </KitSpace.Compact>
            </KitSpace>
            <KitSpace wrap>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="blue" />
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="blue" segmentedActived />
                    <KitButton
                        type="segmented"
                        icon={<PoweroffOutlined />}
                        segmentedColor="blue"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="green" />
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="green" segmentedActived />
                    <KitButton
                        type="segmented"
                        icon={<PoweroffOutlined />}
                        segmentedColor="green"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="mediumGrey" />
                    <KitButton
                        type="segmented"
                        icon={<PoweroffOutlined />}
                        segmentedColor="mediumGrey"
                        segmentedActived
                    />
                    <KitButton
                        type="segmented"
                        icon={<PoweroffOutlined />}
                        segmentedColor="mediumGrey"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="orange" />
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="orange" segmentedActived />
                    <KitButton
                        type="segmented"
                        icon={<PoweroffOutlined />}
                        segmentedColor="orange"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="pink" />
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="pink" segmentedActived />
                    <KitButton
                        type="segmented"
                        icon={<PoweroffOutlined />}
                        segmentedColor="pink"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="red" />
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="red" segmentedActived />
                    <KitButton
                        type="segmented"
                        icon={<PoweroffOutlined />}
                        segmentedColor="red"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
                <KitSpace wrap>
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="yellow" />
                    <KitButton type="segmented" icon={<PoweroffOutlined />} segmentedColor="yellow" segmentedActived />
                    <KitButton
                        type="segmented"
                        icon={<PoweroffOutlined />}
                        segmentedColor="yellow"
                        segmentedActived
                        segmentedChecked
                    />
                </KitSpace>
            </KitSpace>
        </KitSpace>
    );
};
EditorTemplate.path = 'components.Button';
EditorTemplate.title = 'Button';
