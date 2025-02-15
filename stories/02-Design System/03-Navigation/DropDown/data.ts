const DropDownArgTypes = {
    arrow: {
        name: 'arrow',
        control: {type: 'boolean'},
        description: 'Whether the DropDown arrow should be visible',
        table: {
            type: {
                summary: 'boolean | { pointAtCenter: boolean }'
            },
            defaultValue: {summary: false},
            category: 'DropDown'
        },
        defaultValue: false
    },
    autoAdjustOverflow: {
        name: 'autoAdjustOverflow',
        control: {type: 'boolean'},
        description: ' Whether to adjust DropDown placement automatically when DropDown is off screen ',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'DropDown'
        },
        defaultValue: true
    },
    autoFocus: {
        name: 'autoFocus',
        control: {type: 'boolean'},
        description: 'Focus element in `overlay` when opened',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'DropDown'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        control: {type: 'boolean'},
        description: 'Whether the DropDown menu is disabled',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown'
        },
        defaultValue: false
    },
    destroyPopupOnHide: {
        name: 'destroyPopupOnHide',
        control: {type: 'boolean'},
        description: 'Whether destroy DropDown when hidden',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'DropDown'
        },
        defaultValue: false
    },
    DropDownRender: {
        name: 'DropDownRender',
        description: 'Customize DropDown content',
        table: {
            type: {
                summary: '(menus: ReactNode) => ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown'
        }
    },
    getPopupContainer: {
        name: 'getPopupContainer',
        description:
            'To set the container of the DropDown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. [Example on CodePen](https://codepen.io/aFunctionComponent163/pen/zEjNOy?editors=0010) ',
        table: {
            type: {
                summary: '(triggerNode: HTMLElement) => HTMLElement | () => document.body'
            },
            category: 'DropDown'
        }
    },
    menu: {
        name: 'menu',
        control: {type: 'string'},
        description: 'The menu props',
        table: {
            type: {
                summary: 'menuProps'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown'
        }
    },
    overlayClassName: {
        name: 'overlayClassName',
        control: {type: 'string'},
        description: 'The class name of the DropDown root element',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown'
        }
    },
    overlayStyle: {
        name: 'overlayStyle',
        control: {type: 'string'},
        description: 'The style of the DropDown root element',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown'
        }
    },
    placement: {
        name: 'placement',
        options: ['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight'],
        control: {type: 'select'},
        description: 'Placement of popup menu: bottom | bottomLeft | bottomRight | top | topLeft | topRight',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'bottomLeft'},
            category: 'DropDown'
        },
        defaultValue: 'bottomLeft'
    },
    trigger: {
        name: 'trigger',
        options: ['click', 'hover', 'contextMenu'],
        control: {type: 'select'},
        description:
            "The trigger mode which executes the DropDown action. Note that hover can't be used on touchscreens: click | hover | contextMenu",
        table: {
            type: {
                summary: 'Array<click|hover|contextMenu>'
            },
            defaultValue: {summary: '[hover]'},
            category: 'DropDown'
        }
    },
    open: {
        name: 'open',
        control: {type: 'boolean'},
        description:
            'Whether the dropdown menu is currently open. Use `visible` under 4.23.0 ([why?](/docs/react/faq#why-open))',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown'
        }
    },
    onOpenChange: {
        name: 'onOpenChange',
        description:
            'Called when the open state is changed. Not trigger when hidden by click item. Use `onVisibleChange` under 4.23.0 ([why?](/docs/react/faq#why-open))',
        table: {
            type: {
                summary: '(open: boolean) => void'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown'
        }
    }
};

/*
// Keep this block, in may beconme handy later
const DropDownButtonArgTypes = {
    buttonsRender: {
        name: 'buttonsRender',
        description: 'Custom buttons inside Dropdown.Button',
        table: {
            type: {
                summary: '(buttons: ReactNode[]) => ReactNode[]'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown.Button'
        }
    },
    loading: {
        name: 'loading',
        description: 'Set the loading status of button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'DropDown.Button'
        }
    },
    danger: {
        name: 'danger',
        description: 'Set the danger status of button',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown.Button'
        }
    },
    icon: {
        name: 'icon',
        description: 'Icon (appears on the right)',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown.Button'
        }
    },
    size: {
        name: 'size',
        description: 'Size of the button, the same as [Button]',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'default'},
            category: 'DropDown.Button'
        }
    },
    type: {
        name: 'type',
        description: 'Type of the button, the same as [Button]',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'default'},
            category: 'DropDown.Button'
        }
    },
    onClick: {
        name: 'onClick',
        description: 'The same as [Button]: called when you click the button on the left ',
        table: {
            type: {
                summary: '(event) => void'
            },
            defaultValue: {summary: '-'},
            category: 'DropDown.Button'
        }
    }
};*/

export const argTypes = {
    ...DropDownArgTypes
    // ...DropDownButtonArgTypes // Keep this line, as it may come in handy later.
};
