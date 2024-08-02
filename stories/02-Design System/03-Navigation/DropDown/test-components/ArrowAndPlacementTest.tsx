import React, {FunctionComponent} from 'react';
import {KitDropDown} from '@kit/Navigation';
import {KitButton, KitTypography} from '@kit/General';
import {genericDropdownItems} from '../commons.tsx';

export const ArrowAndPlacementTest: FunctionComponent = () => (
    <>
        <KitTypography.Title level="h3" style={{marginBottom: '16px'}}>
            Arrow and placement dropdown
        </KitTypography.Title>
        <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <div style={{height: '180px', display: 'flex', alignItems: 'flex-start', gap: '150px'}}>
                <KitDropDown open menu={{items: genericDropdownItems}} placement="bottomLeft" arrow>
                    <KitButton>bottomLeft</KitButton>
                </KitDropDown>
                <KitDropDown open menu={{items: genericDropdownItems}} placement="bottom" arrow>
                    <KitButton>bottom</KitButton>
                </KitDropDown>
                <KitDropDown open menu={{items: genericDropdownItems}} placement="bottomRight" arrow>
                    <KitButton>bottomRight</KitButton>
                </KitDropDown>
            </div>
            <div style={{height: '180px', display: 'flex', alignItems: 'flex-end', gap: '200px'}}>
                <KitDropDown open menu={{items: genericDropdownItems}} placement="topLeft" arrow>
                    <KitButton>topLeft</KitButton>
                </KitDropDown>
                <KitDropDown open menu={{items: genericDropdownItems}} placement="top" arrow>
                    <KitButton>top</KitButton>
                </KitDropDown>
                <KitDropDown open menu={{items: genericDropdownItems}} placement="topRight" arrow>
                    <KitButton>topRight</KitButton>
                </KitDropDown>
            </div>
        </div>
    </>
);
