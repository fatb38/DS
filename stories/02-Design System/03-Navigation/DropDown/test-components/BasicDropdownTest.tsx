import React, {FC} from 'react';
import {KitTypography} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {KitDropDown} from '@kit/Navigation';
import {genericDropdownItems} from '../commons.tsx';

export const BasicDropdownTest: FC = () => (
    <div>
        <KitTypography.Title level="h3" style={{marginBottom: '16px'}}>
            Basic dropdown
        </KitTypography.Title>
        <KitDropDown open menu={{items: genericDropdownItems}}>
            <KitTypography.Link id="hover">
                Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
            </KitTypography.Link>
        </KitDropDown>
    </div>
);
