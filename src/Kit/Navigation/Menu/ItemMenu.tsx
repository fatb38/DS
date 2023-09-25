import React from 'react';
import {KitItemMenuProps, KitItemMenuType} from './types';
import {css, styled} from 'styled-components';
import theme from '@theme/index';
import {KitCheckbox} from '@kit/DataEntry/';
import {KitTypography, KitIcon} from '@kit/General/';
import {RightOutlined, MoreOutlined} from '@ant-design/icons';
import {KitTooltip} from '@kit/DataDisplay/';
import {KitDropDown} from '../DropDown';
import {MenuItemType} from 'antd/lib/menu/hooks/useItems';

const StyledIemMenu = styled.div<{
    $isClickable: boolean;
    $isSelected: boolean;
    $type: KitItemMenuType;
}>`
    height: 32px;
    display: grid;
    grid-template: 'select icon title actions value rafter';
    grid-template-columns: min-content min-content minmax(0px, auto) min-content min-content min-content;
    padding: 4px 8px 4px 0px;
    background-color: ${theme.color.neutral.typography.white};
    align-items: center;

    ${props =>
        props.$isClickable &&
        css`
            cursor: pointer;
        `}

    ${props =>
        props.$isSelected &&
        css`
            background-color: ${theme.color.primary.blue100};
            border-right: 3px solid ${theme.color.primary.blue400};
            padding-inline-end: 5px;

            .kit-item-menu-title span,
            .kit-item-menu-icon span {
                color: ${theme.color.primary.blue400};
            }
        `}

    &:hover {
        background-color: ${theme.color.primary.blue100};
    }

    .kit-item-menu-checkbox {
        grid-area: select;
        margin-left: 8px;
        margin-right: 8px;
    }

    .kit-item-menu-icon {
        grid-area: icon;

        span {
            color: ${theme.color.secondary.mediumGrey.mediumGrey300};
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

    ${props => {
        switch (props.$type) {
            case 'cta':
                return css`
                    .kit-item-menu-title span,
                    .kit-item-menu-icon span {
                        color: ${theme.color.primary.blue400};
                    }
                `;
            case 'ctaDanger':
                return css`
                    .kit-item-menu-title span,
                    .kit-item-menu-icon span {
                        color: ${theme.color.secondary.red.red400};
                    }

                    &:hover {
                        background-color: ${theme.color.secondary.red.red100};
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
            color: ${theme.color.secondary.mediumGrey.mediumGrey300};
        }
    }

    .kit-item-menu-rafter {
        grid-area: rafter;
        color: ${theme.color.secondary.mediumGrey.mediumGrey300};
        font-size: 12px;
        margin-left: 8px;

        &:hover {
            color: ${theme.color.primary.blue400};
            cursor: pointer;
        }
    }
`;

const KitItemMenu: React.FunctionComponent<KitItemMenuProps> = ({
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
    const isClickable = onClick !== undefined;
    const isSelectable = onSelectChange !== undefined;
    const hasRafter = onRafterClick !== undefined;

    const getCheckbox = () => {
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

    const getIcon = () => {
        return (
            icon && (
                <div className="kit-item-menu-icon">
                    <KitIcon icon={icon} on={isSelected} />
                </div>
            )
        );
    };

    const getTitle = () => {
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

    const getActions = () => {
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
                                    onClick={(e: MouseEvent) => {
                                        e.stopPropagation();
                                        firstAction.onClick();
                                    }}
                                />
                            </KitTooltip>
                        )}
                        {secondAction && (
                            <KitTooltip title={secondAction.label}>
                                <KitIcon
                                    icon={secondAction.icon}
                                    hoverable
                                    onClick={(e: MouseEvent) => {
                                        e.stopPropagation();
                                        secondAction.onClick();
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

        const dropDownActions = newActions.map((item, index) => {
            return {
                key: index,
                icon: item.icon,
                label: item.label,
                onClick: item.onClick
            };
        });

        return dropDownActions;
    };

    const getValue = () => {
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

    const getRafter = () => {
        return (
            hasRafter && (
                <div
                    className="kit-item-menu-rafter"
                    onClick={e => {
                        e.stopPropagation();
                        onRafterClick && onRafterClick();
                    }}
                >
                    <RightOutlined rev="" />
                </div>
            )
        );
    };

    return (
        <StyledIemMenu
            $isClickable={isClickable}
            $isSelected={isSelected}
            $type={type}
            onClick={e => {
                e.stopPropagation();
                onClick && onClick();
            }}
            {...props}
        >
            {getCheckbox()}
            {getIcon()}
            {getTitle()}
            {getActions()}
            {getValue()}
            {getRafter()}
        </StyledIemMenu>
    );
};

export default KitItemMenu;
