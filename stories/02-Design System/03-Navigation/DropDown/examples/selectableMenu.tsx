import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

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

const App = () => (
        <KitSpace>
            <KitDropDown menu={{items, selectable: true}}>
                <KitTypography.Link>
                    Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                </KitTypography.Link>
            </KitDropDown>
        </KitSpace>
    );

export default App;
