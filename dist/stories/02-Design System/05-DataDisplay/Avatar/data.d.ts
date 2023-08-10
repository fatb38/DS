import React from 'react';
export declare const AvatarArgTypes: {
    alt: {
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
    gap: {
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
    icon: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    shape: {
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
    size: {
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
    src: {
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
    srcSet: {
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
    draggable: {
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
    crossOrigin: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onError: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    maxCount: {
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
    maxPopoverPlacement: {
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
    maxPopoverTrigger: {
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
    sizeGroup: {
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
};
export declare const Template: ({ component, ...args }: {
    [x: string]: any;
    component: any;
}) => React.JSX.Element;
