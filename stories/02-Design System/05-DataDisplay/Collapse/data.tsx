import {KitCollapse} from '@kit/DataDisplay/';
import {KitIcon} from '@kit/General/';
import React from 'react';
import {SettingOutlined, PlusOutlined, MoreOutlined} from '@ant-design/icons';
import {KitTag} from '@kit/DataEntry/';
import {KitDropDown} from '@kit/Navigation/';
import {KitSpace} from '@kit/Layout/';

const collapsible = ['header', 'icon', 'disabled'];
const size = ['large', 'middle', 'small'];

export const CollapseArgTypes = {
    accordion: {
        name: 'accordion',
        description: 'If true, Collapse renders as Accordion',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Collapse',
            defaultValue: {
                summary: false
            }
        }
    },
    activeKey: {
        name: 'activeKey',
        description: 'Key of the active panel',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string[] | string | number[] | number'
            },
            category: 'Collapse',
            defaultValue: {
                summary: "No default value. In `accordion` mode, it's the key of the first panel	"
            }
        }
    },
    collapsible: {
        name: 'collapsible',
        description: 'Specify whether the panels of children be collapsible or the trigger area of collapsible',
        options: collapsible,
        control: {
            type: 'select',
            defaultValue: 'header'
        },
        table: {
            type: {
                summary: 'header | icon | disabled'
            },
            category: 'Collapse'
        }
    },
    defaultActiveKey: {
        name: 'defaultActiveKey',
        description: 'Key of the initial active panel',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string[] | string | number[] | number'
            },
            category: 'Collapse'
        }
    },
    destroyInactivePanel: {
        name: 'destroyInactivePanel',
        description: 'Destroy Inactive Panel',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Collapse',
            defaultValue: {
                summary: false
            }
        }
    },
    expandIcon: {
        name: 'expandIcon',
        description: 'Allow to customize collapse icon',
        table: {
            type: {
                summary: '(panelProps) => ReactNode'
            },
            category: 'Collapse',
            defaultValue: {
                summary: false
            }
        }
    },
    size: {
        name: 'size',
        description: 'Set the size of collapse',
        options: size,
        control: {
            type: 'select',
            defaultValue: 'middle'
        },
        table: {
            type: {
                summary: 'large | middle | small'
            },
            category: 'Collapse'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback function executed when active panel is changed',
        table: {
            type: {
                summary: 'function'
            },
            category: 'Collapse'
        }
    },
    items: {
        name: 'items',
        description:
            'Collapse items content <br/>' +
            '[ItemType](https://github.com/react-component/collapse/blob/27250ca5415faab16db412b9bff2c131bb4f32fc/src/interface.ts#L6)',
        table: {
            category: 'Collapse'
        }
    }
};

const mockDataItemsText = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const mockData = {
    items: {
        defaultActiveKey: '1',
        default: [
            {
                key: '1',
                label: 'This is panel header 1',
                children: <p>{mockDataItemsText}</p>
            },
            {
                key: '2',
                label: 'This is panel header 2',
                children: <p>{mockDataItemsText}</p>,
                isActive: true
            },
            {
                key: '3',
                label: 'This is panel header 3',
                children: <p>{mockDataItemsText}</p>
            }
        ],
        extra: [
            {
                key: '1',
                label: 'This is panel header 1',
                children: <p>{mockDataItemsText}</p>,
                extra: (
                    <KitIcon
                        icon={<SettingOutlined rev={null} />}
                        hoverable
                        onClick={event => {
                            // If you don't want click extra trigger collapse, you can prevent this:
                            event.stopPropagation();
                            console.log('click extra');
                        }}
                    />
                )
            },
            {
                key: '2',
                label: 'This is panel header 2',
                children: <p>{mockDataItemsText}</p>,
                isActive: true,
                extra: (
                    <KitIcon
                        icon={<SettingOutlined rev={null} />}
                        hoverable
                        onClick={event => {
                            // If you don't want click extra trigger collapse, you can prevent this:
                            event.stopPropagation();
                            console.log('click extra');
                        }}
                    />
                )
            },
            {
                key: '3',
                label: 'This is panel header 3',
                children: <p>{mockDataItemsText}</p>,
                extra: (
                    <KitIcon
                        icon={<SettingOutlined rev={null} />}
                        hoverable
                        onClick={event => {
                            // If you don't want click extra trigger collapse, you can prevent this:
                            event.stopPropagation();
                            console.log('click extra');
                        }}
                    />
                )
            }
        ],
        nested: [
            {
                key: '1',
                label: 'This is panel header 1',
                children: (
                    <KitCollapse
                        items={[
                            {
                                key: '1',
                                label: 'This is panel nest panel',
                                children: <p>{mockDataItemsText}</p>
                            }
                        ]}
                        defaultActiveKey="1"
                    />
                )
            },
            {
                key: '2',
                label: 'This is panel header 2',
                children: <p>{mockDataItemsText}</p>
            },
            {
                key: '3',
                label: 'This is panel header 3',
                children: <p>{mockDataItemsText}</p>
            }
        ],
        light: [
            {
                key: '1',
                label: 'This is panel header 1',
                children: <p>{mockDataItemsText}</p>
            }
        ],
        complex: [
            {
                key: '1',
                label: (
                    <KitSpace>
                        {'This is panel header 1'}
                        <KitTag>Sprint #5</KitTag>
                    </KitSpace>
                ),
                children: <p>{mockDataItemsText}</p>,
                extra: (
                    <>
                        <KitDropDown
                            menu={{
                                items: [
                                    {key: '1', label: 'Action 1'},
                                    {key: '2', label: 'Action 2'}
                                ]
                            }}
                        >
                            <KitIcon icon={<MoreOutlined rev={null} />} hoverable />
                        </KitDropDown>
                        <KitIcon
                            icon={<PlusOutlined rev={null} />}
                            hoverable
                            onClick={event => {
                                // If you don't want click extra trigger collapse, you can prevent this:
                                event.stopPropagation();
                                console.log('click extra');
                            }}
                        />
                    </>
                )
            }
        ]
    }
};

export const Template = ({...args}) => {
    return <KitCollapse {...args} items={mockData.items.default} />;
};
