import {KitCollapse} from '@kit/DataDisplay/';
import React from 'react';
import {IEditorTemplate} from 'stories/types';

const collapsible = ['header', 'icon', 'disabled'];
const size = ['large', 'middle', 'small'];

export const argTypes = {
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
                summary: 'IKitHeaderExtraActions'
            },
            category: 'Collapse.HeaderExtra'
        }
    }
};

export const Template = args => {
    return (
        <KitCollapse
            {...args}
            items={[
                {
                    key: '1',
                    label: 'This is panel header 1',
                    children:
                        'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world'
                },
                {
                    key: '2',
                    label: 'This is panel header 2',
                    children:
                        'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world'
                },
                {
                    key: '3',
                    label: 'This is panel header 3',
                    children:
                        'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world'
                }
            ]}
        />
    );
};

const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;

const items = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>
    }
];

export const EditorTemplate: IEditorTemplate = () => {
    return (
        <div style={{width: '100%'}}>
            <KitCollapse items={items} defaultActiveKey={1} />
        </div>
    );
};
EditorTemplate.path = 'components.Collapse';
EditorTemplate.title = 'Collapse';
