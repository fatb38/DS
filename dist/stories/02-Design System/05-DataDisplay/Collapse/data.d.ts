import React from 'react';
export declare const CollapseArgTypes: {
    accordion: {
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
    activeKey: {
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
    };
    collapsible: {
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
    defaultActiveKey: {
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
    destroyInactivePanel: {
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
    expandIcon: {
        name: string;
        description: string;
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
    size: {
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
            category: string;
        };
    };
};
export declare const mockData: {
    items: {
        defaultActiveKey: string;
        default: ({
            key: string;
            label: string;
            children: React.JSX.Element;
            isActive?: undefined;
        } | {
            key: string;
            label: string;
            children: React.JSX.Element;
            isActive: boolean;
        })[];
        extra: ({
            key: string;
            label: string;
            children: React.JSX.Element;
            extra: React.JSX.Element;
            isActive?: undefined;
        } | {
            key: string;
            label: string;
            children: React.JSX.Element;
            isActive: boolean;
            extra: React.JSX.Element;
        })[];
        nested: {
            key: string;
            label: string;
            children: React.JSX.Element;
        }[];
        light: {
            key: string;
            label: string;
            children: React.JSX.Element;
        }[];
        complex: {
            key: string;
            label: React.JSX.Element;
            children: React.JSX.Element;
            extra: React.JSX.Element;
        }[];
    };
};
export declare const Template: ({ ...args }: {
    [x: string]: any;
}) => React.JSX.Element;
