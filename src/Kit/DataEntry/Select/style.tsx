import styled, {createGlobalStyle, css} from 'styled-components';
import {IKitSelectTheme} from '@theme/types/components/DataEntry/Select';
import {Select as AntdSelect} from 'antd';

export const StyledBadge = styled.div<{
    $theme: IKitSelectTheme['ColorBadge'];
}>`
    display: inline-block;
    vertical-align: middle;

    div {
        margin-left: 4px;
        width: ${({$theme}) => $theme.width}px;
        height: ${({$theme}) => $theme.height}px;
        border-radius: ${({$theme}) => $theme.border.radius}px;
    }
`;

export const StyledLabel = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
    padding-right: 10px;
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

export const SelectDropDownStyle = createGlobalStyle<{
    $theme: IKitSelectTheme['DropDown'];
}>`
    .ant-select-dropdown {
        background: transparent;
        overflow: visible;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-family: ${({$theme}) => $theme.typography.fontFamily};
        font-weight: ${({$theme}) => $theme.typography.fontWeight.default};
        color: ${({$theme}) => $theme.colors.typography.default};

        .ant-select-item, .ant-select-item-option, .ant-select-item-option-selected {
            border-radius: 7px;
            border: none;
            min-height: 32px;
            font-weight: ${({$theme}) => $theme.typography.fontWeight.selected};
            color: ${({$theme}) => $theme.colors.typography.selected};

            .ant-select-item-option-content {
                display: flex;
                align-items: center;
            }
        }

        .ant-select-item-group {
            color: ${({$theme}) => $theme.colors.typography.group};
            font-weight: ${({$theme}) => $theme.typography.fontWeight.group};
            padding: 8px 0;
        }
    }

    .rc-virtual-list-holder {
        background-color: ${({$theme}) => $theme.colors.background.default};
        padding-left: 0px;
        overflow: hidden;
        border-radius: 7px ;

        .ant-select-item.ant-select-item-option {
            padding-left: 10px;
        }
    }

    .kit-select-dropdown-content {
        width: calc(100% + 42px);
        box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.30);
        background-color: ${({$theme}) => $theme.colors.background.default};
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
                margin-left: 5px;
            }

            &[title] {
                padding-left: 10px;
            }

            .kit-select-option {
                align-self: center;
                width: 100%;

                .kit-select-option-icon {
                    vertical-align: middle;
                }

                .kit-select-option-icon + .kit-select-option-label,
                .kit-select-option-badge + .kit-select-option-label {
                    width: calc(100% - 20px);
                }
            }

            .kit-icon {
                padding: 5px;
            }
        }

        .ant-select-item.ant-select-item-option-selected {
            background: ${({$theme}) => $theme.colors.background.selected};
            font-weight: ${({$theme}) => $theme.typography.fontWeight.selected};
            color: ${({$theme}) => $theme.colors.typography.selected};
        }

        .ant-select-item.ant-select-item-option-active {
            background: ${({$theme}) => $theme.colors.background.active};
            font-weight: ${({$theme}) => $theme.typography.fontWeight.active};
            color: ${({$theme}) => $theme.colors.typography.active};
        }

        .ant-select-item.ant-select-item-option-disabled {
            opacity: .5;
        }
    }

    .kit-select-dropdown-bottom {
        .kit-select-dropdown-content {
            border-radius: 0 0 ${({$theme}) => $theme.border.radius}px ${({$theme}) => $theme.border.radius}px ;
            transform: translateX(-1px) translateY(-3px);
        }

        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-topLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder,
        &.ant-select-dropdown-placement-topLeft .rc-virtual-list-holder {
            border-radius: ${({$theme}) => $theme.border.radius}px ${({$theme}) => $theme.border.radius}px 0 0 ;
        }
    }

    .kit-select-dropdown-top {
        .kit-select-dropdown-content {
            border-radius: ${({$theme}) => $theme.border.radius}px ${({$theme}) => $theme.border.radius}px 0 0 ;
            transform: translateX(-1px) translateY(3px);
        }

        &.ant-select-dropdown-placement-bottomLeft .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-bottomRight .kit-select-dropdown-content,
        &.ant-select-dropdown-placement-bottomLeft .rc-virtual-list-holder,
        &.ant-select-dropdown-placement-bottomRight .rc-virtual-list-holder {
            border-radius: 0 0 ${({$theme}) => $theme.border.radius}px ${({$theme}) => $theme.border.radius}px ;
        }
    }
`;

