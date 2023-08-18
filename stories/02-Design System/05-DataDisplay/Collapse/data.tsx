import {KitCollapse} from '@kit/DataDisplay/';
import React from 'react';
import {PlusOutlined, MinusOutlined, ClockCircleOutlined, PercentageOutlined} from '@ant-design/icons';

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
    },
    headerIcon: {
        name: 'icon',
        description: 'Icon to display',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Collapse.Header'
        }
    },
    headerImageSrc: {
        name: 'imageSrc',
        description: 'Src of an image to display',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Collapse.Header'
        }
    },
    headerTitle: {
        name: 'title',
        description: 'Title display in the header',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Collapse.Header'
        }
    },
    headerDescription: {
        name: 'description',
        description: 'Description display under a title',
        table: {
            type: {
                summary: 'string'
            },
            category: 'Collapse.Header'
        }
    },
    headerTagContent: {
        name: 'tagContent',
        description: 'Tag display next to a title and/or a description',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Collapse.Header'
        }
    },
    headerExtraOnSelectChange: {
        name: 'onSelectChange',
        description: '',
        table: {
            type: {
                summary: '(e: CheckboxChangeEvent) => void'
            },
            category: 'Collapse.HeaderExtra'
        }
    },
    headerExtraActions: {
        name: 'actions',
        description: '',
        table: {
            type: {
                summary: 'KitHeaderExtraActions'
            },
            category: 'Collapse.HeaderExtra'
        }
    },
    showHeaderIcon: {
        name: 'showHeaderIcon',
        description: 'Show header icon',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'For testing only'
        }
    },
    showHeaderImage: {
        name: 'showHeaderImage',
        description: 'Show header image',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'For testing only'
        }
    },
    showHeaderTitle: {
        name: 'showHeaderTitle',
        description: 'Show header title',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'For testing only'
        }
    },
    showHeaderDescription: {
        name: 'showHeaderDescription',
        description: 'Show header description',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'For testing only'
        }
    },
    showHeaderTag: {
        name: 'showHeaderTag',
        description: 'Show header tag',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'For testing only'
        }
    },
    showHeaderExtraCheckbox: {
        name: 'showHeaderExtraCheckbox',
        description: 'Show header extra checkbox',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'For testing only'
        }
    },
    showHeaderExtraActions: {
        name: 'showHeaderExtraActions',
        description: 'Show header extra actions',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'For testing only'
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
                label: (
                    <KitCollapse.Header
                        icon={<ClockCircleOutlined />}
                        imageSrc="/public/images/catalog.jpg"
                        title="Title 1"
                        description="This is a description 1"
                        tagContent={'sprint #5'}
                    />
                ),
                children: <p>{mockDataItemsText}</p>,
                extra: <KitCollapse.HeaderExtra onSelectChange={e => console.log('onSelectChange :', e)} />
            },
            {
                key: '2',
                label: (
                    <KitCollapse.Header
                        icon={<ClockCircleOutlined />}
                        imageSrc="/public/images/catalog.jpg"
                        title="Title 2"
                        description="This is a description 2"
                        tagContent={'sprint #6'}
                    />
                ),
                children: <p>{mockDataItemsText}</p>,
                isActive: true,
                extra: (
                    <KitCollapse.HeaderExtra
                        onSelectChange={e => console.log('onSelectChange :', e)}
                        actions={[
                            {icon: <PlusOutlined />, label: 'Add', onClick: () => console.log('onClick: Add')},
                            {
                                icon: <MinusOutlined />,
                                label: 'Subtract',
                                onClick: () => console.log('onClick: Subtract')
                            }
                        ]}
                    />
                )
            },
            {
                key: '3',
                label: (
                    <KitCollapse.Header
                        icon={<ClockCircleOutlined />}
                        imageSrc="/public/images/catalog.jpg"
                        title="Title 3"
                        description="This is a description 3"
                        tagContent={'sprint #7'}
                    />
                ),
                children: <p>{mockDataItemsText}</p>,
                extra: (
                    <KitCollapse.HeaderExtra
                        onSelectChange={e => console.log('onSelectChange :', e)}
                        actions={[
                            {icon: <PlusOutlined />, label: 'Add', onClick: () => console.log('onClick: Add')},
                            {
                                icon: <MinusOutlined />,
                                label: 'Subtract',
                                onClick: () => console.log('onClick: Subtract')
                            },
                            {
                                icon: <PercentageOutlined />,
                                label: 'Percent',
                                onClick: () => console.log('onClick: Percent')
                            }
                        ]}
                    />
                )
            }
        ],
        customHeader: [
            {
                key: '1',
                label: (
                    <KitCollapse.Header
                        icon={<ClockCircleOutlined />}
                        imageSrc="/public/images/catalog.jpg"
                        title="Title 1"
                        description="This is a description 1"
                        tagContent={'sprint #5'}
                    />
                ),
                children: <p>{mockDataItemsText}</p>
            },
            {
                key: '2',
                label: (
                    <KitCollapse.Header
                        icon={<ClockCircleOutlined />}
                        imageSrc="/public/images/catalog.jpg"
                        title="Title 2"
                        description="This is a description 2"
                        tagContent={'sprint #6'}
                    />
                ),
                children: <p>{mockDataItemsText}</p>
            },
            {
                key: '3',
                label: (
                    <KitCollapse.Header
                        icon={<ClockCircleOutlined />}
                        imageSrc="/public/images/catalog.jpg"
                        title="Title 3"
                        description="This is a description 3"
                        tagContent={'sprint #7'}
                    />
                ),
                children: <p>{mockDataItemsText}</p>
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
        ]
    }
};

const {Header} = KitCollapse;

export const Template = ({...args}) => {
    return (
        <KitCollapse
            {...args}
            items={[
                {
                    key: '1',
                    label: (
                        <KitCollapse.Header
                            icon={args.showHeaderIcon ? <ClockCircleOutlined /> : undefined}
                            imageSrc={args.showHeaderImage ? '/public/images/catalog.jpg' : undefined}
                            title={args.showHeaderTitle ? 'Title 3' : undefined}
                            description={args.showHeaderDescription ? 'This is a description 3' : undefined}
                            tagContent={args.showHeaderTag ? 'sprint #7' : undefined}
                        />
                    ),
                    children: <p>{mockDataItemsText}</p>,
                    extra: (
                        <KitCollapse.HeaderExtra
                            onSelectChange={
                                args.showHeaderExtraCheckbox ? e => console.log('onSelectChange :', e) : undefined
                            }
                            actions={
                                args.showHeaderExtraActions
                                    ? [
                                          {
                                              icon: <PlusOutlined />,
                                              label: 'Add',
                                              onClick: () => console.log('onClick: Add')
                                          },
                                          {
                                              icon: <MinusOutlined />,
                                              label: 'Subtract',
                                              onClick: () => console.log('onClick: Subtract')
                                          },
                                          {
                                              icon: <PercentageOutlined />,
                                              label: 'Percent',
                                              onClick: () => console.log('onClick: Percent')
                                          }
                                      ]
                                    : undefined
                            }
                        />
                    )
                }
            ]}
        />
    );
};
