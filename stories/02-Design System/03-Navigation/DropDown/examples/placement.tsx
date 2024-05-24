import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';

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

const App = () => (
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitDropDown menu={{items}} placement="bottomLeft">
                    <KitButton>bottomLeft</KitButton>
                </KitDropDown>
                <KitDropDown menu={{items}} placement="bottom">
                    <KitButton>bottom</KitButton>
                </KitDropDown>
                <KitDropDown menu={{items}} placement="bottomRight">
                    <KitButton>bottomRight</KitButton>
                </KitDropDown>
            </KitSpace>
            <KitSpace wrap>
                <KitDropDown menu={{items}} placement="topLeft">
                    <KitButton>topLeft</KitButton>
                </KitDropDown>
                <KitDropDown menu={{items}} placement="top">
                    <KitButton>top</KitButton>
                </KitDropDown>
                <KitDropDown menu={{items}} placement="topRight">
                    <KitButton>topRight</KitButton>
                </KitDropDown>
            </KitSpace>
        </KitSpace>
    );

export default App;
