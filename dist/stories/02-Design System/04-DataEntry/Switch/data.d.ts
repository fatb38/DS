import React from 'react';
export declare const argTypes: {
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
    autoFocus: {
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
    checked: {
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
    defaultChecked: {
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
    loading: {
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
    onChange: {
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
};
export declare const getIcon: (value: any) => React.JSX.Element | null;
export declare const Template: ({ checkedChildren, unCheckedChildren, ...args }: {
    [x: string]: any;
    checkedChildren: any;
    unCheckedChildren: any;
}) => React.JSX.Element;
