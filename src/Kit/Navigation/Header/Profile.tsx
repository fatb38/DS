import {useKitTheme} from '@theme/useKitTheme';
import {FunctionComponent} from 'react';
import cn from 'classnames';

import {IKitHeaderProfile} from './types';
import {KitDropDown} from '../DropDown';
import {KitTag} from '@kit/DataDisplay/Tag';
import {IKitDropdown} from '../DropDown/types';
import {MenuProps} from 'antd';

const Profile: FunctionComponent<IKitHeaderProfile> = ({logo, tag, userCard, menu = null, className}) => {
    const {appId, theme} = useKitTheme();

    const clx = cn(
        appId,
        'kit-header-profile',
        {
            ['with-menu']: menu
        },
        className
    );

    const _renderDropdown = () => {
        return menu;
    };
    const dropDownProps: IKitDropdown = {
        disabled: !menu,
        placement: 'bottomRight'
    };

    if (menu && (menu as MenuProps).items) {
        dropDownProps.menu = menu as MenuProps;
    } else {
        dropDownProps.dropdownRender = _renderDropdown as IKitDropdown['dropdownRender'];
    }

    return (
        <KitDropDown {...dropDownProps}>
            <div className={clx}>
                {logo && <img className="kit-header-profile-logo" src={logo} />}
                {tag && (
                    <KitTag className="kit-header-profile-tag" color={theme.colors.neutral.typography.default}>
                        {tag}
                    </KitTag>
                )}
                {userCard}
            </div>
        </KitDropDown>
    );
};

export default Profile;
