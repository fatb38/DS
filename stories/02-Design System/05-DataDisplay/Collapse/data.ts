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
        description:
            'Specify whether the panels of children be collapsible or the trigger area of collapsible. If value is set to `disabled` then `Header` and `HeaderExtra` will automatically recieve the property `disabled` set to `true`',
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
            '[ItemType](https://github.com/react-component/collapse/blob/27250ca5415faab16db412b9bff2c131bb4f32FunctionComponent/src/interface.ts#L6)',
        table: {
            category: 'Collapse'
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
    headerTagProps: {
        name: 'tagProps',
        description: 'Tag display next to a title and/or a description',
        table: {
            type: {
                summary: 'IKitTag'
            },
            category: 'Collapse.Header'
        }
    },
    headerOnSwitchChange: {
        name: 'onSwitchChange',
        description: 'If set, this property will add a `Switch`',
        table: {
            type: {
                summary: 'SwitchChangeEventHandler'
            },
            category: 'Collapse.Header'
        }
    },
    headerDisabled: {
        name: 'disabled',
        description: 'Disable `Switch` add with `onSwitchChange` property, `title` and `description`',
        table: {
            type: {
                summary: 'Boolean'
            },
            category: 'Collapse.Header',
            defaultValue: {
                summary: false
            }
        }
    },
    headerExtraActions: {
        name: 'actions',
        description: '',
        table: {
            type: {
                summary: 'IActions'
            },
            category: 'Collapse.HeaderExtra'
        }
    },
    headerExtraDisabled: {
        name: 'disabled',
        description: 'Disable `Buttons` add with `actions` property',
        table: {
            type: {
                summary: 'Boolean'
            },
            category: 'Collapse.HeaderExtra',
            defaultValue: {
                summary: false
            }
        }
    }
};
