import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {IKitDropdownMenu} from '@kit/Navigation/DropDown/types';
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

const App = () => {
    const customRender = (menu: React.ReactNode) => {
        return (
            <>
                {menu}
                <KitButton type="primary" block style={{marginTop: '15px'}}>
                    CTA Action
                </KitButton>
            </>
        );
    };

    return (
        <KitSpace>
            <KitDropDown menu={{items}} dropdownRender={customRender}>
                <a onClick={e => e.preventDefault()}>
                    <KitButton type="link">
                        Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                    </KitButton>
                </a>
            </KitDropDown>
        </KitSpace>
    );
};

export default App;
