import React, { ReactNode } from 'react';
export declare const items: ({
    title: string;
    menu?: undefined;
} | {
    title: React.JSX.Element;
    menu?: undefined;
} | {
    title: React.JSX.Element;
    menu: {
        items: {
            key: string;
            label: React.JSX.Element;
        }[];
    };
})[];
export declare const handleButtonClick: (e: any) => void;
export declare const handleMenuClick: (e: any) => void;
export declare const menuProps: {
    items: ({
        title: string;
        menu?: undefined;
    } | {
        title: React.JSX.Element;
        menu?: undefined;
    } | {
        title: React.JSX.Element;
        menu: {
            items: {
                key: string;
                label: React.JSX.Element;
            }[];
        };
    })[];
    onClick: (e: any) => void;
};
export declare const options: ({
    value: string;
    icon: React.JSX.Element;
    label: string;
    highlight?: undefined;
} | {
    value: string;
    icon: React.JSX.Element;
    label: string;
    highlight: boolean;
})[];
export declare const actions: ReactNode[];
export declare const breadcrumb: React.JSX.Element;
export declare const searchProps: {
    allowClear: boolean;
    placeholder: string;
};
export declare const title = "Campagne 1 - soldes rentr\u00E9e";
export declare const argTypes: {
    title: {
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
    search: {
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
    breadcrumb: {
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
    actions: {
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
    onPlusClick: {
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
        defaultValue: string;
    };
};
export declare const Template: ({ actions: showActions, breadcrumb: showBreadcrumb, onPlusClick, search, ...args }: {
    [x: string]: any;
    actions: any;
    breadcrumb: any;
    onPlusClick: any;
    search: any;
}) => React.JSX.Element;
