export const argTypes = {
    gridMenuOpen: {
        name: 'menuOpen',
        description: 'Wether to display the menuOpen cols configration or not',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Grid'
        },
        defaultValue: '-'
    },
    sideMenuProps: {
        name: 'sideMenuProps',
        description: 'Props to display a SideMenu',
        table: {
            type: {
                summary: 'IKitSideMenu'
            },
            defaultValue: {summary: '-'},
            category: 'Grid'
        },
        defaultValue: '-'
    },
    gridRowGap: {
        name: 'rowGap',
        description: 'gap beetween row element. Optinal. Defaults to --general-spacing-xs',
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: '-'},
            category: 'Grid'
        },
        defaultValue: '-'
    },
    gridBreakpoint: {
        name: 'breakpoint',
        description: 'which breakpoint to use. Default is auto (use mediaQueries to automatically set the breakpoint)',
        options: ['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxl'],
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'auto'},
            category: 'Grid'
        },
        defaultValue: 'auto'
    },
    gridClassName: {
        name: 'className',
        description: 'Additional class name',
        control: false,
        table: {
            disable: true,
            category: 'Grid'
        }
    },
    gridChildren: {
        name: 'children',
        description: 'Additional class name',
        control: false,
        table: {
            disable: true,
            category: 'Grid'
        }
    },
    gridStyle: {
        name: 'style',
        description: 'Additional class name',
        control: false,
        table: {
            disable: true,
            category: 'Grid'
        }
    },
    menuOpen: {
        name: 'menuOpen',
        description: 'Wether to display the menuOpen cols configration or not',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Row'
        },
        defaultValue: '-'
    },
    breakpoint: {
        name: 'breakpoint',
        description: 'which breakpoint to use. Default is auto (use mediaQueries to automatically set the breakpoint)',
        options: ['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxl'],
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'auto'},
            category: 'Row'
        },
        defaultValue: 'auto'
    },
    rowGap: {
        name: 'gap',
        description: 'veretical gap between Col elements when wrapped. Optinal. Defaults to --general-spacing-xs',
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: '-'},
            category: 'Row'
        },
        defaultValue: '-'
    },
    align: {
        name: 'align',
        description: 'Vertical alignement of all `Col` children',
        options: ['start', 'center', 'end'],
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Row'
        },
        defaultValue: '-'
    },
    className: {
        name: 'className',
        description: 'Additional class name',
        control: false,
        table: {
            disable: true,
            category: 'Row'
        }
    },
    children: {
        name: 'children',
        description: 'Additional class name',
        control: false,
        table: {
            disable: true,
            category: 'Row'
        }
    },
    style: {
        name: 'style',
        description: 'Additional class name',
        control: false,
        table: {
            disable: true,
            category: 'Row'
        }
    },
    span: {
        name: 'span',
        description: 'Specify how many columns the component should span. Default is auto',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'auto'},
            category: 'Col'
        },
        defaultValue: 'auto'
    },
    col: {
        name: 'col',
        description: 'Specify which column the component should be attached to. Default is auto',
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: 'auto'},
            category: 'Col'
        },
        defaultValue: 'auto'
    },
    fullWidth: {
        name: 'fullWidth',
        description: 'when set to `true`, the component will span the full width of the grid',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: 'auto'},
            category: 'Col'
        },
        defaultValue: 'false'
    },
    alignSelf: {
        name: 'alignSelf',
        description: 'Vertical alignement the component',
        options: ['start', 'center', 'end'],
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    flex: {
        name: 'flex',
        description: 'Wether the component should be a flex container or not',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    ColAlign: {
        name: 'align',
        description: "Vertical alignment of the component's content. `flex` option must be `true`",
        options: ['start', 'center', 'end'],
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    justify: {
        name: 'justify',
        description: "Horizontal alignment of the component's content. `flex` option must be `true`",
        options: ['start', 'center', 'end'],
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {summary: '-'},
            category: 'Col'
        },
        defaultValue: '-'
    },
    colClassName: {
        name: 'className',
        description: 'Additional class name',
        control: false,
        table: {
            disable: true,
            category: 'Col'
        }
    },
    colChildren: {
        name: 'children',
        description: 'Additional class name',
        control: false,
        table: {
            disable: true,
            category: 'Col'
        }
    },
    colStyle: {
        name: 'style',
        description: 'Additional class name',
        control: false,
        table: {
            disable: true,
            category: 'Col'
        }
    }
};
