import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const items: IKitDropdownMenu['items'] = [
    {
        key: '1',
        label: '1st menu item'
    },
    {
        key: '2',
        label: '2nd menu item'
    },
    {
        key: '3',
        label: '3rd menu item'
    },
    {
        key: '4',
        label: '4th menu item'
    },
    {
        key: '5',
        label: '5th menu item'
    },
    {
        key: '6',
        label: '6th menu item'
    },
    {
        key: '7',
        label: '7th menu item'
    },
    {
        key: '8',
        label: '8th menu item'
    }
];

const App = () => {
    return (
        <KitSpace>
            <KitDropDown menu={{items}}>
                <KitButton type="link">
                    Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                </KitButton>
            </KitDropDown>
        </KitSpace>
    );
};

export default App;
