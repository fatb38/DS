import React from 'react';
import {DatePicker as AntdDatePicker} from 'antd';
import {KitRangePickerProps} from './types';
import styled from 'styled-components';
import {CloseCircleOutlined} from '@ant-design/icons';
import KitInputWrapper from '../Input/InputWrapper';
import {useKitTheme} from '@theme/theme-context';
import {IKitDatePickerTheme} from '@theme/types/components/DataEntry/DatePicker';

const StyledRangePicker = styled.div<{
    $theme: IKitDatePickerTheme['RangePicker'];
}>`
    .ant-picker.ant-picker-range {
        display: grid;
        grid-template-areas: 'icon input1 separator input2 clear';
        grid-template-columns: 28px 1fr 28px 1fr 12px;
        height: 40px;
        min-width: 270px;
        padding: 0px 12px 0px 8px;
        font-weight: ${({$theme}) => $theme.typography.fontWeight.placeholder};

        .ant-picker-range-separator {
            grid-area: separator;

            .ant-picker-separator {
                color: ${({$theme}) => $theme.colors.separator.default};
            }
        }

        .ant-picker-active-bar {
            display: none;
        }

        .ant-picker-input {
            &:nth-child(1) {
                grid-area: input1;
            }

            &:nth-child(2) {
                grid-area: input2;
            }
        }

        .ant-picker-input {
            input {
                font-weight: ${({$theme}) => $theme.typography.fontWeight.content};
                font-family: ${({$theme}) => $theme.typography.fontFamily};

                &::placeholder {
                    font-weight: ${({$theme}) => $theme.typography.fontWeight.placeholder};
                }
            }
        }

        .ant-picker-suffix {
            grid-area: icon;
            color: ${({$theme}) => $theme.colors.icon.default};
        }

        .ant-picker-clear {
            grid-area: clear;
            font-size: 12px;
            position: initial;
            top: initial;
            line-height: 1;
            transform: none;
            transition: none;
            opacity: 1;
            color: ${({$theme}) => $theme.colors.clearIcon.default};
        }

        .ant-picker-input {
            input[disabled] {
                color: ${({$theme}) => $theme.colors.typography.content.disabled};
            }
        }

        &.ant-picker-disabled {
            border-color: ${({$theme}) => $theme.colors.border.disabled};

            .ant-picker-input {
                input {
                    color: ${({$theme}) => $theme.colors.typography.content.disabled};

                    &::placeholder {
                        color: ${({$theme}) => $theme.colors.typography.placeholder.disabled};
                    }
                }
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: ${({$theme}) => $theme.colors.separator.disabled};
            }

            .ant-picker-suffix {
                color: ${({$theme}) => $theme.colors.icon.disabled};
            }

            .ant-picker-clear {
                color: ${({$theme}) => $theme.colors.clearIcon.disabled};
            }
        }

        &.ant-picker-status-warning:not(.ant-picker-disabled) {
            background-color: ${({$theme}) => $theme.colors.background.warning};
            border-color: ${({$theme}) => $theme.colors.border.warning};
            box-shadow: none;

            &:hover {
                background-color: ${({$theme}) => $theme.colors.background.warning};
                border-color: ${({$theme}) => $theme.colors.border.warning};
            }

            .ant-picker-input {
                input {
                    color: ${({$theme}) => $theme.colors.typography.content.warning};

                    &::placeholder {
                        color: ${({$theme}) => $theme.colors.typography.placeholder.warning};
                    }
                }
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: ${({$theme}) => $theme.colors.separator.warning};
            }

            .ant-picker-suffix {
                color: ${({$theme}) => $theme.colors.icon.warning};
            }

            .ant-picker-clear {
                color: ${({$theme}) => $theme.colors.clearIcon.warning};
            }
        }

        &.ant-picker-status-error:not(.ant-picker-disabled) {
            background-color: ${({$theme}) => $theme.colors.background.error};
            border-color: ${({$theme}) => $theme.colors.border.error};
            box-shadow: none;

            &:hover {
                background-color: ${({$theme}) => $theme.colors.background.error};
                border-color: ${({$theme}) => $theme.colors.border.error};
            }

            .ant-picker-input {
                input {
                    color: ${({$theme}) => $theme.colors.typography.content.error};

                    &::placeholder {
                        color: ${({$theme}) => $theme.colors.typography.placeholder.error};
                    }
                }
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: ${({$theme}) => $theme.colors.separator.error};
            }

            .ant-picker-suffix {
                color: ${({$theme}) => $theme.colors.icon.error};
            }

            .ant-picker-clear {
                color: ${({$theme}) => $theme.colors.clearIcon.error};
            }
        }

        &.ant-picker-focused {
            border-style: dashed;
            box-shadow: none;

            &:not(.ant-picker-disabled) .ant-picker-input:focus-within input::placeholder {
                color: transparent;
            }
        }
    }
`;

const KitDatePicker: React.FunctionComponent<KitRangePickerProps> = ({
    label,
    helper,
    allowClear = true,
    ...rangePickerProps
}) => {
    const {theme} = useKitTheme();

    const isRangePickerDisabled = () => {
        if (rangePickerProps.disabled === undefined) {
            return false;
        }

        if (typeof rangePickerProps.disabled === 'boolean') {
            return rangePickerProps.disabled;
        }

        return rangePickerProps.disabled[0] && rangePickerProps.disabled[1];
    };

    return (
        <KitInputWrapper
            label={label}
            helper={helper}
            disabled={isRangePickerDisabled()}
            status={rangePickerProps.status}
        >
            <StyledRangePicker $theme={theme.components.DatePicker.RangePicker}>
                <AntdDatePicker.RangePicker
                    {...rangePickerProps}
                    allowClear={allowClear ? {clearIcon: <CloseCircleOutlined />} : false}
                />
            </StyledRangePicker>
        </KitInputWrapper>
    );
};

export default KitDatePicker;
