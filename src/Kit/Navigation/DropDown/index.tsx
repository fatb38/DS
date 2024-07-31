import {FunctionComponent} from 'react';
import {Dropdown as AntdDropdown, MenuProps} from 'antd';
import {IKitDropdown} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

type Item = NonNullable<MenuProps['items']>[number];

const addCheckIconToItemRecursive = (item: Item): Item => {
    if (item === null) {
        return item;
    }

    if ('children' in item && item.children !== undefined) {
        const updatedChildren = item.children.map(child => addCheckIconToItemRecursive(child));
        return {...item, children: updatedChildren};
    }

    if (!('label' in item)) {
        return item;
    }

    const {label, ...antItem} = item;

    return {
        ...antItem,
        label: (
            <>
                {label}
                <FontAwesomeIcon className="ant-dropdown-check" icon={faCheck} />
            </>
        )
    };
};

const addCheckIconToItems = (menu: MenuProps | undefined): MenuProps | undefined => {
    if (menu === undefined || menu.items === undefined) {
        return menu;
    }

    const itemsWithCheckIcon = menu.items.map(addCheckIconToItemRecursive);

    return {...menu, items: itemsWithCheckIcon};
};

export const KitDropDown: FunctionComponent<IKitDropdown> = ({overlayClassName, menu, ...props}) => {
    const {appId} = useKitTheme();
    const clx = cn(appId, overlayClassName);

    const menuWithCheckIcon = addCheckIconToItems(menu);

    return <AntdDropdown overlayClassName={clx} menu={menuWithCheckIcon} {...props} />;
};

KitDropDown.displayName = 'KitDropDown';
