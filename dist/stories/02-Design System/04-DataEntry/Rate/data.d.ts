import React from 'react';
export declare const RateArgTypes: {
    allowClear: {
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
    allowHalf: {
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
    color: {
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
    };
    character: {
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
    count: {
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
            defaultValue: {
                summary: number;
            };
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
    };
    tooltips: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
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
    onBlur: {
        name: string;
        description: string;
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
    onFocus: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onHoverChange: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onKeyDown: {
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
export declare const charsNumber: ({ index }: {
    index: number;
}) => number;
export declare const charsIcons: ({ index }: {
    index: number;
}) => React.ReactNode;
export declare const Template: ({ ...args }: {
    [x: string]: any;
}) => React.JSX.Element;
