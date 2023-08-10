import React from 'react';
export declare const DividerArgTypes: {
    dashed: {
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
                summary: string;
            };
            category: string;
        };
        defaultValue: boolean;
    };
    orientation: {
        name: string;
        control: {
            type: string;
        };
        options: string[];
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
        defaultValue: string;
    };
    orientationMargin: {
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
                summary: string;
            };
            category: string;
        };
        defaultValue: string;
    };
    type: {
        name: string;
        control: {
            type: string;
        };
        options: string[];
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
        defaultValue: string;
    };
    noMargin: {
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
    color: {
        name: string;
        control: {
            type: string;
        };
        options: string[];
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
        defaultValue: string;
    };
    label: {
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
                summary: string;
            };
            category: string;
            subcategory: string;
        };
        defaultValue: string;
    };
};
export declare const Template: ({ label, ...args }: {
    [x: string]: any;
    label: any;
}) => React.JSX.Element;
