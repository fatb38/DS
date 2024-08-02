import {FunctionComponent} from 'react';
import {Dropdown as AntdDropdown} from 'antd';
import {IKitDropdown} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';

export const KitDropDown: FunctionComponent<IKitDropdown> = ({overlayClassName, ...props}) => {
    const {appId} = useKitTheme();
    const clx = cn(appId, overlayClassName);

    return <AntdDropdown overlayClassName={clx} {...props} />;
};

KitDropDown.displayName = 'KitDropDown';
