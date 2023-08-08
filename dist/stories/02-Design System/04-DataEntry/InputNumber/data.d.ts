import React from 'react';
export declare const InputNumberArgTypes: {
    autoFocus: {
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
        defaultValue: boolean;
    };
    controls: {
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
    decimalSeparator: {
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
    defaultValue: {
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
    disabled: {
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
        defaultValue: boolean;
    };
    formatter: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    keyboard: {
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
        defaultValue: boolean;
    };
    max: {
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
                summary: string;
            };
        };
        defaultValue: boolean;
    };
    min: {
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
                summary: string;
            };
        };
        defaultValue: boolean;
    };
    parser: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    precision: {
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
    readOnly: {
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
        defaultValue: boolean;
    };
    status: {
        name: string;
        description: string;
        options: string[];
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
    prefix: {
        name: string;
        description: string;
        type: {
            name: string;
            required: boolean;
        };
        options: string[];
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
    step: {
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
                summary: string;
            };
        };
        defaultValue: string;
    };
    stringMode: {
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
        defaultValue: boolean;
    };
    value: {
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
    onChange: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onPressEnter: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onStep: {
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
export declare const getIcon: (icon: any) => React.JSX.Element | null;
export declare const Template: ({ component, ...args }: {
    [x: string]: any;
    component: any;
}) => React.JSX.Element;
export declare const formatterDollar: (value: any) => string;
export declare const formatterPercent: (value: any) => string;
export declare const parserDollar: (value: any) => any;
export declare const parserPercent: (value: any) => any;
