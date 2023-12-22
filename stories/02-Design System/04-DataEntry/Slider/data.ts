const placement = [
    'top',
    'left',
    'right',
    'bottom',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
];

const SliderArgTypes = {
    autoAdjustOverflow: {
        name: 'autoAdjustOverflow',
        description: 'Whether to automatically adjust the popup position',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Slider'
        },
        defaultValue: true
    },
    autoFocus: {
        name: 'autoFocus',
        description: 'Whether get focus when component mounted',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Slider'
        },
        defaultValue: false
    },
    defaultValue: {
        name: 'defaultValue',
        description: 'The default value of slider. When `range` is false, use number, otherwise, use [number, number]',
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: '0 | [0, 0]'},
            category: 'Slider'
        },
        defaultValue: false
    },
    disabled: {
        name: 'disabled',
        description: 'If true, the slider will not be intractable',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Slider'
        },
        defaultValue: false
    },
    keyboard: {
        name: 'keyboard',
        description: 'Support using keyboard to move handlers',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Slider'
        },
        defaultValue: true
    },
    dots: {
        name: 'dots',
        description: 'Whether the thumb can drag over tick only',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Slider'
        },
        defaultValue: false
    },
    included: {
        name: 'included',
        description: 'Make effect when `marks` not null, true means containment and false means coordinative',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: true},
            category: 'Slider'
        },
        defaultValue: true
    },
    marks: {
        name: 'marks',
        description:
            'Tick mark of Slider, type of key must be `number`, and must in closed interval [min, max], each mark can declare its own style',
        table: {
            type: {
                summary: 'Object'
            },
            defaultValue: {summary: '{ number: ReactNode } | { number: { style: CSSProperties, label: ReactNode } }'},
            category: 'Slider'
        },
        defaultValue: '{ number: ReactNode } | { number: { style: CSSProperties, label: ReactNode } }'
    },
    max: {
        name: 'max',
        description: 'The maximum value the slider can slide to',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: 100},
            category: 'Slider'
        },
        defaultValue: 100
    },
    min: {
        name: 'min',
        description: 'The minimum value the slider can slide to',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {summary: 0},
            category: 'Slider'
        },
        defaultValue: 0
    },
    range: {
        name: 'range',
        description: 'Dual thumb mode',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Slider'
        },
        defaultValue: false
    },
    reverse: {
        name: 'reverse',
        description: 'Reverse the component',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Slider'
        },
        defaultValue: false
    },
    step: {
        name: 'step',
        description:
            'The granularity the slider can `step` through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, step can be null',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number | null'
            },
            defaultValue: {summary: 1},
            category: 'Slider'
        },
        defaultValue: 1
    },
    value: {
        name: 'value',
        description: 'The value of slider. When `range` is false, use number, otherwise, use [number, number]',
        table: {
            type: {
                summary: 'number | [number, number]'
            },
            category: 'Slider'
        }
    },
    onAfterChange: {
        name: 'onAfterChange',
        description: 'Fire when onmouseup is fired',
        table: {
            type: {
                summary: '(value) => void'
            },
            category: 'Slider'
        }
    },
    onChange: {
        name: 'onChange',
        description: "Callback function that is fired when the user changes the slider's value",
        table: {
            type: {
                summary: '(value) => void'
            },
            category: 'Slider'
        }
    }
};

const TooltipArgsType = {
    open: {
        name: 'open',
        control: {type: 'boolean'},
        description: 'If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Tooltip'
        },
        defaultValue: false
    },
    placement: {
        name: 'placement',
        description:
            'The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`',
        options: placement,
        control: {type: 'select'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'top'
            },
            category: 'Tooltip'
        },
        defaultValue: 'top'
    },
    getPopupContainer: {
        name: 'getPopupContainer',
        description: 'The DOM container of the Tooltip, the default behavior is to create a div element in body',
        table: {
            type: {
                summary: '(triggerNode) => HTMLElement'
            },
            defaultValue: {
                summary: '() => document.body'
            },
            category: 'Tooltip'
        },
        defaultValue: '() => document.body'
    },
    formatter: {
        name: 'formatter',
        description:
            'Slider will pass its value to `formatter`, and display its value in Tooltip, and hide Tooltip when return value is null',
        table: {
            type: {
                summary: 'value => ReactNode | null'
            },
            defaultValue: {
                summary: 'IDENTITY'
            },
            category: 'Tooltip'
        },
        defaultValue: 'IDENTITY'
    }
};

const RangeArgsType = {
    draggableTrack: {
        name: 'draggableTrack',
        control: {type: 'boolean'},
        description: 'Whether range track can be drag',
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {summary: false},
            category: 'Range'
        },
        defaultValue: false
    }
};

export const argTypes = {
    ...SliderArgTypes,
    ...RangeArgsType,
    ...TooltipArgsType
};
