import React from 'react';
export declare const TooltipArgTypes: {
    title: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    align: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    arrow: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: boolean;
            };
        };
    };
    autoAdjustOverflow: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: boolean;
            };
        };
    };
    defaultOpen: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: boolean;
            };
        };
    };
    destroyTooltipOnHide: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: boolean;
            };
        };
    };
    getPopupContainer: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: string;
            };
        };
    };
    mouseEnterDelay: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: number;
            };
        };
    };
    mouseLeaveDelay: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: number;
            };
        };
    };
    placement: {
        name: string;
        description: string;
        options: string[];
        control: {
            type: string;
            defaultValue: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: string;
            };
        };
    };
    trigger: {
        name: string;
        description: string;
        options: string[];
        control: {
            type: string;
            defaultValue: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: string;
            };
        };
    };
    open: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
            defaultValue: {
                summary: boolean;
            };
        };
    };
    zIndex: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onOpenChange: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
};
export declare const Template: ({ component, ...args }: {
    [x: string]: any;
    component: any;
}) => React.JSX.Element;
