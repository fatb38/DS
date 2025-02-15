export const argTypes = {
    allowClear: {
        name: 'allowClear',
        description: 'Whether to allow clear when click again',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Rate',
            defaultValue: {summary: true}
        }
    },
    allowHalf: {
        name: 'allowHalf',
        description: 'Whether to allow semi selection',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Rate',
            defaultValue: {summary: true}
        }
    },
    color: {
        name: 'color',
        control: {type: 'color'},
        description: 'Set a color',
        table: {
            type: {
                summary:
                    '`hexadecimal` | `rgb` | `hsl` | `yellow` | `pink` | `warning` | `error` | `success` | `primary`'
            },
            category: 'Rate'
        }
    },
    autoFocus: {
        name: 'autoFocus',
        description: 'If get focus when component mounted',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Rate',
            defaultValue: {summary: false}
        }
    },
    defaultIcon: {
        name: 'defaultIcon',
        description: 'Default rate icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Rate',
            defaultValue: {summary: '<FontAwesomeIcon icon={faStar} />  [from regular]'}
        }
    },
    halfIcon: {
        name: 'halfIcon',
        description: 'Half rate icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Rate',
            defaultValue: {summary: '<FontAwesomeIcon icon={faStarHalfStroke} /> [from regular]'}
        }
    },
    activeIcon: {
        name: 'activeIcon',
        description: 'Active rate icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'Rate',
            defaultValue: {summary: '<FontAwesomeIcon icon={faStar} /> [from solid]'}
        }
    },
    count: {
        name: 'count',
        description: 'Star count',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Rate',
            defaultValue: {summary: 5}
        }
    },
    defaultValue: {
        name: 'defaultValue',
        description: 'The default value',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Rate',
            defaultValue: {summary: 0}
        }
    },
    disabled: {
        name: 'disabled',
        description: 'If read only, unable to interact',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Rate',
            defaultValue: {summary: false}
        }
    },
    tooltips: {
        name: 'tooltips',
        description: 'Customize tooltip by each character',
        table: {
            type: {
                summary: 'string[]'
            },
            category: 'Rate'
        }
    },
    value: {
        name: 'value',
        description: 'The current value',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Rate'
        }
    },
    onBlur: {
        name: 'onBlur',
        description: 'Callback when component lose focus',
        table: {
            type: {
                summary: 'function()'
            },
            category: 'Rate'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback when select value',
        table: {
            type: {
                summary: 'function(value: number)'
            },
            category: 'Rate'
        }
    },
    onFocus: {
        name: 'onFocus',
        description: 'Callback when component get focus',
        table: {
            type: {
                summary: 'function()'
            },
            category: 'Rate'
        }
    },
    onHoverChange: {
        name: 'onHoverChange',
        description: 'Callback when hover item',
        table: {
            type: {
                summary: 'function(value: number)'
            },
            category: 'Rate'
        }
    },
    onKeyDown: {
        name: 'onKeyDown',
        description: 'Callback when keydown on component',
        table: {
            type: {
                summary: 'function(event)'
            },
            category: 'Rate'
        }
    }
};
