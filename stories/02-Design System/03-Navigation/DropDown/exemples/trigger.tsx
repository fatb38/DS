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
        key: '3',
        label: '3rd menu item'
    }
];

const App = () => {
    return (
        <KitSpace>
            <KitDropDown menu={{items}} trigger={['click']}>
                <a onClick={e => e.preventDefault()}>
                    <KitButton type="link">
                        Click me <DownOutlined />
                    </KitButton>
                </a>
            </KitDropDown>
        </KitSpace>
    );
};

export default App;
