import React from 'react';
export declare const mockData: {
    data: {
        basic: {
            title: string;
            key: string;
            children: ({
                title: string;
                key: string;
                disabled: boolean;
                children: ({
                    title: string;
                    key: string;
                    disableCheckbox: boolean;
                } | {
                    title: string;
                    key: string;
                    disableCheckbox?: undefined;
                })[];
            } | {
                title: string;
                key: string;
                children: {
                    title: string;
                    key: string;
                }[];
                disabled?: undefined;
            })[];
        }[];
        basicDefaultKeys: string[];
        icon: {
            title: string;
            key: string;
            icon: React.JSX.Element;
            children: {
                title: string;
                key: string;
                icon: React.JSX.Element;
                children: {
                    title: string;
                    key: string;
                    icon: React.JSX.Element;
                }[];
            }[];
        }[];
        line: {
            title: string;
            key: string;
            icon: React.JSX.Element;
            children: ({
                title: string;
                key: string;
                icon: React.JSX.Element;
                children: ({
                    title: string;
                    key: string;
                    icon: React.JSX.Element;
                } | {
                    title: React.JSX.Element;
                    key: string;
                    icon: React.JSX.Element;
                })[];
            } | {
                title: string;
                key: string;
                icon: React.JSX.Element;
                children: ({
                    title: string;
                    key: string;
                    icon: React.JSX.Element;
                    switcherIcon?: undefined;
                } | {
                    title: string;
                    key: string;
                    icon: React.JSX.Element;
                    switcherIcon: React.JSX.Element;
                })[];
            })[];
        }[];
        lineSelect: {
            value: string;
            label: string;
        }[];
    };
};
export declare const TreeArgTypes: {
    allowDrop: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    autoExpandParent: {
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
    checkable: {
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
    checkedKeys: {
        name: string;
        description: string;
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
    checkStrictly: {
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
    defaultCheckedKeys: {
        name: string;
        description: string;
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
    defaultExpandAll: {
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
    defaultExpandedKeys: {
        name: string;
        description: string;
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
    defaultExpandParent: {
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
    defaultSelectedKeys: {
        name: string;
        description: string;
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
    disabled: {
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
    expandedKeys: {
        name: string;
        description: string;
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
    fieldNames: {
        name: string;
        description: string;
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
    height: {
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
    loadData: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    loadedKeys: {
        name: string;
        description: string;
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
    multiple: {
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
    rootClassName: {
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
    rootStyle: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    selectable: {
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
    selectedKeys: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    showIcon: {
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
    showLine: {
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
    switcherIcon: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    titleRender: {
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
    treeData: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    virtual: {
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
    onCheck: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onExpand: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onLoad: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onRightClick: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    onSelect: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    nodeCheckable: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    nodeDisableCheckbox: {
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
    nodeDisabled: {
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
    nodeIcon: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    nodeIsLeaf: {
        name: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    nodeKey: {
        name: string;
        description: string;
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
    nodeSelectable: {
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
    nodeTitle: {
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
export declare const Template: ({ ...args }: {
    [x: string]: any;
}) => React.JSX.Element;
