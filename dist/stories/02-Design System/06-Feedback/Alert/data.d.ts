import React from 'react';
export declare const AlertArgTypes: {
    type: {
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
        };
    };
    message: {
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
    description: {
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
    closable: {
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
    banner: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            defaultValue: {
                summary: boolean;
            };
            category: string;
        };
    };
    showIcon: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            type: {
                summary: string;
            };
            defaultValue: {
                summary: string;
            };
            category: string;
        };
    };
    afterClose: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onClose: {
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
