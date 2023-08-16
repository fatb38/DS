import React from 'react';
import {KitTabs} from '@kit/DataDisplay/';

export const TabsArgTypes = {
    activeKey: {
        name: 'activeKey',
        description: "Current TabPane's key",
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Tabs'
        }
    },
    addIcon: {
        name: 'addIcon',
        description: 'Customize add icon',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Tabs'
        }
    },
    animated: {
        name: 'animated',
        description: 'Whether to change tabs with animation. Only works while `tabPosition="top"`',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean | { inkBar: boolean, tabPane: boolean }'
            },
            defaultValue: {
                summary: '{ inkBar: true, tabPane: false }'
            },
            category: 'Tabs'
        }
    },
    centered: {
        name: 'centered',
        description: 'Centers tabs',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Tabs'
        }
    },
    defaultActiveKey: {
        name: 'defaultActiveKey',
        description: "Initial active TabPane's key, if `activeKey` is not set",
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Tabs'
        }
    },
    hideAdd: {
        name: 'hideAdd',
        description: 'Hide plus icon or not. Only works while `type="editable-card"`',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Tabs'
        }
    },
    items: {
        name: 'items',
        description: 'Configure tab content',
        table: {
            type: {
                summary: 'TabItemType | []'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Tabs'
        }
    },
    moreIcon: {
        name: 'moreIcon',
        description: 'The custom icon of ellipsis',
        table: {
            type: {
                summary: 'ReactNode'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Tabs'
        }
    },
    popupClassName: {
        name: 'popupClassName',
        description: '`className` for more dropdown.',
        control: {type: 'text'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Tabs'
        }
    },
    renderTabBar: {
        name: 'renderTabBar',
        description: 'Replace the TabBar',
        table: {
            type: {
                summary: '(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement'
            },
            defaultValue: {
                summary: false
            },
            category: 'Tabs'
        }
    },
    size: {
        name: 'size',
        description: 'Preset tab bar size',
        options: ['large', 'middle', 'small'],
        control: {type: 'select'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'middle'
            },
            category: 'Tabs'
        }
    },
    tabBarExtraContent: {
        name: 'tabBarExtraContent',
        description: 'Extra content in tab bar',
        table: {
            type: {
                summary: 'ReactNode | {left?: ReactNode, right?: ReactNode}'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Tabs'
        }
    },
    tabBarGutter: {
        name: 'tabBarGutter',
        description: 'The gap between tabs',
        control: {type: 'number'},
        table: {
            type: {
                summary: 'number'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Tabs'
        }
    },
    tabBarStyle: {
        name: 'tabBarStyle',
        description: 'Tab bar style object',
        table: {
            type: {
                summary: 'CSSProperties'
            },
            defaultValue: {
                summary: '-'
            },
            category: 'Tabs'
        }
    },
    tabPosition: {
        name: 'tabPosition',
        description: 'Position of tabs',
        options: ['top', 'right', 'bottom', 'left'],
        control: {type: 'select'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'top'
            },
            category: 'Tabs'
        }
    },
    destroyInactiveTabPane: {
        name: 'destroyInactiveTabPane',
        description: 'Whether destroy inactive TabPane when change tab',
        control: {type: 'boolean'},
        table: {
            type: {
                summary: 'boolean'
            },
            defaultValue: {
                summary: false
            },
            category: 'Tabs'
        }
    },
    type: {
        name: 'type',
        description: 'Basic style of tabs',
        options: ['line', 'card', 'editable-card'],
        control: {type: 'select'},
        table: {
            type: {
                summary: 'string'
            },
            defaultValue: {
                summary: 'line'
            },
            category: 'Tabs'
        }
    },
    onChange: {
        name: 'onChange',
        description: 'Callback executed when active tab is changed',
        table: {
            type: {
                summary: 'function(activeKey) {}'
            },
            category: 'Tabs'
        }
    },
    onEdit: {
        name: 'onEdit',
        description: 'Callback executed when tab is added or removed. Only works while `type="editable-card"`',
        table: {
            type: {
                summary: "(action === 'add' ? event : targetKey, action): void"
            },
            category: 'Tabs'
        }
    },
    onTabClick: {
        name: 'onTabClick',
        description: 'Callback executed when tab is clicked',
        table: {
            type: {
                summary: 'function(key: string, event: MouseEvent)'
            },
            category: 'Tabs'
        }
    },
    onTabScroll: {
        name: 'onTabScroll',
        description: ' Trigger when tab scroll',
        table: {
            type: {
                summary: 'function({ direction: `left` | `right` | `top` | `bottom` })'
            },
            category: 'Tabs'
        }
    }
};

export const Template = args => {
    const items = [
        {
            key: '1',
            label: `Tab 1`,
            children: `Content of Tab Pane 1 (key 1)`
        },
        {
            key: '2',
            label: `Tab 2`,
            children: `Content of Tab Pane 2 (key 1)`
        },
        {
            key: '3',
            label: `Tab 3`,
            children: `Content of Tab Pane 3 (key 1)`
        }
    ];

    return <KitTabs {...args} items={items} />;
};
