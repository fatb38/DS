export const argTypes = {
    label: {
        name: 'label',
        description: 'Label displayed above the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'ColorPicker'
        }
    },
    helper: {
        name: 'helper',
        description: 'Helper displayed below the field',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'ColorPicker'
        }
    },
    required: {
        name: 'required',
        description: 'Whether the input is mandatory',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ColorPicker',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    infoIcon: {
        name: 'infoIcon',
        description: 'Custom Icon to display when onInfoClick is set',
        options: ['-', 'faMagnifyingGlass', 'faDownload', 'faCircleCheck'],
        control: {type: 'select'},
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'ColorPicker',
            defaultValue: {summary: '<FontAwesomeIcon icon={faCircleInfo} />'}
        },
        defaultValue: false
    },
    actions: {
        name: 'actions',
        description: 'Actions to add on the right of the label',
        table: {
            type: {
                summary: 'ReactNode[]'
            },
            category: 'ColorPicker',
            defaultValue: {summary: null}
        },
        defaultValue: false
    },
    allowClear: {
        name: 'allowClear',
        description: 'Allow clearing color selected',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ColorPicker',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    arrow: {
        name: 'arrow',
        description: 'Configuration for popup arrow',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | { pointAtCenter: boolean }'
            },
            category: 'ColorPicker',
            defaultValue: {summary: true}
        },
        defaultValue: false
    },
    children: {
        name: 'children',
        description: 'Trigger of ColorPicker',
        table: {
            type: {
                summary: 'React.ReactNode'
            },
            category: 'ColorPicker'
        }
    },
    defaultValue: {
        name: 'defaultValue',
        description: 'Default value of color',
        table: {
            type: {
                summary: 'string | KitColor'
            },
            category: 'ColorPicker'
        }
    },
    defaultFormat: {
        name: 'defaultFormat',
        description: 'Default format of color',
        table: {
            type: {
                summary: 'rgb | hex | hsb'
            },
            category: 'ColorPicker'
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Disable ColorPicker',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ColorPicker'
        }
    },
    disabledAlpha: {
        name: 'disabledAlpha',
        description: 'Disable Alpha',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ColorPicker'
        }
    },
    destroyTooltipOnHide: {
        name: 'destroyTooltipOnHide',
        description: 'Whether destroy popover when hidden',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ColorPicker',
            defaultValue: {summary: false}
        },
        defaultValue: false
    },
    format: {
        name: 'format',
        description: 'Format of color',
        table: {
            type: {
                summary: 'rgb | hex | hsb'
            },
            category: 'ColorPicker',
            defaultValue: {summary: 'hex'}
        },
        defaultValue: false
    },
    open: {
        name: 'open',
        description: 'Whether to show popup',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'ColorPicker'
        }
    },
    presets: {
        name: 'presets',
        description: 'Preset colors',
        table: {
            type: {
                summary: '{ label: ReactNode, colors: Array<string | KitColor> }[]'
            },
            category: 'ColorPicker'
        }
    },
    placement: {
        name: 'placement',
        description: 'Placement of popup',
        table: {
            type: {
                summary: 'top | topLeft | topRight | bottom | bottomLeft | bottomRight'
            },
            category: 'ColorPicker',
            defaultValue: {summary: 'bottomLeft'}
        },
        defaultValue: false
    },
    panelRender: {
        name: 'panelRender',
        description: 'Custom Render Panel',
        table: {
            type: {
                summary:
                    '(panel: React.ReactNode, extra: { components: { Picker: FunctionComponent; Presets: FunctionComponent } }) => React.ReactNode'
            },
            category: 'ColorPicker'
        }
    },
    showText: {
        name: 'showText',
        description: 'Show color text',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | (color: Color) => React.ReactNode'
            },
            category: 'ColorPicker'
        }
    },
    trigger: {
        name: 'trigger',
        description: 'ColorPicker trigger mode',
        table: {
            type: {
                summary: 'hover | click'
            },
            category: 'ColorPicker',
            defaultValue: {summary: 'click'}
        },
        defaultValue: false
    },
    value: {
        name: 'value',
        description: 'Value of color',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string | KitColor'
            },
            category: 'ColorPicker'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback when value is changed',
        table: {
            type: {
                summary: '(value: Color, hex: string) => void'
            },
            category: 'ColorPicker'
        }
    },
    onChangeComplete: {
        name: 'onChangeComplete',
        description: 'Called when color pick ends',
        table: {
            type: {
                summary: '(value: Color) => void'
            },
            category: 'ColorPicker'
        }
    },
    onFormatChange: {
        name: 'onFormatChange',
        description: 'Callback when format is changed',
        table: {
            type: {
                summary: "(format: 'hex' | 'rgb' | 'hsb') => void"
            },
            category: 'ColorPicker'
        }
    },
    onOpenChange: {
        name: 'onOpenChange',
        description: 'Callback when open is changed',
        table: {
            type: {
                summary: '(open: boolean) => void'
            },
            category: 'ColorPicker'
        }
    },
    onClear: {
        name: 'onClear',
        description: 'Called when clear',
        table: {
            type: {
                summary: '() => void'
            },
            category: 'ColorPicker'
        }
    },
    onInfoClick: {
        name: 'onInfoClick',
        description: 'If set, show info icon, and set the handler to handle `click` event on it',
        options: ['-', 'log to console'],
        control: {type: 'select'},
        table: {
            type: {
                summary: '(e: MouseEvent<HTMLElement, MouseEvent>) => void;'
            },
            category: 'ColorPicker',
            defaultValue: {summary: '-'}
        },
        defaultValue: () => {}
    },
    wrapperClassName: {
        name: 'wrapperClassName',
        description: 'Component wrapper class name',
        table: {
            type: {
                summary: 'string'
            },
            category: 'ColorPicker'
        }
    }
};

export const recommendedColors = {
    label: 'Recommended',
    colors: [
        '#000000',
        '#000000E0',
        '#000000A6',
        '#00000073',
        '#00000040',
        '#00000026',
        '#0000001A',
        '#00000012',
        '#0000000A',
        '#00000005',
        '#F5222D',
        '#FA8C16',
        '#FADB14',
        '#8BBB11',
        '#52C41A',
        '#13A8A8',
        '#1677FF',
        '#2F54EB',
        '#722ED1',
        '#EB2F96',
        '#F5222D4D',
        '#FA8C164D',
        '#FADB144D',
        '#8BBB114D',
        '#52C41A4D',
        '#13A8A84D',
        '#1677FF4D',
        '#2F54EB4D',
        '#722ED14D',
        '#EB2F964D'
    ]
};

export const recentColors = {
    label: 'Recent',
    colors: []
};
