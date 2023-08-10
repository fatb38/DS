import React from 'react';
export declare const SpaceArgTypes: {
    compact: {
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
        defaultValue: boolean;
    };
    align: {
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
    direction: {
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
    size: {
        name: string;
        control: {
            type: string;
        };
        options: (string | number)[];
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
    split: {
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
        defaultValue: string;
    };
    wrap: {
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
};
export declare const Template: ({ compact, ...args }: {
    [x: string]: any;
    compact: any;
}) => React.JSX.Element;
