import React, {FunctionComponent} from 'react';
import {Dropdown as AntdDropdown} from 'antd';
import {IKitDropdown} from './types';
import {useKitTheme} from '@theme/useKitTheme';

export const KitDropDown: FunctionComponent<IKitDropdown> = ({overlayClassName, ...props}) => {
    const {appId} = useKitTheme();

    return <AntdDropdown overlayClassName={`${appId} ${overlayClassName ?? ''}`} {...props} />;
};

KitDropDown.displayName = 'KitDropDown';