export const StyledKitSelect = styled(AntdSelect)<{
    $theme: IKitSelectTheme;
}>`
    &.ant-select.ant-select-compact-item {
        &:not(.ant-select-compact-last-item) {
            margin-inline-end: 0px;
        }

        &.ant-select-compact-first-item:not(.ant-select-compact-last-item):not(.ant-select-open) {
            border-radius: ${({$theme}) => $theme.border.radius}px 0 0 ${({$theme}) => $theme.border.radius}px;
        }
    }

    &.ant-select-focused.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) {
        .ant-select-selector {
            box-shadow: none;
        }
    }

    &.ant-select-open {
        &:not(.ant-select-compact-item) {
            &.ant-select-bottom {
                border-radius: ${({$theme}) => $theme.border.radius}px ${({$theme}) => $theme.border.radius}px 0 0;
            }

            &.ant-select-top {
                border-radius: 0 0 ${({$theme}) => $theme.border.radius}px ${({$theme}) => $theme.border.radius}px;
            }
        }

        &.ant-select-compact-item {
            &.ant-select-bottom {
                border-radius: ${({$theme}) => $theme.border.radius}px ${({$theme}) => $theme.border.radius}px 0 0;
            }

            &.ant-select-top {
                border-radius: 0 0 ${({$theme}) => $theme.border.radius}px ${({$theme}) => $theme.border.radius}px;
            }
        }

        &.ant-select-compact-item.ant-select-compact-first-item:not(.ant-select-compact-last-item) {
            &.ant-select-bottom {
                border-radius: ${({$theme}) => $theme.border.radius}px 0 0 0;
            }

            &.ant-select-top {
                border-radius: 0 0 0 ${({$theme}) => $theme.border.radius}7px;
            }
        }
    }

    &.ant-select:not(.ant-select-customize-input) {
        display: grid;
        min-height: 40px;
        grid-template-areas: 'input clear arrow';
        grid-template-columns: calc(100% - 60px) 30px 30px;
        position: relative;
        background-color: #ffffff;
        border: 1px solid #d1dfe9;
        border-radius: ${({$theme}) => $theme.border.radius}px;
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
            border-color: ${({$theme}) => $theme.colors.border.hover};
        }

        &.ant-select-focused {
            border-color: ${({$theme}) => $theme.colors.border.focused};
        }

        .ant-select-selector {
            grid-area: input;
            padding: 4px 9px;
            background-color: inherit;
            border: none;
            transition: none;
            min-height: 38px;

            .ant-select-selection-overflow {
                gap: 4px 0px;

                .ant-select-selection-overflow-item {
                    max-width: calc(100% - 4px);

                    > span,
                    .ant-tag {
                        max-width: 100%;
                    }

                    .ant-tag .kit-select-option {
                        width: calc(100% - 20px);

                        .kit-select-option-label {
                            padding-right: 0;
                        }
                    }

                    &.ant-select-selection-overflow-item-rest .ant-select-selection-item {
                        background: none;
                        margin: 0;
                        padding-inline-start: 0;
                        padding-inline-end: 0;
                    }
                }
            }

            .ant-select-selection-item,
            .ant-select-selection-placeholder {
                display: flex;
                align-items: center;
                padding-inline-end: 0;
            }

            .ant-select-selection-item,
            .ant-select-selection-search input {
                font-weight: ${({$theme}) => $theme.typography.fontWeight.content};
                color: ${({$theme}) => $theme.colors.typography.content.default};
            }

            .ant-select-selection-placeholder {
                font-weight: ${({$theme}) => $theme.typography.fontWeight.placeholder};
                color: ${({$theme}) => $theme.colors.typography.placeholder.default};
            }

            .ant-select-selection-item .kit-icon {
                padding: 5px;
            }

            .kit-select-option {
                display: inline-block;
                align-self: center;
                width: 100%;

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
            color: ${({$theme}) => $theme.colors.icon.arrow.default};
            inset-inline-end: 0;
        }

        .ant-select-clear {
            grid-area: clear;
            position: relative;
            display: flex;
            display: flex;
            inset-inline-end: 0;
            font-size: 12px;
            transform: none;
            transition: none;
            opacity: 1;
            color: ${({$theme}) => $theme.colors.icon.clear.default};
        }

        &.ant-select-disabled {
            background-color: ${({$theme}) => $theme.colors.background.disabled};
            color: ${({$theme}) => $theme.colors.typography.content.disabled};
            border-color: ${({$theme}) => $theme.colors.border.disabled};
            cursor: not-allowed;

            .ant-select-selection-item {
                color: ${({$theme}) => $theme.colors.typography.content.disabled};
            }

            .ant-select-selection-placeholder {
                color: ${({$theme}) => $theme.colors.typography.placeholder.disabled};
            }

            .ant-select-arrow {
                color: ${({$theme}) => $theme.colors.icon.arrow.disabled};
            }

            .ant-select-clear {
                color: ${({$theme}) => $theme.colors.icon.clear.disabled};
            }
        }

        &.ant-select-status-warning {
            background-color: ${({$theme}) => $theme.colors.background.warning};
            border-color: ${({$theme}) => $theme.colors.border.warning};
            color: ${({$theme}) => $theme.colors.typography.content.warning};

            .ant-select-selection-item {
                color: ${({$theme}) => $theme.colors.typography.content.warning};
            }

            .ant-select-selection-placeholder {
                color: ${({$theme}) => $theme.colors.typography.placeholder.warning};
            }

            .ant-select-arrow {
                color: ${({$theme}) => $theme.colors.icon.arrow.warning};
                background-color: ${({$theme}) => $theme.colors.background.warning};
            }

            .ant-select-clear {
                color: ${({$theme}) => $theme.colors.icon.clear.warning};
                background-color: ${({$theme}) => $theme.colors.background.warning};
            }
        }

        &.ant-select-status-error {
            background-color: ${({$theme}) => $theme.colors.background.error};
            border-color: ${({$theme}) => $theme.colors.border.error};
            color: ${({$theme}) => $theme.colors.typography.content.error};

            .ant-select-selection-item {
                color: ${({$theme}) => $theme.colors.typography.content.error};
            }

            .ant-select-selection-placeholder {
                color: ${({$theme}) => $theme.colors.typography.placeholder.error};
            }

            .ant-select-arrow {
                color: ${({$theme}) => $theme.colors.icon.arrow.error};
                background-color: ${({$theme}) => $theme.colors.background.error};
            }

            .ant-select-clear {
                color: ${({$theme}) => $theme.colors.icon.clear.error};
                background-color: ${({$theme}) => $theme.colors.background.error};
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
