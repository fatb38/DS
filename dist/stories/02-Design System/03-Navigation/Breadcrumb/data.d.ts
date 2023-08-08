import React from 'react';
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
export declare const argTypes: {
    items: {
        name: string;
        control: {
            type: string;
            value: ({
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
    separator: {
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
    };
};
export declare const Template: ({ items, separator }: {
    items: any;
    separator: any;
}) => React.JSX.Element;
