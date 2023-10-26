import styled, {createGlobalStyle} from 'styled-components';
import {ColorPicker as AntdColorPicker} from 'antd';
import {IStyledAntdColorPicker} from './types';

export const ColorPickerPanelStyle = createGlobalStyle<IStyledAntdColorPicker>`
    .ant-color-picker.kit-color-picker {
        .ant-color-picker-input-container {
            .ant-select {
                .ant-select-selection-item {
                    color: ${({$theme}) => $theme.panel.select.colors.typography.default};
                    font-weight: ${({$theme}) => $theme.panel.select.typography.fontWeight};
                }

                .ant-select-arrow {
                    color: ${({$theme}) => $theme.panel.select.colors.rafter.default};
                }
            }

            .ant-color-picker-input .ant-input-affix-wrapper{
                &.ant-input-affix-wrapper span.ant-input-prefix {
                    color: ${({$theme}) => $theme.panel.input.colors.prefix.default};
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
                    font-weight: ${({$theme}) => $theme.panel.input.typography.fontWeight};
                }
            }
        }

        .ant-color-picker-presets {
            .ant-collapse-arrow {
                color: ${({$theme}) => $theme.panel.preset.colors.rafter.default};
            }

            .ant-color-picker-presets-label {
                font-weight: ${({$theme}) => $theme.panel.preset.typography.fontWeight};
                color: ${({$theme}) => $theme.panel.preset.colors.typography.default};
            }

            .ant-color-picker-presets-empty {
                color: ${({$theme}) => $theme.panel.preset.colors.empty.default};
            }

            .ant-color-picker-presets-color::before {
                border-radius: 4px;
            }
        }
    }
`;

export const StyledAntdColorPicker = styled(AntdColorPicker)<IStyledAntdColorPicker>`
    font-weight: ${({$theme}) => $theme.typography.fontWeight};
    height: 40px;
    min-width: 40px;
    line-height: 40px;
    box-shadow: none;

    &.ant-color-picker-trigger-active {
        border-style: dashed;
    }

    &.ant-color-picker-trigger-disabled {
        &:hover {
            border-color: ${({$theme}) => $theme.colors.border.disabled};
        }

        .ant-color-picker-trigger-text {
            color: ${({$theme}) => $theme.colors.typography.disabled};
        }
    }

    .ant-color-picker-color-block {
        width: 32px;
        height: 32px;
        border-radius: ${({$theme}) => $theme.colorBlock.border.radius}px;
    }
`;
