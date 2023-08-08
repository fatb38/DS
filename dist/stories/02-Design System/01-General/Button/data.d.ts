import React from 'react';
export declare const ButtonArgTypes: {
    block: {
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
    danger: {
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
    href: {
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
    };
    htmlType: {
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
    };
    icon: {
        name: string;
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
            defaultValue: {
                summary: string;
            };
            category: string;
        };
        description: string;
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
    target: {
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
    type: {
        name: string;
        options: string[];
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
    subtypeSegmented: {
        name: string;
        options: string[];
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
    isActiveSegmented: {
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
    isCheckedSegmented: {
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
    bigIcon: {
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
export declare const getIcon: ({ icon }: {
    icon: any;
}) => React.JSX.Element | null;
export declare const Template: (args: any) => React.JSX.Element;
