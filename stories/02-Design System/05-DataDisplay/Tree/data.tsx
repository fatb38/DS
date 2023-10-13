import {KitTree} from '@kit/DataDisplay';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarCheck, faFile, faFolder, faPenToSquare} from '@fortawesome/free-regular-svg-icons';

const basicData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1'
                    }
                ]
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-1-0'
                    },
                    {
                        title: 'leaf',
                        key: '0-0-1-1'
                    }
                ]
            }
        ]
    }
];

const iconData = [
    {
        title: 'parent 1',
        key: '0-0',
        icon: <FontAwesomeIcon icon={faFolder} />,
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                icon: <FontAwesomeIcon icon={faFolder} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        icon: <FontAwesomeIcon icon={faFile} />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                        icon: <FontAwesomeIcon icon={faFile} />
                    }
                ]
            }
        ]
    }
];

const lineData = [
    {
        title: 'parent 1',
        key: '0-0',
        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: (
                            <>
                                <div>multiple line title</div>
                                <div>multiple line title</div>
                            </>
                        ),
                        key: '0-0-0-1',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-2',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    }
                ]
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-1-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    }
                ]
            },
            {
                title: 'parent 1-2',
                key: '0-0-2',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-2-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: 'leaf',
                        key: '0-0-2-1',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                        switcherIcon: <FontAwesomeIcon icon={faPenToSquare} />
                    }
                ]
            }
        ]
    },
    {
        title: 'parent 2',
        key: '0-1',
        icon: <FontAwesomeIcon icon={faCalendarCheck} />,
        children: [
            {
                title: 'parent 2-0',
                key: '0-1-0',
                icon: <FontAwesomeIcon icon={faCalendarCheck} />,
                children: [
                    {
                        title: 'leaf',
                        key: '0-1-0-0',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    },
                    {
                        title: 'leaf',
                        key: '0-1-0-1',
                        icon: <FontAwesomeIcon icon={faCalendarCheck} />
                    }
                ]
            }
        ]
    }
];

const lineSelectData = [
    {
        value: 'true',
        label: 'True'
    },
    {
        value: 'false',
        label: 'False'
    },
    {
        value: 'custom',
        label: 'Custom icon'
    }
];

export const mockData = {
    data: {
        basic: basicData,
        basicDefaultKeys: ['0-0-0', '0-0-1'],
        icon: iconData,
        line: lineData,
        lineSelect: lineSelectData
    }
};

