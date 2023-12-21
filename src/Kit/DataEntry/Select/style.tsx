import styled, {createGlobalStyle} from 'styled-components';
import {Select as AntdSelect} from 'antd';
import {
    kitSelectCssTokens,
    kitSelectColorBadgeCssTokens,
    kitSelectDropDownCssTokens
} from '@theme/aristid/components/DataEntry/Select';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {borderCssTokens} from '@theme/aristid/general/border';
import {typographyCssTokens} from '@theme/aristid/general/typography';

export const StyledBadge = styled.div`
    display: inline-block;
    vertical-align: middle;

    div {
        margin-left: 4px;
        width: calc(var(${kitSelectColorBadgeCssTokens.width}, 16) * 1px);
        height: calc(var(${kitSelectColorBadgeCssTokens.height}, 16) * 1px);
        border-radius: calc(
            var(${kitSelectColorBadgeCssTokens.border.radius}, var(${borderCssTokens.radius.xxs})) * 1px
        );
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

// "> div:not(.kit-select-dropdown-content) > .rc-virtual-list"     | This selector is used for AutoComplete DropDown content
// ".kit-select-dropdown-content"                                   | This selector is used for Select DropDown content
export const SelectDropDownStyle = createGlobalStyle`
    .ant-select-dropdown {
        background: transparent;
        overflow: visible;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-family: var(
            ${kitSelectDropDownCssTokens.typography.fontFamily},
            var(${typographyCssTokens.fontFamily})
        );
        font-weight: var(
            ${kitSelectDropDownCssTokens.typography.fontWeight.default},
            var(${typographyCssTokens.mediumfontWeight})
        );
        color: var(
            ${kitSelectDropDownCssTokens.colors.typography.default},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
        );

        &.kit-select-dropdown-bottom {
            .kit-select-dropdown-content {
                border-radius: 0 0 calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) ;
                transform: translate(-1px, -3px);
            }

            > div:not(.kit-select-dropdown-content) > .rc-virtual-list {
                border-radius: 0 0 calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) ;
                transform: translate(0px, -4px);
            }

            &.ant-select-dropdown-placement-topLeft, &.ant-select-dropdown-placement-topRight {
                .kit-select-dropdown-content {
                    transform: translate(-1px, 3px);
                    border-radius: calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) 0 0 ;
                }

                > div:not(.kit-select-dropdown-content) > .rc-virtual-list {
                    transform: translate(0px, 4px);
                    border-radius:calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) 0 0 ;
                }
            }
        }

        &.kit-select-dropdown-top {
            .kit-select-dropdown-content {
                border-radius: calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) 0 0 ;
                transform: translate(-1px, 3px);
            }

            > div:not(.kit-select-dropdown-content) > .rc-virtual-list {
                border-radius: calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) 0 0 ;
                transform: translate(0px, 4px);
            }

            &.ant-select-dropdown-placement-bottomLeft, &.ant-select-dropdown-placement-bottomRight {
                .kit-select-dropdown-content {
                    transform: translate(-1px, -3px);
                    border-radius: 0 0 calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
                }

                > div:not(.kit-select-dropdown-content) > .rc-virtual-list {
                    transform: translate(0px, -4px);
                    border-radius: 0 0 calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) calc(var(${kitSelectDropDownCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) ;
                }
            }
        }

        > div:not(.kit-select-dropdown-content) > .rc-virtual-list,
        .kit-select-dropdown-content {
            &.kit-select-dropdown-content {
                width: calc(100% + 42px);
            }

            box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.30);
            background-color: var(
                ${kitSelectDropDownCssTokens.colors.background.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
            );
            padding: 10px;
            overflow: hidden;
            border-radius: 7px ;

            .ant-select-item {
                border: none;
                min-height: 36px;
                font-weight: var(
                    ${kitSelectDropDownCssTokens.typography.fontWeight.selected},
                    var(${typographyCssTokens.mediumfontWeight})
                );
                color: var(
                    ${kitSelectDropDownCssTokens.colors.typography.selected},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                );

                &:last-of-type {
                    min-height: 32px;
                }

                &.ant-select-item-option {
                    padding: 0;
                    margin: 0;
                    border: none;
                    background: transparent;

                    &.ant-select-item-option-grouped {
                        margin-left: 5px;
                    }

                    .ant-select-item-option-content {
                        display: flex;
                        align-items: center;
                        min-height: 32px;
                        height: 32px;
                        border-radius: 8px;
                        padding-left: 8px;
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

                &.ant-select-item-option-selected {
                    .ant-select-item-option-content {
                        background: var(
                            ${kitSelectDropDownCssTokens.colors.background.selected},
                            var(${kitColorsPaletteCssTokens.primary.primary100})
                        );
                        font-weight: var(
                            ${kitSelectDropDownCssTokens.typography.fontWeight.selected},
                            var(${typographyCssTokens.mediumfontWeight})
                        );
                        color: var(
                            ${kitSelectDropDownCssTokens.colors.typography.selected},
                            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                        );
                        border-radius: 8px 0 0 8px;
                    }

                    .ant-select-item-option-state {
                        background: var(
                            ${kitSelectDropDownCssTokens.colors.background.selected},
                            var(${kitColorsPaletteCssTokens.primary.primary100})
                        );
                        border-radius: 0 8px 8px 0;
                        min-width: 8px;
                        height: 32px;
                    }
                }

                &.ant-select-item-option-active .ant-select-item-option-content {
                    background: var(
                        ${kitSelectDropDownCssTokens.colors.background.active},
                        var(${kitColorsPaletteCssTokens.primary.primary100})
                    );
                    font-weight: var(
                        ${kitSelectDropDownCssTokens.typography.fontWeight.active},
                        var(${typographyCssTokens.mediumfontWeight})
                    );
                    color: var(
                        ${kitSelectDropDownCssTokens.colors.typography.active},
                        var(${kitColorsPaletteCssTokens.primary.primary400})
                    );
                }

                &.ant-select-item-option-disabled .ant-select-item-option-content {
                    opacity: .5;
                }

                &.ant-select-item-group {
                    font-weight: var(
                        ${kitSelectDropDownCssTokens.typography.fontWeight.group},
                        var(${typographyCssTokens.boldFontWeight})
                    );
                    color: var(
                        ${kitSelectDropDownCssTokens.colors.typography.group},
                        var(${kitColorsPaletteCssTokens.neutral.typography.black})
                    );
                    padding: 8px 0;
                }
            }
        }
    }
`;

export const StyledKitSelect = styled(AntdSelect)`
    &.ant-select.ant-select-compact-item {
        &:not(.ant-select-compact-last-item) {
            margin-inline-end: 0px;
        }

        &.ant-select-compact-first-item:not(.ant-select-compact-last-item):not(.ant-select-open) {
            border-radius: calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) 0 0
                calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
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
                border-radius: calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px)
                    calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) 0 0;
            }

            &.ant-select-top {
                border-radius: 0 0
                    calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px)
                    calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
            }
        }

        &.ant-select-compact-item {
            &.ant-select-bottom {
                border-radius: calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px)
                    calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) 0 0;
            }

            &.ant-select-top {
                border-radius: 0 0
                    calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px)
                    calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
            }
        }

        &.ant-select-compact-item.ant-select-compact-first-item:not(.ant-select-compact-last-item) {
            &.ant-select-bottom {
                border-radius: calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px) 0
                    0 0;
            }

            &.ant-select-top {
                border-radius: 0 0 0
                    calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
            }
        }
    }

    &.ant-select:not(.ant-select-customize-input) {
        display: grid;
        min-height: 40px;
        grid-template-areas: 'input clear arrow';
        grid-template-columns: calc(100% - 60px) 30px 30px;
        position: relative;
        background-color: var(
            ${kitSelectCssTokens.colors.background.default},
            var(${kitColorsPaletteCssTokens.neutral.white})
        );
        border: 1px solid #d1dfe9;
        border-radius: calc(var(${kitSelectCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover {
            border-color: var(
                ${kitSelectCssTokens.colors.border.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }

        &.ant-select-focused {
            border-color: var(
                ${kitSelectCssTokens.colors.border.focused},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
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
                font-weight: var(
                    ${kitSelectCssTokens.typography.fontWeight.content},
                    var(${typographyCssTokens.mediumfontWeight})
                );
                color: var(
                    ${kitSelectCssTokens.colors.typography.content.default},
                    var(${kitColorsPaletteCssTokens.primary.primary300})
                );
            }

            .ant-select-selection-placeholder {
                font-weight: var(
                    ${kitSelectCssTokens.typography.fontWeight.placeholder},
                    var(${typographyCssTokens.regularFontWeight})
                );
                color: var(
                    ${kitSelectCssTokens.colors.typography.placeholder.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                );
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
            top: 49%;
            color: var(
                ${kitSelectCssTokens.colors.icon.arrow.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );
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
            color: var(
                ${kitSelectCssTokens.colors.icon.clear.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );
        }

        &.ant-select-disabled {
            background-color: var(
                ${kitSelectCssTokens.colors.background.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
            );
            color: var(
                ${kitSelectCssTokens.colors.typography.content.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
            border-color: var(
                ${kitSelectCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
            cursor: not-allowed;

            .ant-select-selection-item {
                color: var(
                    ${kitSelectCssTokens.colors.typography.content.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }

            .ant-select-selection-placeholder {
                color: var(
                    ${kitSelectCssTokens.colors.typography.placeholder.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }

            .ant-select-arrow {
                color: var(
                    ${kitSelectCssTokens.colors.icon.arrow.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }

            .ant-select-clear {
                color: var(
                    ${kitSelectCssTokens.colors.icon.clear.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
        }

        &.ant-select-status-warning {
            background-color: var(
                ${kitSelectCssTokens.colors.background.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
            );
            color: var(
                ${kitSelectCssTokens.colors.typography.content.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
            );
            border-color: var(
                ${kitSelectCssTokens.colors.border.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
            );

            .ant-select-selection-item {
                color: var(
                    ${kitSelectCssTokens.colors.typography.content.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
                );
            }

            .ant-select-selection-placeholder {
                color: var(
                    ${kitSelectCssTokens.colors.typography.placeholder.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }

            .ant-select-arrow {
                color: var(
                    ${kitSelectCssTokens.colors.icon.arrow.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
                background-color: var(
                    ${kitSelectCssTokens.colors.background.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
                );
            }

            .ant-select-clear {
                color: var(
                    ${kitSelectCssTokens.colors.icon.clear.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
                background-color: var(
                    ${kitSelectCssTokens.colors.background.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
                );
            }
        }

        &.ant-select-status-error {
            background-color: var(
                ${kitSelectCssTokens.colors.background.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red100})
            );
            color: var(
                ${kitSelectCssTokens.colors.typography.content.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
            border-color: var(
                ${kitSelectCssTokens.colors.border.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );

            .ant-select-selection-item {
                color: var(
                    ${kitSelectCssTokens.colors.typography.content.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }

            .ant-select-selection-placeholder {
                color: var(
                    ${kitSelectCssTokens.colors.typography.placeholder.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }

            .ant-select-arrow {
                color: var(
                    ${kitSelectCssTokens.colors.icon.arrow.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
                background-color: var(
                    ${kitSelectCssTokens.colors.background.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red100})
                );
            }

            .ant-select-clear {
                color: var(
                    ${kitSelectCssTokens.colors.icon.clear.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
                background-color: var(
                    ${kitSelectCssTokens.colors.background.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red100})
                );
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
