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
        <KitSpace>
            <KitDropDown menu={{items}} trigger={['click']}>
                <a onClick={e => e.preventDefault()}>
                    <KitTypography.Link>
                        Click me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                    </KitTypography.Link>
                </a>
            </KitDropDown>
        </KitSpace>
    );

export default App;
