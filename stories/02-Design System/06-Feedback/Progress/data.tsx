import React from 'react';
import {KitProgress} from '@kit/Feedback/';

export const argTypes = {
    type: {
        name: 'type',
        description: 'To set the type, options: `line` `circle` `dashboard`',
        options: ['line', 'circle', 'dashboard'],
        control: {
            type: 'select',
            defaultValue: 'line'
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'line'
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    format: {
        name: 'format',
        description: 'The template function of the content',
        table: {
            type: {
                summary: 'function(percent, successPercent)'
            },
            defaultValue: {
                summary: '(percent) => percent + `%`'
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    percent: {
        name: 'percent',
        description: 'To set the completion percentage',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 0
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    showInfo: {
        name: 'showInfo',
        description: 'Whether to display the progress value and the status icon ',
        control: {
            type: 'boolean',
            defaultValue: true
        },
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: true
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    status: {
        name: 'status',
        description: 'To set the status of the Progress, options: `success` `exception` `normal` `active`(line only)',
        options: ['success', 'exception', 'normal', 'active'],
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    strokeColor: {
        name: 'strokeColor',
        description: 'The color of progress bar. See each type for details about the possible values',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: '-`'
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    strokeLinecap: {
        name: 'strokeLinecap',
        description: 'To set the style of the progress linecap',
        options: ['round', 'butt', 'square'],
        control: {
            type: 'select',
            defaultValue: 'round'
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'round'
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    success: {
        name: 'success',
        description: 'Configs of successfully progress bar',
        control: {
            type: 'object'
        },
        table: {
            type: {
                summary: '{ percent: number, strokeColor: string }'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    trailColor: {
        name: 'trailColor',
        description: 'The color of unfilled part',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    size: {
        name: 'size',
        description: 'Progress size',
        control: {
            type: 'text'
        },
        table: {
            type: {
                summary: 'number | [number, number] | "small" | "default"'
            },
            defaultValue: {
                summary: 'default'
            },
            category: 'Progress',
            subcategory: 'Common (to all types)'
        }
    },
    steps: {
        name: 'steps',
        description: 'The total step count',
        control: {
            type: 'number'
        },
        table: {
            type: {
                summary: 'number '
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Progress',
            subcategory: 'Line Type'
        }
    },
    lineStrokeColor: {
        name: 'strokeColor',
        description:
            'The color of progress bar, render `linear-gradient` when passing an object, could accept `string[]` when has `steps`.',
        table: {
            type: {
                summary: 'string | string[] | { from: string; to: string; direction: string }'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Progress',
            subcategory: 'Line Type'
        }
    },
    circleStrokeColor: {
        name: 'strokeColor',
        description: 'The color of circular progress, render `linear-gradient` when passing an object',
        table: {
            type: {
                summary: 'string | object'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Progress',
            subcategory: 'Circle Type'
        }
    },
    strokeWidth: {
        name: 'strokeWidth',
        description: 'To set the width of the circular progress, unit: percentage of the canvas width',
        control: {
            type: 'number',
            defaultValue: 6
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 6
            },
            category: 'Progress',
            subcategory: 'Circle Type'
        }
    },
    dashboardStrokeWidth: {
        name: 'strokeWidth',
        description: 'To set the width of the dashboard progress, unit: percentage of the canvas width',
        control: {
            type: 'number',
            defaultValue: 6
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 6
            },
            category: 'Progress',
            subcategory: 'Dashboard Type'
        }
    },
    gapDegree: {
        name: 'gapDegree',
        description: 'The gap degree of half circle, 0 ~ 295',
        control: {
            type: 'number',
            defaultValue: 75
        },
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: 75
            },
            category: 'Progress',
            subcategory: 'Dashboard Type'
        }
    },
    gapPosition: {
        name: 'gapPosition',
        description: 'The gap position, options: `top` `bottom` `left` `right`',
        options: ['top', 'bottom', 'left', 'right'],
        control: {
            type: 'select',
            defaultValue: 'bottom'
        },
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'bottom'
            },
            category: 'Progress',
            subcategory: 'Dashboard Type'
        }
    }
};

export const Template = (args) => {
    return <KitProgress {...args} />;
};
