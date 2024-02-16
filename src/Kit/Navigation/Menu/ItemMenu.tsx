import React, {FunctionComponent, MouseEvent, useState} from 'react';
import {IKitMenuInfo, IKitItemMenu} from './types';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitTypography, KitIcon} from '@kit/General/';
import {KitTooltip} from '@kit/DataDisplay/';
import {KitDropDown} from '../DropDown';
import {MenuItemType} from 'antd/lib/menu/hooks/useItems';
import {useKitTheme} from '@theme/useKitTheme';
import useSecureClick from '@hooks/useSecureClick';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import styles from './styles.module.scss';

const KitItemMenu: FunctionComponent<IKitItemMenu> = ({
    type = 'default',
    title,
    icon,
    value,
    actions,
    onSelectChange,
    onRafterClick,
    isSelected = false,
    onClick,
    disabledSecureClick,
    className,
    ...props
}) => {
    const {appId} = useKitTheme();
    const isClickable = onClick !== undefined;
    const isSelectable = onSelectChange !== undefined;
    const hasRafter = onRafterClick !== undefined;

    const [showMoreTooltip, setShowMoreTooltip] = useState(false);

    const _getCheckbox = () => {
        return (
            isSelectable && (
                <div className="kit-item-menu-checkbox">
                    <KitCheckbox
                        onClick={e => e.stopPropagation()}
                        onChange={e => {
                            onSelectChange && onSelectChange(e);
                        }}
                    />
                </div>
            )
        );
    };

    const _getIcon = () => {
        return (
            icon && (
                <div className="kit-item-menu-icon">
                    <KitIcon icon={icon} on={isSelected} />
                </div>
            )
        );
    };

    const _getTitle = () => {
        return (
            title && (
                <div className="kit-item-menu-title">
                    <KitTypography.Text size="large" weight="medium" ellipsis={{tooltip: true}}>
                        {title}
                    </KitTypography.Text>
                </div>
            )
        );
    };

    const _getActions = () => {
        if (actions) {
            const firstAction = actions[0] ? actions[0] : null;
            const secondAction = actions.length <= 2 && actions[1] ? actions[1] : null;

            return (
                actions?.length && (
                    <div className="kit-item-menu-actions">
                        {firstAction && (
                            <KitTooltip title={firstAction.label}>
                                <KitIcon
                                    icon={firstAction.icon}
                                    onClick={e => {
                                        e.stopPropagation();
                                        firstAction.onClick(e);
                                    }}
                                />
                            </KitTooltip>
                        )}
                        {secondAction && (
                            <KitTooltip title={secondAction.label}>
                                <KitIcon
                                    icon={secondAction.icon}
                                    onClick={e => {
                                        e.stopPropagation();
                                        secondAction.onClick(e);
                                    }}
                                />
                            </KitTooltip>
                        )}
                        {actions.length > 2 && (
                            <div
                                onClick={e => {
                                    e.stopPropagation();
                                }}
                            >
                                <KitDropDown
                                    menu={{
                                        items: _getMoreActionsDropDownItems()
                                    }}
                                    trigger={['click']}
                                    onOpenChange={() => setShowMoreTooltip(false)}
                                >
                                    <KitTooltip title="More" open={showMoreTooltip} onOpenChange={setShowMoreTooltip}>
                                        <KitIcon
                                            className="kit-action-more"
                                            icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
                                            aria-label="more"
                                            data-name="more"
                                            role="img"
                                        />
                                    </KitTooltip>
                                </KitDropDown>
                            </div>
                        )}
                    </div>
                )
            );
        }
    };

    const _getMoreActionsDropDownItems = (): MenuItemType[] | undefined => {
        if (actions === undefined || actions.length === 0) {
            return undefined;
        }

        const newActions = [...actions];

        // Remove first action because we don't want it to be duplicated
        newActions.splice(0, 1);

        const dropDownActions: MenuItemType[] = newActions.map((item, index) => ({
            key: index,
            icon: item.icon,
            label: item.label,
            onClick: (e: IKitMenuInfo) => item.onClick(e)
        }));

        return dropDownActions;
    };

    const _getValue = () => {
        return (
            value && (
                <div className="kit-item-menu-value">
                    <KitTypography.Text size="large" weight="regular" ellipsis={{tooltip: true}}>
                        {value}
                    </KitTypography.Text>
                </div>
            )
        );
    };

    const _handleClickRafter = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        onRafterClick && onRafterClick(e);
    };

    const _handleClickRafterSecured = useSecureClick(_handleClickRafter);

    const _getRafter = () => {
        return (
            hasRafter && (
                <div
                    className="kit-item-menu-rafter"
                    onClick={disabledSecureClick ? _handleClickRafter : _handleClickRafterSecured}
                    aria-label="rafter"
                    data-name="rafter"
                    role="img"
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            )
        );
    };

    const _handleClickItemMenu = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        onClick && onClick(e);
    };

    const _handleClickItemMenuSecured = useSecureClick(_handleClickItemMenu);

    const clx = cn(appId, styles['kit-item-menu'], className, {
        'is-selected': isSelected,
        'is-clickable': isClickable,
        cta: type === 'cta',
        'cta-danger': type === 'ctaDanger'
    });

    return (
        <div
            {...props}
            onClick={disabledSecureClick ? _handleClickItemMenu : _handleClickItemMenuSecured}
            className={clx}
        >
            {_getCheckbox()}
            {_getIcon()}
            {_getTitle()}
            {_getActions()}
            {_getValue()}
            {_getRafter()}
        </div>
    );
};

export default KitItemMenu;
