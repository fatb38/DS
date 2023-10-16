import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {DownOutlined} from '@ant-design/icons';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {KitButton} from '@kit/General';

const items: IKitDropdownMenu['items'] = [
    {
        key: '1',
        label: '1st menu item link'
    },
    {
        key: '2',
        label: '2nd menu item'
    },
    {
        key: '3',
        label: '3rd menu item'
    }
];

const App = () => {
    return (
        <KitSpace>
            <KitDropDown menu={{items, selectable: true}}>
                <KitButton type="link">
                    Hover me <DownOutlined />
                </KitButton>
            </KitDropDown>
        </KitSpace>
    );
};

export default App;
