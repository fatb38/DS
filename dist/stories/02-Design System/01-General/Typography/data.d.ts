import React from 'react';
export declare const argTypes: {
    component: {
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
        };
        defaultValue: string;
    };
    content: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
        };
        defaultValue: string;
    };
    disabled: {
        name: string;
        control: {
            type: string;
        };
        description: string;
        table: {
            type: {
                summary: string;
            };
            defaultValue: {
                summary: boolean;
            };
            category: string;
        };
        defaultValue: boolean;
    };
    ellipsis: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            defaultValue: boolean;
            category: string;
        };
        defaultValue: boolean;
    };
    level: {
        name: string;
        description: string;
        options: number[];
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            defaultValue: number;
            category: string;
        };
        defaultValue: number;
    };
    copyable: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            defaultValue: boolean;
            category: string;
        };
        defaultValue: boolean;
    };
    onClick: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            defaultValue: {
                summary: string;
            };
            category: string;
        };
        defaultValue: () => void;
    };
    type: {
        name: string;
        description: string;
        options: string[];
        control: {
            type: string;
            required: boolean;
        };
        table: {
            type: {
                summary: string;
            };
            defaultValue: string;
            category: string;
        };
        defaultValue: string;
    };
    weight: {
        name: string;
        description: string;
        options: string[];
        control: {
            type: string;
            required: boolean;
        };
        table: {
            type: {
                summary: string;
            };
            defaultValue: string;
            category: string;
        };
        defaultValue: string;
    };
    size: {
        name: string;
        description: string;
        options: string[];
        control: {
            type: string;
            required: boolean;
        };
        table: {
            type: {
                summary: string;
            };
            defaultValue: string;
            category: string;
        };
        defaultValue: string;
    };
};
export declare const Template: ({ component, content, ...args }: {
    [x: string]: any;
    component: any;
    content: any;
}) => React.JSX.Element;
