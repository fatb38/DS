import {useKitTheme} from '@theme/useKitTheme';
import {FunctionComponent, ReactNode, useState} from 'react';
import cn from 'classnames';

import {KitHeaderIdCard, IKitHeaderProfile} from './types';
import {KitDropDown} from '../DropDown';
import {KitTag} from '@kit/DataDisplay/Tag';
import {IKitDropdown} from '../DropDown/types';
import {MenuProps} from 'antd';
import {KitIdCard} from '@kit/DataDisplay';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';

const Profile: FunctionComponent<IKitHeaderProfile> = ({
    logo,
    tagProps,
    profileCardProps,
    profileMenuCardProps,
    complement,
    className,
    menu = null,
    alt = '',
    ...rest
}) => {
    const {appId} = useKitTheme();
    const [isOpen, setIsOpen] = useState(false);

    const clx = cn(
        appId,
        'kit-header-profile',
        {
            ['with-menu']: menu,
            ['open']: isOpen
        },
        className
    );

    const menuProfileClx = cn(
        'kit-header-profile-menu-card',
        {
            ['clickable']: profileMenuCardProps?.onClick
        },
        profileMenuCardProps?.className
    );

    const userProfile: IKitIdCard | undefined = profileCardProps;
    if (userProfile && userProfile.avatarProps) {
        userProfile.avatarProps.shape = 'square';
    }

    const menuProfile: KitHeaderIdCard = {
        ...profileMenuCardProps,
        className: menuProfileClx
    };
    if (menuProfile && menuProfile.avatarProps) {
        menuProfile.avatarProps.shape = 'square';
        menuProfile.avatarProps.size = 'large';
    }

    const hasMenuAsProps = menu && (menu as MenuProps).items;

    const _renderDropdown: IKitDropdown['dropdownRender'] = originNode => (
        <div className="kit-header-menu-wrapper">
            {profileMenuCardProps && <KitIdCard {...menuProfile} />}
            {menu && !hasMenuAsProps && <div role="separator" className="ant-dropdown-menu-item-divider" />}
            {hasMenuAsProps ? originNode : (menu as ReactNode)}
        </div>
    );

    const dropDownProps: IKitDropdown = {
        disabled: !menu,
        placement: 'bottomRight',
        onOpenChange: open => {
            setIsOpen(open);
        }
    };

    if (menu || profileMenuCardProps) {
        dropDownProps.dropdownRender = _renderDropdown;
    }

    if (hasMenuAsProps) {
        const finalMenu: MenuProps = {...(menu as MenuProps)};
        if (profileMenuCardProps && finalMenu.items && finalMenu.items.length > 0) {
            finalMenu.items = [
                {
                    type: 'divider'
                },
                ...(finalMenu.items ?? [])
            ];
        }
        dropDownProps.menu = finalMenu;
    }

    return (
        <KitDropDown {...dropDownProps}>
            <div className={clx} tabIndex={0} {...rest}>
                {logo && <img className="kit-header-profile-logo" src={logo} alt={alt} />}
                {tagProps && <KitTag className="kit-header-profile-tag" {...tagProps} />}
                {userProfile && <KitIdCard {...userProfile} />}
                {complement && <div className="kit-header-profile-complement">{complement}</div>}
            </div>
        </KitDropDown>
    );
};

export default Profile;
