import React from 'react';
import KitCardProps from '../../../../src/Kit/DataDisplay/Card/types';
export declare const fakeContent: {
    base: {
        title: string;
        description: string;
        extrainfo: string;
    };
    colors: {
        label: string;
        color: string;
    }[];
    tags: string[];
    image: React.JSX.Element;
    icon: React.JSX.Element;
    avatar: React.JSX.Element;
    onSeectChange: string;
    onEdit: string;
    actions: React.JSX.Element[];
};
export declare const CardArgTypes: {
    vertical: {
        name: string;
        description: string;
        type: {
            name: string;
            required: boolean;
        };
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
    disabled: {
        name: string;
        description: string;
        type: {
            name: string;
            required: boolean;
        };
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
    picture: {
        name: string;
        description: string;
        options: string[];
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
    colors: {
        name: string;
        description: string;
        type: {
            name: string;
            required: boolean;
        };
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
    title: {
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
    extrainfo: {
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
    tags: {
        name: string;
        description: string;
        type: {
            name: string;
            required: boolean;
        };
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
    actions: {
        name: string;
        description: string;
        type: {
            name: string;
            required: boolean;
        };
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
    onSelectChange: {
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
        defaultValue: () => void;
    };
    onEdit: {
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
        defaultValue: () => void;
    };
};
export declare const Template: ({ colors, picture, tags, actions, ...args }: KitCardProps) => React.JSX.Element;
