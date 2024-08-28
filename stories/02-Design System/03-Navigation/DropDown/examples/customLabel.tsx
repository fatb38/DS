import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {KitIdCard} from '@kit/DataDisplay/IdCard';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

const items: IKitDropdownMenu['items'] = [
    {
        key: '1',
        label: <KitIdCard avatarProps={{src: 'public/images/portrait.png'}} title="title" description="description" />
    },
    {
        key: '2',
        label: (
            <KitIdCard avatarProps={{src: 'public/images/catalog.png'}} title="Other title" description="description" />
        )
    },
    {
        type: 'divider'
    },
    {
        key: '3',
        label: 'Edit',
        icon: <FontAwesomeIcon icon={faEdit} />
    },
    {
        key: '4',
        label: 'Delete',
        icon: <FontAwesomeIcon icon={faTrash} />
    }
];

const App = () => (
    <KitSpace>
        <KitDropDown menu={{items}} open>
            <KitTypography.Link>
                Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
            </KitTypography.Link>
        </KitDropDown>
    </KitSpace>
);

export default App;
