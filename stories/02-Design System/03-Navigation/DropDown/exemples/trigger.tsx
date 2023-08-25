import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {DownOutlined} from '@ant-design/icons';

const items = [
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
        <KitDropDown menu={{items}} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
                <KitSpace>
                    Click me
                    <DownOutlined />
                </KitSpace>
            </a>
        </KitDropDown>
    );
};

export default App;
