import styled, {createGlobalStyle, css} from 'styled-components';
import theme from '@theme/index';

export const StyledBadge = styled.div`
    box-sizing: border-box;
    min-width: 28px;
    width: 28px;
    height: 32px;
    padding: 8px 6px;

    div {
        width: 16px;
        height: 16px;
        border-radius: 2px;
    }
`;

export const StyledLabel = styled.div`
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
`;

export const getPopupStyle = placement => {
    switch (placement) {
        case 'topLeft':
        case 'topRight':
            return {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                transform: 'translateY(15px)'
            };
        default:
            return {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                transform: 'translateY(-1px)'
            };
    }
};

export const DropDownStyle = createGlobalStyle`
    .ant-select-dropdown {
        background: transparent;
        overflow: visible;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-family: ${theme.typography.fontFamily};
        font-weight: ${theme.typography.mediumfontWeight};
        color: ${theme.color.secondary.mediumGrey.mediumGrey500};

        .ant-select-item, .ant-select-item-option, .ant-select-item-option-selected {
            border-radius: 7px;
            border: none;
            min-height: 32px;
            font-weight: ${theme.typography.mediumfontWeight};
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};

            .ant-select-item-option-content {
                display: flex;
                align-items: center;
            }
        }

        .ant-select-item-group {
            color: ${theme.color.neutral.typography.black};
            font-weight: ${theme.typography.boldFontWeight};
            padding: 8px 0;
        }
    }

    .rc-virtual-list-holder {
        background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
        padding-left: 0px;
        overflow: hidden;
        border-radius: 7px ;

        .ant-select-item.ant-select-item-option {
            padding-left: 10px;
        }
    }

    .kit-select-dropdown-content {
        background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
        padding: 10px;
        overflow: hidden;


        .ant-select-item.ant-select-item-option {
            padding: 0;
            margin: 0;
            border: none;
            background: transparent;

            &:not(:last-child) {
                margin-bottom: 5px;
            }

            &.ant-select-item-option-grouped {
                margin-left: 10px;
            }

            .kit-icon {
                box-sizing: border-box;
                height: 28px;
                width: 28px;
                padding: 4px;
                text-align: center;
            }
        }
        .ant-select-item.ant-select-item-option-selected, .ant-select-item.ant-select-item-option-active {
            background: ${theme.color.primary.blue100};
            font-weight: ${theme.typography.mediumfontWeight};
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-select-item.ant-select-item-option-disabled {
            opacity: .5;
        }

        .ant-select-item.ant-select-item-option-active {
            color: ${theme.color.primary.blue400};
        }
    }

    .kit-select-dropdown-bottom {
        .kit-select-dropdown-content {
            border-radius: 0 0 7px 7px ;
            transform: translateY(-4px);
        }

        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder,
        &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder {
            border-radius: 7px 7px 0 0 ;
        }
    }

    .kit-select-dropdown-top {
        .kit-select-dropdown-content {
            border-radius: 7px 7px 0 0 ;
            transform: translateY(4px);
        }

        &.ant-select-dropdown-placement-bottomLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-bottomRight .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-bottomLeft .rc-virtual-list-holder,
        &.ant-select-dropdown-placement-bottomRight .rc-virtual-list-holder {
            border-radius: 0 0 7px 7px ;
        }
    }
`;

export const KitSelectStyle = css`
    &.ant-select.ant-select-compact-item:not(.ant-select-compact-last-item) {
        margin-inline-end: 0px;
    }

    &.ant-select-focused.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) {
        .ant-select-selector {
            box-shadow: none;
        }
    }

    &.ant-select-open {
        &:not(.ant-select-compact-item) {
            &.ant-select-bottom .ant-select-selector {
                border-radius: 7px 7px 0 0;
            }

            &.ant-select-top .ant-select-selector {
                border-radius: 0 0 7px 7px;
            }
        }

        &.ant-select-compact-item {
            &.ant-select-bottom .ant-select-selector {
                border-radius: 7px 0 0 0;
            }

            &.ant-select-top .ant-select-selector {
                border-radius: 0 0 0 7px;
            }
        }
    }

    &.ant-select:not(.ant-select-customize-input) {
        .ant-select-selector {
            padding: 4px 9px;

            .ant-select-selection-item,
            .ant-select-selection-placeholder {
                display: flex;
                align-items: center;
                font-weight: ${theme.typography.mediumfontWeight};
                color: ${theme.color.primary.blue300};
            }

            .ant-select-selection-placeholder {
                font-weight: ${theme.typography.regularFontWeight};
                color: ${theme.color.secondary.mediumGrey.mediumGrey500};
            }

            .ant-select-selection-item .kit-icon {
                box-sizing: border-box;
                height: 28px;
                width: 28px;
                line-height: 22px;
                padding: 4px;
                text-align: center;
            }
        }

        .ant-select-arrow {
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-select-clear {
            display: flex;
            inset-inline-end: 44px;
            font-size: 12px;
            transform: none;
            transition: none;
            opacity: 1;
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        }

        &.ant-select-disabled {
            .ant-select-selector {
                background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};

                .ant-select-selection-item {
                    color: ${theme.color.secondary.mediumGrey.mediumGrey400};
                }

                .ant-select-selection-placeholder {
                    color: ${theme.color.secondary.mediumGrey.mediumGrey400};
                }
            }

            .ant-select-arrow {
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};
            }

            .anticon {
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-select-status-warning {
            .ant-select-selector,
            &:hover .ant-select-selector,
            &.ant-select-focused .ant-select-selector {
                background-color: ${theme.color.secondary.orange.orange100};
                border-color: ${theme.color.secondary.orange.orange400};
                color: ${theme.color.secondary.orange.orange400};

                .ant-select-selection-item {
                    color: ${theme.color.secondary.orange.orange500};
                }

                .ant-select-selection-placeholder {
                    color: ${theme.color.secondary.orange.orange400};
                }
            }

            .ant-select-arrow {
                color: ${theme.color.secondary.orange.orange400};
            }

            .anticon {
                color: ${theme.color.secondary.orange.orange400};
                background-color: ${theme.color.secondary.orange.orange100};
            }
        }

        &.ant-select-status-error {
            .ant-select-selector,
            &:hover .ant-select-selector,
            &.ant-select-focused .ant-select-selector {
                background-color: ${theme.color.secondary.red.red100};
                border-color: ${theme.color.secondary.red.red400};
                color: ${theme.color.secondary.red.red400};

                .ant-select-selection-item {
                    color: ${theme.color.secondary.red.red400};
                }

                .ant-select-selection-placeholder {
                    color: ${theme.color.secondary.red.red400};
                }
            }

            .ant-select-arrow {
                color: ${theme.color.secondary.red.red400};
            }

            .anticon {
                color: ${theme.color.secondary.red.red400};
                background-color: ${theme.color.secondary.red.red100};
            }
        }

        &.ant-select-focused:not(.ant-select-customize-input) .ant-select-selector {
            border-style: dashed;

            span.ant-select-selection-placeholder {
                color: transparent;
            }
        }
    }
`;
