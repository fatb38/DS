import {FunctionComponent, ReactNode, useEffect, useRef, useState} from 'react';
import {IKitSideMenu, IKitSideMenuItemProps} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import cn from 'classnames';
import styles from './styles.module.scss';
import {KitButton} from '@kit/General';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {KitAutoComplete} from '@kit/DataEntry';
import KitSideMenuItem from './SideMenuItem';
import {RefSelectProps} from 'antd';

const KitSideMenu: FunctionComponent<IKitSideMenu> = ({
    open = false,
    showSearch,
    autoCompleteOptions,
    customContent,
    items = [],
    onMenuClick,
    onOpenChanged,
    defaultActiveItemKey,
    disabledSecureClick,
    className,
    ...props
}) => {
    const {appId} = useKitTheme();
    const [isOpen, setIsOpen] = useState(open);
    const [activeItemKey, setActiveItemKey] = useState(defaultActiveItemKey);
    const searchRef = useRef<RefSelectProps>(null);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        setActiveItemKey(defaultActiveItemKey);
    }, [defaultActiveItemKey]);

    const clx = cn(
        appId,
        styles['kit-side-menu'],
        {
            open: isOpen
        },
        className
    );

    const _toggleOpen = () => {
        onOpenChanged && onOpenChanged(!isOpen);
        setIsOpen(!isOpen);
    };
    const _onSearchClick = () => {
        setIsOpen(true);
        requestAnimationFrame(() => {
            searchRef.current!.focus();
        });
    };

    const _onItemClick = (onItemClick: IKitSideMenuItemProps['onClick']) => (key: string) => {
        setActiveItemKey(key);

        onMenuClick && onMenuClick(key);
        onItemClick && onItemClick(key);
    };

    const _getSearchBox = () => {
        if (!showSearch) {
            return null;
        }

        return (
            <div className={styles['kit-side-menu-search-block']}>
                <KitAutoComplete
                    {...autoCompleteOptions}
                    ref={searchRef}
                    wrapperClassName={`${autoCompleteOptions?.wrapperClassName} search-input`}
                />
                <div className={`${styles['kit-side-menu-search-box']}`} onClick={_onSearchClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        );
    };

    const _getCustomContent = () =>
        customContent && <div className="kit-side-menu-custom-content">{customContent(isOpen)}</div>;

    const _getOption = (itemProps: IKitSideMenuItemProps, index: number): ReactNode => {
        const formattedKey = itemProps.key ?? index.toString();
        if (itemProps.type === 'separator') {
            return <KitSideMenuItem key={formattedKey} itemKey={formattedKey} large={isOpen} type="separator" />;
        }

        return (
            <KitSideMenuItem
                {...itemProps}
                key={formattedKey}
                itemKey={formattedKey}
                large={isOpen}
                active={!!activeItemKey && itemProps.key === activeItemKey}
                disabledSecureClick={itemProps.disabledSecureClick || disabledSecureClick}
                onClick={_onItemClick(itemProps.onClick)}
            />
        );
    };

    return (
        <nav className={clx} {...props}>
            <div className="header">
                <KitButton
                    className="kit-side-menu-toggle"
                    icon={<FontAwesomeIcon icon={faChevronRight} />}
                    onClick={_toggleOpen}
                />
                {_getSearchBox()}
                {_getCustomContent()}
            </div>
            <ul className="menu-items">{items.map((item, index) => _getOption(item, index))}</ul>
        </nav>
    );
};

export default KitSideMenu;
