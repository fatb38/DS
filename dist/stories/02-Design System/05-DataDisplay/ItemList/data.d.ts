import React from 'react';
export declare const mockData: {
    base: {
        title: string;
        description: string;
    };
    long: {
        title: string;
        description: string;
    };
    tag: number;
    image: React.JSX.Element;
    icon: React.JSX.Element;
    onSelectChange: (e: any) => void;
    onRafterClick: () => void;
    onClick: () => void;
};
export declare const ItemListArgTypes: {
    displayCheckbox: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    displayRafter: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    itemListClickable: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
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
    picture: {
        name: string;
        description: string;
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
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    tagNumber: {
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
    onRafterClick: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    isDisabled: {
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
    onClick: {
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