export const argTypes = {
    allowDrop: {
        name: 'allowDrop',
        description: 'Whether to allow dropping on the node',
        table: {
            type: {
                summary: '({ dropNode, dropPosition }) => boolean'
            },
            category: 'Tree'
        }
    },
    autoExpandParent: {
        name: 'autoExpandParent',
        description: 'Whether to automatically expand a parent treeNode',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: false}
        }
    },
    checkable: {
        name: 'checkable',
        description: 'Add a Checkbox before the treeNodes',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: false}
        }
    },
    checkedKeys: {
        name: 'checkable',
        description:
            "(Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When `checkable` and `checkStrictly` is true, its object has `checked` and `halfChecked` property. Regardless of whether the child or parent treeNode is checked, they won't impact each other",
        table: {
            type: {
                summary: 'string[] | {checked: string[], halfChecked: string[]}'
            },
            category: 'Tree',
            defaultValue: {summary: '[]'}
        }
    },
    checkStrictly: {
        name: 'checkStrictly',
        description: 'Check treeNode precisely; parent treeNode and children treeNodes are not associated',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: false}
        }
    },
    defaultCheckedKeys: {
        name: 'defaultCheckedKeys',
        description: 'Specifies the keys of the default checked treeNodes',
        table: {
            type: {
                summary: 'string[]'
            },
            category: 'Tree',
            defaultValue: {summary: '[]'}
        }
    },
    defaultExpandAll: {
        name: 'defaultExpandAll',
        description: 'Whether to expand all treeNodes by default',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: false}
        }
    },
    defaultExpandedKeys: {
        name: 'defaultExpandedKeys',
        description: 'Specify the keys of the default expanded treeNodes',
        table: {
            type: {
                summary: 'string[]'
            },
            category: 'Tree',
            defaultValue: {summary: '[]'}
        }
    },
    defaultExpandParent: {
        name: 'defaultExpandParent',
        description: 'If auto expand parent treeNodes when init',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: true}
        }
    },
    defaultSelectedKeys: {
        name: 'defaultSelectedKeys',
        description: 'Specifies the keys of the default selected treeNodes',
        table: {
            type: {
                summary: 'string[]'
            },
            category: 'Tree',
            defaultValue: {summary: '[]'}
        }
    },
    disabled: {
        name: 'disabled',
        description: 'Whether disabled the tree',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: false}
        }
    },
    expandedKeys: {
        name: 'expandedKeys',
        description: '(Controlled) Specifies the keys of the expanded treeNodes',
        table: {
            type: {
                summary: 'string[]'
            },
            category: 'Tree',
            defaultValue: {summary: '[]'}
        }
    },
    fieldNames: {
        name: 'fieldNames',
        description: 'Customize node title, key, children field name',
        table: {
            type: {
                summary: 'object'
            },
            category: 'Tree',
            defaultValue: {
                summary: '{ title: title, key: key, children: children }'
            }
        }
    },
    height: {
        name: 'height',
        description: 'Config virtual scroll height. Will not support horizontal scroll when enable this',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            category: 'Tree'
        }
    },
    icon: {
        name: 'icon',
        description: 'Customize treeNode icon',
        table: {
            type: {
                summary: 'ReactNode | (props) => ReactNode'
            },
            category: 'Tree'
        }
    },
    loadData: {
        name: 'loadData',
        description: 'Load data asynchronously',
        table: {
            type: {
                summary: 'function(node)'
            },
            category: 'Tree'
        }
    },
    loadedKeys: {
        name: 'loadedKeys',
        description: '(Controlled) Set loaded tree nodes. Need work with `loadData`',
        table: {
            type: {
                summary: 'string[]'
            },
            category: 'Tree',
            defaultValue: {summary: '[]'}
        }
    },
    multiple: {
        name: 'multiple',
        description: 'Allows selecting multiple treeNodes',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: false}
        }
    },
    rootClassName: {
        name: 'rootClassName',
        description: 'ClassName on the root element',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            category: 'Tree'
        }
    },
    rootStyle: {
        name: 'rootStyle',
        description: 'Style on the root element',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            category: 'Tree'
        }
    },
    selectable: {
        name: 'selectable',
        description: 'Whether can be selected',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: true}
        }
    },
    selectedKeys: {
        name: 'selectedKeys',
        description:
            '(Controlled) Specifies the keys of the selected treeNodes, multiple selection needs to set multiple to true',
        table: {
            type: {
                summary: 'string[]'
            },
            category: 'Tree'
        }
    },
    showIcon: {
        name: 'showIcon',
        description:
            "Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to true",
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: false}
        }
    },
    showLine: {
        name: 'showLine',
        description: 'Shows a connecting line',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | {showLeafIcon: boolean | ReactNode | ((props: AntTreeNodeProps) => ReactNode)}'
            },
            category: 'Tree',
            defaultValue: {summary: false}
        }
    },
    switcherIcon: {
        name: 'switcherIcon',
        description: 'Customize collapse/expand icon of tree node',
        table: {
            type: {
                summary: 'ReactNode | ((props: AntTreeNodeProps) => ReactNode)'
            },
            category: 'Tree'
        }
    },
    titleRender: {
        name: 'titleRender',
        description: 'Customize tree node title render',
        control: {type: 'text'},
        table: {
            type: {
                summary: '(nodeData) => ReactNode'
            },
            category: 'Tree'
        }
    },
    treeData: {
        name: 'treeData',
        description:
            'The treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array)',
        table: {
            type: {
                summary: 'array<{ key, title, children, [disabled, selectable] }>'
            },
            category: 'Tree'
        }
    },
    virtual: {
        name: 'virtual',
        description: 'Disable virtual scroll when set to false',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'Tree',
            defaultValue: {summary: true}
        }
    },
    onCheck: {
        name: 'onCheck',
        description: 'Callback function for when the onCheck event occurs',
        table: {
            type: {
                summary: 'function(checkedKeys, e:{checked: bool, checkedNodes, node, event, halfCheckedKeys})'
            },
            category: 'Tree'
        }
    },
    onExpand: {
        name: 'onExpand',
        description: 'Callback function for when a treeNode is expanded or collapsed',
        table: {
            type: {
                summary: 'function(expandedKeys, {expanded: bool, node})'
            },
            category: 'Tree'
        }
    },
    onLoad: {
        name: 'onLoad',
        description: 'Callback function for when a treeNode is loaded',
        table: {
            type: {
                summary: 'function(loadedKeys, {event, node})'
            },
            category: 'Tree'
        }
    },
    onRightClick: {
        name: 'onRightClick',
        description: 'Callback function for when the user right clicks a treeNode',
        table: {
            type: {
                summary: 'function({event, node})'
            },
            category: 'Tree'
        }
    },
    onSelect: {
        name: 'onSelect',
        description: 'Callback function for when the user clicks a treeNode',
        table: {
            type: {
                summary: 'function(selectedKeys, e:{selected: bool, selectedNodes, node, event})'
            },
            category: 'Tree'
        }
    },
    nodeCheckable: {
        name: 'checkable',
        description: 'When Tree is checkable, set TreeNode display Checkbox or not',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'TreeNode'
        }
    },
    nodeDisableCheckbox: {
        name: 'disableCheckbox',
        description: 'Disables the checkbox of the treeNode',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'TreeNode',
            defaultValue: {summary: false}
        }
    },
    nodeDisabled: {
        name: 'disabled',
        description: 'Disables the treeNode',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'TreeNode',
            defaultValue: {summary: false}
        }
    },
    nodeIcon: {
        name: 'icon',
        description:
            'Customize icon. When you pass component, whose render will receive full TreeNode props as component props',
        table: {
            type: {
                summary: 'ReactNode | (props) => ReactNode'
            },
            category: 'TreeNode'
        }
    },
    nodeIsLeaf: {
        name: 'isLeaf',
        description:
            'Determines if this is a leaf node(effective when `loadData` is specified). `false` will force trade TreeNode as a parent node',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'TreeNode'
        }
    },
    nodeKey: {
        name: 'key',
        description:
            'Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree',
        table: {
            type: {
                summary: 'string'
            },
            category: 'TreeNode',
            defaultValue: {
                summary: '(internal calculated position of treeNode)'
            }
        }
    },
    nodeSelectable: {
        name: 'selectable',
        description: 'Set whether the treeNode can be selected',
        table: {
            type: {
                summary: 'boolean'
            },
            category: 'TreeNode',
            defaultValue: {summary: true}
        }
    },
    nodeTitle: {
        name: 'title',
        description: 'Title',
        table: {
            type: {
                summary: 'ReactNode'
            },
            category: 'TreeNode'
        }
    }
};

export const Template = args => {
    return <KitTree {...args} treeData={mockData.data.line} />;
};
