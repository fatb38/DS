import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {KitDropdownMenuProps} from '@kit/Navigation/DropDown/types';

const items: KitDropdownMenuProps['items'] = [
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
        <KitSpace direction="vertical">
            <KitSpace wrap>
                <KitDropDown menu={{items}} placement="bottomLeft" arrow={{pointAtCenter: true}}>
                    <KitButton>bottomLeft</KitButton>
                </KitDropDown>
                <KitDropDown menu={{items}} placement="bottom" arrow={{pointAtCenter: true}}>
                    <KitButton>bottom</KitButton>
                </KitDropDown>
                <KitDropDown menu={{items}} placement="bottomRight" arrow={{pointAtCenter: true}}>
                    <KitButton>bottomRight</KitButton>
                </KitDropDown>
            </KitSpace>
            <KitSpace wrap>
                <KitDropDown menu={{items}} placement="topLeft" arrow={{pointAtCenter: true}}>
                    <KitButton>topLeft</KitButton>
                </KitDropDown>
                <KitDropDown menu={{items}} placement="top" arrow={{pointAtCenter: true}}>
                    <KitButton>top</KitButton>
                </KitDropDown>
                <KitDropDown menu={{items}} placement="topRight" arrow={{pointAtCenter: true}}>
                    <KitButton>topRight</KitButton>
                </KitDropDown>
            </KitSpace>
        </KitSpace>
    );
};

export default App;
