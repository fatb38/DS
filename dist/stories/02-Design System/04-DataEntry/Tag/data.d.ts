import React from 'react';
export declare const argTypes: {
    label: {
        name: string;
        control: {
            type: string;
            value: string;
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
    tagInput: {
        name: string;
        control: {
            type: string;
        };
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
            subcategory: string;
        };
    };
    closable: {
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
    onClose: {
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
    options: {
        name: string;
        description: string;
        control: {
            type: string;
            value: string;
        };
        table: {
            type: {
                summary: string;
            };
            defaultValue: {
                summary: null;
            };
            category: string;
        };
    };
    value: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            defaultValue: {
                summary: null;
            };
            category: string;
        };
    };
    placeholder: {
        name: string;
        control: {
            type: string;
            value: string;
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
    tokenSeparators: {
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
    notFoundContent: {
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
    placement: {
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
    };
    onSearch: {
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
};
export declare const Template: ({ label, tagInput, ...args }: {
    [x: string]: any;
    label: any;
    tagInput: any;
}) => React.JSX.Element;
