import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {DownOutlined} from '@ant-design/icons';
import {KitDropdownMenuProps} from '@kit/Navigation/DropDown/types';
import {KitButton} from '@kit/General';

const items: KitDropdownMenuProps['items'] = [
    {
        key: '1',
        label: 'sub menu',
        children: [
            {
                key: '1-1',
                label: '1rd menu item',
                children: [
                    {
                        key: '1-1-1',
                        label: '1.1 menu item'
                    },
                    {
                        key: '1-1-2',
                        label: '1.2 menu item'
                    }
                ]
            },
            {
                key: '1-2',
                label: '2th menu item'
            }
        ]
    },
    {
        key: '2',
        label: 'sub menu',
        children: [
            {
                key: '2-1',
                label: '3rd menu item'
            },
            {
                key: '2-2',
                label: '4th menu item'
            }
        ]
    },
    {
        key: '3',
        label: 'sub menu',
        disabled: true,
        children: [
            {
                key: '3-1',
                label: '5th menu item'
            },
            {
                key: '3-2',
                label: '6th menu item'
            }
        ]
    }
];

const itemsGroups = [
    {
        key: 'Group-1',
        type: 'group',
        label: 'Group title',
        children: [
            {
                key: 'Group-1-1',
                label: '1st menu item',
                children: [
                    {
                        key: 'Group-1-1-1',
                        label: '1.1 menu item'
                    },
                    {
                        key: 'Group-1-1-2',
                        label: '1.2 menu item'
                    }
                ]
            },
            {
                key: 'Group-1-2',
                label: '2nd menu item'
            }
        ]
    },
    {
        key: 'Group-2',
        type: 'group',
        label: 'Group title 2',
        children: [
            {
                key: 'Group-2-1',
                label: '3rd menu item',
                children: [
                    {
                        key: 'Group-2-1-1',
                        label: '3.1 menu item'
                    },
                    {
                        key: 'Group-2-1-2',
                        label: '3.2 menu item'
                    }
                ]
            },
            {
                key: 'Group-2-2',
                label: '4th menu item',
                disabled: true,
                children: [
                    {
                        key: 'Group-2-2-1',
                        label: '4.1 menu item'
                    },
                    {
                        key: 'Group-2-2-2',
                        label: '4.2 menu item'
                    }
                ]
            }
        ]
    }
];

const App = () => {
    return (
        <KitSpace size="large">
            <KitDropDown menu={{items}}>
                <KitButton type="link">
                    Cascading <DownOutlined />
                </KitButton>
            </KitDropDown>
            <KitDropDown menu={{items: itemsGroups}}>
                <KitButton type="link">
                    Cascading with groups
                    <DownOutlined />
                </KitButton>
            </KitDropDown>
        </KitSpace>
    );
};

export default App;
