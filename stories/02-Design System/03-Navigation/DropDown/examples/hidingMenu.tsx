import React, {useState} from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const items: IKitDropdownMenu['items'] = [
    {
        key: '1',
        label: 'Clicking me will not close the menu.'
    },
    {
        key: '2',
        label: 'Clicking me will not close the menu also.'
    },
    {
        key: '3',
        label: 'Clicking me will close the menu.'
    }
];

const App = () => {
    const [open, setOpen] = useState(false);

    const handleMenuClick: IKitDropdownMenu['onClick'] = e => {
        if (e.key === '3') {
            setOpen(false);
        }
    };

    const handleOpenChange = (flag: boolean) => {
        setOpen(flag);
    };

    return (
        <KitSpace>
            <KitDropDown menu={{items, onClick: handleMenuClick}} onOpenChange={handleOpenChange} open={open}>
                <KitButton type="link">
                    Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                </KitButton>
            </KitDropDown>
        </KitSpace>
    );
};

export default App;
