import React from 'react';
export declare const StepsArgTypes: {
    current: {
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
                summary: number;
            };
            category: string;
        };
    };
    direction: {
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
            defaultValue: {
                summary: string;
            };
            category: string;
        };
    };
    initial: {
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
                summary: number;
            };
            category: string;
        };
    };
    status: {
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
            defaultValue: {
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
    items: {
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
    };
    itemDescription: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
            subcategory: string;
        };
    };
    itemDisabled: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            defaultValue: {
                summary: boolean;
            };
            category: string;
            subcategory: string;
        };
    };
    itemStatus: {
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
            subcategory: string;
        };
    };
    itemTitle: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
            subcategory: string;
        };
    };
};
export declare const Template: ({ component, ...args }: {
    [x: string]: any;
    component: any;
}) => React.JSX.Element;
