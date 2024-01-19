import React from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitSpace} from '@kit/Layout';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {disabledAndDividerDropdownItems, groupDropdownItems} from '../commons.tsx';

const App = () => {
    return (
        <KitSpace size="m">
            <KitDropDown
                menu={{
                    items: disabledAndDividerDropdownItems
                }}
            >
                <KitButton type="link">
                    Divider and disabled <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                </KitButton>
            </KitDropDown>
            <KitDropDown
                menu={{
                    items: groupDropdownItems
                }}
            >
                <KitButton type="link">
                    Groups <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
                </KitButton>
            </KitDropDown>
        </KitSpace>
    );
};

export default App;
