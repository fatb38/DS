import React, {FunctionComponent} from 'react';
import {IKitMenuInfo, IStyledIemMenu, IKitItemMenu} from './types';
import {css, styled} from 'styled-components';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitTypography, KitIcon} from '@kit/General/';
import {RightOutlined, MoreOutlined} from '@ant-design/icons';
import {KitTooltip} from '@kit/DataDisplay/';
import {KitDropDown} from '../DropDown';
import {MenuItemType} from 'antd/lib/menu/hooks/useItems';
import {useKitTheme} from '@theme/theme-context';

const StyledIemMenu = styled.div<IStyledIemMenu>`
    height: 32px;
    display: grid;
    grid-template: 'select icon title actions value rafter';
    grid-template-columns: min-content min-content minmax(0px, auto) min-content min-content min-content;
    padding: 4px 8px 4px 0px;
    background-color: ${({$theme}) => $theme.itemMenu.colors.background.default};
    align-items: center;

    ${({$isClickable}) =>
        $isClickable &&
        css`
            cursor: pointer;
        `}

    ${({$theme, $isSelected}) =>
        $isSelected &&
        css`
            background-color: ${$theme.itemMenu.colors.background.active};
            border-right: 3px solid ${$theme.itemMenu.colors.border.active};
            padding-inline-end: 5px;

            .kit-item-menu-title span,
            .kit-item-menu-icon span {
                color: ${$theme.itemMenu.colors.title.default};
            }
        `}

    &:hover {
        background-color: ${({$theme}) => $theme.itemMenu.colors.background.hover};
    }

    .kit-item-menu-checkbox {
        grid-area: select;
        margin-left: 8px;
        margin-right: 8px;
    }

    .kit-item-menu-icon {
        grid-area: icon;

        span {
            color: ${({$theme}) => $theme.itemMenu.colors.icon.default};
        }
    }

    .kit-item-menu-title {
        grid-area: title;
        margin-left: 8px;
    }

    .kit-item-menu-actions {
        grid-area: actions;
        display: grid;
        grid-template-columns: inherit;
        margin-left: 8px;
        align-items: center;

        .kit-action-more {
            cursor: pointer;
            transform: rotate(90deg);
        }
    }

    ${({$theme, $type}) => {
        switch ($type) {
            case 'cta':
                return css`
                    .kit-item-menu-title span {
                        color: ${$theme.itemMenu.colors.title.default};
                    }
                    .kit-item-menu-icon span {
                        color: ${$theme.itemMenu.colors.icon.default};
                    }
                `;
            case 'ctaDanger':
                return css`
                    .kit-item-menu-title span {
                        color: ${$theme.itemMenu.colors.title.danger};
                    }
                    .kit-item-menu-icon span {
                        color: ${$theme.itemMenu.colors.icon.danger};
                    }

                    &:hover {
                        background-color: ${$theme.itemMenu.colors.background.danger};
                    }
                `;
            case 'default':
                return;
        }
    }}

    .kit-item-menu-value {
        grid-area: value;
        margin-left: 8px;

        span {
            color: ${({$theme}) => $theme.itemMenu.colors.value.default};
        }
    }

    .kit-item-menu-rafter {
        grid-area: rafter;
        color: ${({$theme}) => $theme.itemMenu.colors.rafter.default};
        font-size: 12px;
        margin-left: 8px;

        &:hover {
            color: ${({$theme}) => $theme.itemMenu.colors.rafter.hover};
            cursor: pointer;
        }
    }
`;

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
    ...props
}) => {
    const {theme} = useKitTheme();
    const isClickable = onClick !== undefined;
    const isSelectable = onSelectChange !== undefined;
    const hasRafter = onRafterClick !== undefined;

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
                    <KitTypography.Text size="large" weight="medium" ellipsis={{rows: 1, tooltip: true}}>
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
                                    hoverable
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
                                    hoverable
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
                                        items: getMoreActionsDropDownItems()
                                    }}
                                >
                                    <KitTooltip title="More">
                                        <KitIcon className="kit-action-more" icon={<MoreOutlined />} hoverable />
                                    </KitTooltip>
                                </KitDropDown>
                            </div>
                        )}
                    </div>
                )
            );
        }
    };

    const getMoreActionsDropDownItems = (): MenuItemType[] | undefined => {
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
                    <KitTypography.Text size="large" weight="regular" ellipsis={{rows: 1, tooltip: true}}>
                        {value}
                    </KitTypography.Text>
                </div>
            )
        );
    };

    const _getRafter = () => {
        return (
            hasRafter && (
                <div
                    className="kit-item-menu-rafter"
                    onClick={e => {
                        e.stopPropagation();
                        onRafterClick && onRafterClick();
                    }}
                >
                    <RightOutlined />
                </div>
            )
        );
    };

    return (
        <StyledIemMenu
            $theme={theme.components.Menu}
            $isClickable={isClickable}
            $isSelected={isSelected}
            $type={type}
            onClick={e => {
                e.stopPropagation();
                onClick && onClick();
            }}
            {...props}
        >
            {_getCheckbox()}
            {_getIcon()}
            {_getTitle()}
            {_getActions()}
            {_getValue()}
            {_getRafter()}
        </StyledIemMenu>
    );
};

export default KitItemMenu;
