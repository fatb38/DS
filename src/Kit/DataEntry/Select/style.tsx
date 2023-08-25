import styled, {createGlobalStyle, css} from 'styled-components';
import theme from '@theme/index';

export const StyledBadge = styled.div`
    display: inline-block;
    vertical-align: middle;

    div {
        margin-left: 4px;
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

            &[title] {
                padding-left: 10px;
            }

            .kit-select-option {
                align-self: center;

                .kit-select-option-icon {
                    vertical-align: middle;
                }
            }

            .kit-icon {
                padding: 5px;
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
            transform: translateX(-1px) translateY(-3px);
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
            transform: translateX(-1px) translateY(3px);
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
            &.ant-select-bottom {
                border-radius: 7px 7px 0 0;
            }

            &.ant-select-top {
                border-radius: 0 0 7px 7px;
            }
        }

        &.ant-select-compact-item {
            &.ant-select-bottom {
                border-radius: 7px 0 0 0;
            }

            &.ant-select-top {
                border-radius: 0 0 0 7px;
            }
        }
    }

    &.ant-select:not(.ant-select-customize-input) {
        display: grid;
        min-height: 40px;
        grid-template-areas: 'input clear arrow';
        grid-template-columns: auto 30px 30px;
        position: relative;
        background-color: #ffffff;
        border: 1px solid #d1dfe9;
        border-radius: 7px;
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover,
        &.ant-select-focused {
            border-color: ${theme.color.primary.blue400};
        }

        .ant-select-selector {
            grid-area: input;
            padding: 4px 9px;
            background-color: inherit;
            border: none;
            transition: none;

            .ant-select-selection-overflow {
                gap: 4px 0px;
            }

            .ant-select-selection-overflow-item-rest .ant-select-selection-item {
                background: none;
                margin: 0;
                padding-inline-start: 0;
                padding-inline-end: 0;
            }

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
                padding: 5px;
            }

            .ant-select-selection-search input {
                font-weight: ${theme.typography.mediumfontWeight};
                color: ${theme.color.primary.blue300};
            }

            .kit-select-option {
                display: inline-block;
                align-self: center;

                .kit-select-option-icon {
                    vertical-align: middle;
                }
            }

            .ant-tag {
                .kit-select-option {
                    .kit-select-option-icon {
                        padding: 0;
                    }

                    .kit-select-option-color {
                        margin-left: 0;
                    }
                }
            }
        }

        .ant-select-arrow {
            grid-area: arrow;
            position: relative;
            top: 48%;
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
            inset-inline-end: 0;
        }

        .ant-select-clear {
            grid-area: clear;
            position: relative;
            display: flex;
            inset-inline-end: 0;
            font-size: 12px;
            transform: none;
            transition: none;
            opacity: 1;
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        }

        &.ant-select-disabled {
            background-color: ${theme.color.secondary.mediumGrey.mediumGrey100};
            color: ${theme.color.secondary.mediumGrey.mediumGrey400};
            border-color: ${theme.color.secondary.mediumGrey.mediumGrey200};
            cursor: not-allowed;

            .ant-select-selection-item {
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};
            }

            .ant-select-selection-placeholder {
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};
            }

            .ant-select-arrow,
            .ant-select-clear {
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-select-status-warning {
            background-color: ${theme.color.secondary.orange.orange100};
            border-color: ${theme.color.secondary.orange.orange400};
            color: ${theme.color.secondary.orange.orange400};

            .ant-select-selection-item {
                color: ${theme.color.secondary.orange.orange500};
            }

            .ant-select-selection-placeholder {
                color: ${theme.color.secondary.orange.orange400};
            }

            .ant-select-arrow,
            .ant-select-clear {
                color: ${theme.color.secondary.orange.orange400};
                background-color: ${theme.color.secondary.orange.orange100};
            }
        }

        &.ant-select-status-error {
            background-color: ${theme.color.secondary.red.red100};
            border-color: ${theme.color.secondary.red.red400};
            color: ${theme.color.secondary.red.red400};

            .ant-select-selection-item {
                color: ${theme.color.secondary.red.red400};
            }

            .ant-select-selection-placeholder {
                color: ${theme.color.secondary.red.red400};
            }

            .ant-select-arrow,
            .ant-select-clear {
                color: ${theme.color.secondary.red.red400};
                background-color: ${theme.color.secondary.red.red100};
            }
        }

        &.ant-select-focused:not(.ant-select-customize-input) {
            border-style: dashed;

            .ant-select-selector span.ant-select-selection-placeholder {
                color: transparent;
            }
        }
    }
`;
