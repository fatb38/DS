import React from 'react';
export declare const mockData: {
    itemMenu: {
        title: {
            default: string;
            save: string;
            filters: string;
            quickFilters: string;
            layout: string;
            search: string;
            group: string;
            duplicate: string;
            undo: string;
            delete: string;
        };
        icon: {
            home: React.JSX.Element;
            save: React.JSX.Element;
            filters: React.JSX.Element;
            layout: React.JSX.Element;
            search: React.JSX.Element;
            group: React.JSX.Element;
            duplicate: React.JSX.Element;
            undo: React.JSX.Element;
            delete: React.JSX.Element;
        };
        actionsOne: {
            icon: React.JSX.Element;
            label: string;
            onClick: () => void;
        }[];
        actionsTwo: {
            icon: React.JSX.Element;
            label: string;
            onClick: () => void;
        }[];
        actionsMore: {
            icon: React.JSX.Element;
            label: string;
            onClick: () => void;
        }[];
        value: {
            default: string;
            layout: string;
            filters: string;
        };
        onSelectChange: (e: any) => void;
        onRafterClick: () => void;
        onClick: () => void;
    };
    menu: {
        title: string;
        segmentedButton: React.JSX.Element;
        primaryInput: React.JSX.Element;
        secondaryInput: React.JSX.Element;
        onCloseClick: () => void;
    };
};
export declare const argTypes: {
    showCloseButton: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    showSegmentedButton: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    showPrimaryInput: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    showSecondaryInput: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    showItemMenuIcon: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    showItemMenuActions: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    showItemMenuCheckbox: {
        name: string;
        description: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    showItemMenuRafter: {
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
    onCloseClick: {
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
    segmentedButton: {
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
    primaryInput: {
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
    secondaryInput: {
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
    itemMenuTitle: {
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
    itemMenuIcon: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    itemMenuValue: {
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
    itemMenuActions: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    isSelected: {
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
    itemMenuOnSelectChange: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    itemMenuOnRafterClick: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    itemMenuOnClick: {
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
export declare const Template: (args: any) => React.JSX.Element;
