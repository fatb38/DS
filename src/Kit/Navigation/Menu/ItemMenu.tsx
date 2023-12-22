import React, {FunctionComponent, MouseEvent, useState} from 'react';
import {IKitMenuInfo, IStyledIemMenu, IKitItemMenu} from './types';
import {css, styled} from 'styled-components';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitTypography, KitIcon} from '@kit/General/';
import {KitTooltip} from '@kit/DataDisplay/';
import {KitDropDown} from '../DropDown';
import {MenuItemType} from 'antd/lib/menu/hooks/useItems';
import {useKitTheme} from '@theme/useKitTheme';
import useSecureClick from '@hooks/useSecureClick';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {kitMenuCssTokens} from '@theme/aristid/components/Navigation/Menu';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledIemMenu = styled.div<IStyledIemMenu>`
    height: 32px;
    display: grid;
    grid-template: 'select icon title actions value rafter';
    grid-template-columns: min-content min-content minmax(0px, auto) min-content min-content min-content;
    padding: 4px 8px 4px 0px;
    background-color: var(
        ${kitMenuCssTokens.itemMenu.colors.background.default},
        var(${kitColorsPaletteCssTokens.neutral.white})
    );

    align-items: center;

    ${({$isClickable}) =>
        $isClickable &&
        css`
            cursor: pointer;
        `}

    ${({$isSelected}) =>
        $isSelected &&
        css`
            background-color: var(
                ${kitMenuCssTokens.itemMenu.colors.background.active},
                var(${kitColorsPaletteCssTokens.primary.primary100})
            );
            border-right: 3px solid
                var(
                    ${kitMenuCssTokens.itemMenu.colors.border.active},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            padding-inline-end: 5px;

            .kit-item-menu-title span,
            .kit-item-menu-icon span {
                color: var(
                    ${kitMenuCssTokens.itemMenu.colors.title.default},
                    var(${kitColorsPaletteCssTokens.primary.primary400})
                );
            }
        `}

    &:hover {
        background-color: var(
            ${kitMenuCssTokens.itemMenu.colors.background.hover},
            var(${kitColorsPaletteCssTokens.primary.primary100})
        );
    }

    .kit-item-menu-checkbox {
        grid-area: select;
        margin-left: 8px;
        margin-right: 8px;
    }

    .kit-item-menu-icon {
        grid-area: icon;

        span {
            color: var(
                ${kitMenuCssTokens.itemMenu.colors.icon.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
            );
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

    ${({$type}) => {
        switch ($type) {
            case 'cta':
                return css`
                    .kit-item-menu-title span {
                        color: var(
                            ${kitMenuCssTokens.itemMenu.colors.title.default},
                            var(${kitColorsPaletteCssTokens.primary.primary400})
                        );
                    }
                    .kit-item-menu-icon span {
                        color: var(
                            ${kitMenuCssTokens.itemMenu.colors.icon.default},
                            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
                        );
                    }
                `;
            case 'ctaDanger':
                return css`
                    .kit-item-menu-title span {
                        color: var(
                            ${kitMenuCssTokens.itemMenu.colors.title.danger},
                            var(${kitColorsPaletteCssTokens.secondary.red.red400})
                        );
                    }
                    .kit-item-menu-icon span {
                        color: var(
                            ${kitMenuCssTokens.itemMenu.colors.icon.danger},
                            var(${kitColorsPaletteCssTokens.secondary.red.red400})
                        );
                    }

                    &:hover {
                        background-color: var(
                            ${kitMenuCssTokens.itemMenu.colors.background.danger},
                            var(${kitColorsPaletteCssTokens.secondary.red.red100})
                        );
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
            color: var(
                ${kitMenuCssTokens.itemMenu.colors.value.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
            );
        }
    }

    .kit-item-menu-rafter {
        grid-area: rafter;
        color: var(
            ${kitMenuCssTokens.itemMenu.colors.rafter.default},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
        );
        font-size: 12px;
        margin-left: 8px;

        &:hover {
            color: var(
                ${kitMenuCssTokens.itemMenu.colors.rafter.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
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

    return (
        <StyledIemMenu
            {...props}
            $isClickable={isClickable}
            $isSelected={isSelected}
            $type={type}
            onClick={disabledSecureClick ? _handleClickItemMenu : _handleClickItemMenuSecured}
            className={`${appId} ${className ?? ''}`}
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
