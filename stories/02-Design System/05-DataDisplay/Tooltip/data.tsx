import React from 'react';
import {KitTooltip} from '@kit/DataDisplay/';
import {KitTypography} from '@kit/General/';
import {KitSpace} from '@kit/Layout/';

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

const trigger = ['hover', 'focus', 'click'];

export const argTypes = {
    title: {
        name: 'title',
        description: 'The text shown in the tooltip',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'ReactNode | () => ReactNode'
            },
            category: 'Tooltip'
        }
    },
    align: {
        name: 'align',
        description: "This value will be merged into placement's config, please refer to the settings rc-tooltip",
        table: {
            type: {
                summary: 'object'
            },
            category: 'Tooltip'
        }
    },
    arrow: {
        name: 'arrow',
        description: "Change arrow's visible state and change whether the arrow is pointed at the center of target",
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | { pointAtCenter: boolean }'
            },
            category: 'Tooltip',
            defaultValue: {summary: true}
        }
    },
    autoAdjustOverflow: {
        name: 'autoAdjustOverflow',
        description: 'Whether to adjust popup placement automatically when popup is off screen',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tooltip',
            defaultValue: {summary: true}
        }
    },
    defaultOpen: {
        name: 'defaultOpen',
        description: 'Whether the floating tooltip card is open by default',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tooltip',
            defaultValue: {summary: false}
        }
    },
    destroyTooltipOnHide: {
        name: 'destroyTooltipOnHide',
        description: 'Whether destroy tooltip when hidden',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tooltip',
            defaultValue: {summary: false}
        }
    },
    getPopupContainer: {
        name: 'getPopupContainer',
        description: 'The DOM container of the tip, the default behavior is to create a `div` element in `body`',
        table: {
            type: {
                summary: '(triggerNode: HTMLElement) => HTMLElement'
            },
            category: 'Tooltip',
            defaultValue: {summary: '() => document.body'}
        }
    },
    mouseEnterDelay: {
        name: 'mouseEnterDelay',
        description: 'Delay in seconds, before tooltip is shown on mouse enter',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Tooltip',
            defaultValue: {summary: 0.1}
        }
    },
    mouseLeaveDelay: {
        name: 'mouseLeaveDelay',
        description: 'Delay in seconds, before tooltip is hidden on mouse leave',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Tooltip',
            defaultValue: {summary: 0.1}
        }
    },
    placement: {
        name: 'placement',
        description:
            'The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`',
        options: placement,
        control: {
            type: 'select',
            defaultValue: 'top'
        },
        table: {
            type: {
                summary: 'string'
            },
            category: 'Tooltip',
            defaultValue: {summary: 'top'}
        }
    },
    trigger: {
        name: 'trigger',
        description: 'Tooltip trigger mode. Could be multiple by passing an array',
        options: trigger,
        control: {
            type: 'select',
            defaultValue: 'hover'
        },
        table: {
            type: {
                summary: 'hover | focus | click | contextMenu | Array<string>'
            },
            category: 'Tooltip',
            defaultValue: {summary: 'hover'}
        }
    },
    open: {
        name: 'open',
        description: 'Whether the floating tooltip card is open or not',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tooltip',
            defaultValue: {summary: true}
        }
    },
    zIndex: {
        name: 'zIndex',
        description: 'Config z-index of Tooltip',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Tooltip'
        }
    },
    onOpenChange: {
        name: 'onOpenChange',
        description: 'Callback executed when visibility of the tooltip card is changed',
        table: {
            type: {
                summary: '(open: boolean) => void'
            },
            category: 'Tooltip'
        }
    }
};

export const Template = (args) => {
    const {component, ...props} = args;
    return (
        <KitSpace>
            <KitTooltip title="Default value" {...props}>
                <KitTypography.Paragraph size="medium" weight="regular">
                    Tooltip will show on mouse enter.
                </KitTypography.Paragraph>
            </KitTooltip>
        </KitSpace>
    );
};
