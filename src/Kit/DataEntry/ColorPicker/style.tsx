import styled, {createGlobalStyle} from 'styled-components';
import {ColorPicker as AntdColorPicker} from 'antd';
import {kitColorPickerCssTokens} from '@theme/aristid/components/DataEntry/ColorPicker';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {borderCssTokens} from '@theme/aristid/general/border';

export const ColorPickerPanelStyle = createGlobalStyle`
    .ant-color-picker.kit-color-picker {
        .ant-color-picker-input-container {
            .ant-select {
                .ant-select-selection-item {
                    color: var(${kitColorPickerCssTokens.panel.select.colors.typography.default}, var(${kitColorsPaletteCssTokens.primary.primary300}));
                    font-weight: var(${kitColorPickerCssTokens.panel.select.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));
                }

                .ant-select-arrow {
                    color: var(${kitColorPickerCssTokens.panel.select.colors.rafter.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500}));
                }
            }

            .ant-color-picker-input .ant-input-affix-wrapper{
                &.ant-input-affix-wrapper span.ant-input-prefix {
                    color: var(${kitColorPickerCssTokens.panel.input.colors.prefix.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500}));
                }
            }

            .ant-input-affix-wrapper,
            .ant-input-number {
                box-shadow: none;

                &.ant-input-affix-wrapper-focused,
                &.ant-input-number-focused {
                    border-style: dashed;
                }

                input {
                    font-weight: var(${kitColorPickerCssTokens.panel.input.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));
                }
            }
        }

        .ant-color-picker-presets {
            .ant-collapse-arrow {
                color: var(${kitColorPickerCssTokens.panel.preset.colors.rafter.default}, var(${kitColorsPaletteCssTokens.neutral.black}));
            }

            .ant-color-picker-presets-label {
                font-weight: var(${kitColorPickerCssTokens.panel.preset.typography.fontWeight}, var(${typographyCssTokens.boldFontWeight}));
                color: var(${kitColorPickerCssTokens.panel.preset.colors.rafter.default}, var(${kitColorsPaletteCssTokens.neutral.black}));
            }

            .ant-color-picker-presets-empty {
                color: var(${kitColorPickerCssTokens.panel.preset.colors.empty.default}, var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300}));
            }

            .ant-color-picker-presets-color::before {
                border-radius: 4px;
            }
        }
    }
`;

export const StyledAntdColorPicker = styled(AntdColorPicker)`
    font-weight: var(${kitColorPickerCssTokens.typography.fontWeight}, var(${typographyCssTokens.mediumfontWeight}));
    height: 40px;
    min-width: 40px;
    line-height: 40px;
    box-shadow: none;

    &.ant-color-picker-trigger-active {
        border-style: dashed;
    }

    &.ant-color-picker-trigger-disabled {
        &:hover {
            border-color: var(
                ${kitColorPickerCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        }

        .ant-color-picker-trigger-text {
            color: var(
                ${kitColorPickerCssTokens.colors.typography.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        }
    }

    .ant-color-picker-color-block {
        width: 32px;
        height: 32px;
        border-radius: calc(
            var(${kitColorPickerCssTokens.colorBlock.border.radius}, var(${borderCssTokens.radius.xs})) * 1px
        );
    }
`;
