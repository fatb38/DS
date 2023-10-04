import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {DownOutlined} from '@ant-design/icons';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {KitButton} from '@kit/General';

const items: IKitDropdownMenu['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.aristid..com/">
                1st menu item link
            </a>
        )
    },
    {
        key: '2',
        label: '2nd menu item'
    },
    {
        type: 'divider'
    },
    {
        key: '3',
        label: '3rd menu item',
        disabled: true
    }
];

const itemsGroups: IKitDropdownMenu['items'] = [
    {
        key: 'Group-1',
        type: 'group',
        label: 'Group title',
        children: [
            {
                key: 'Group-1-1',
                label: '1st menu item'
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
                label: '1st menu item'
            },
            {
                key: 'Group-2-2',
                label: '2nd menu item'
            }
        ]
    }
];

const App = () => {
    return (
        <KitSpace size="m">
            <KitDropDown
                menu={{
                    items
                }}
            >
                <KitButton type="link">
                    Divider and disabled <DownOutlined />
                </KitButton>
            </KitDropDown>
            <KitDropDown
                menu={{
                    items: itemsGroups
                }}
            >
                <KitButton type="link">
                    Groups <DownOutlined />
                </KitButton>
            </KitDropDown>
        </KitSpace>
    );
};

export default App;
