import React, {FC} from 'react';
import {KitButton, KitTypography} from '@kit/General';
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
            <KitButton type="link" id="hover">
                Hover me <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}} />
            </KitButton>
        </KitDropDown>
    </div>
);
