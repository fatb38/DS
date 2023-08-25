import React from 'react';
import {DatePicker as AntdDatePicker} from 'antd';
import {KitDatePickerProps} from './types';
import styled from 'styled-components';
import {theme} from '../../..';
import {KitTypography} from '@kit/General/';
import {CloseCircleOutlined} from '@ant-design/icons';
import KitInputWrapper from '../Input/InputWrapper';

const StyledDatePicker = styled(AntdDatePicker)`
    &.ant-picker {
        height: 40px;
        padding: 0px 12px 0px 8px;
        min-width: 165px;
        font-weight: ${theme.typography.regularFontWeight};

        .ant-picker-input {
            display: grid;
            grid-template-areas: 'icon input clear';
            grid-template-columns: 28px 1fr 12px;

            input {
                grid-area: input;
                font-weight: ${theme.typography.mediumfontWeight};
                font-family: ${theme.typography.fontFamily};

                &::placeholder {
                    font-weight: ${theme.typography.regularFontWeight};
                }
            }

            .ant-picker-suffix {
                grid-area: icon;
                color: ${theme.color.secondary.mediumGrey.mediumGrey500};
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
                color: ${theme.color.secondary.mediumGrey.mediumGrey500};
            }
        }

        &.ant-picker-disabled {
            border-color: ${theme.color.secondary.mediumGrey.mediumGrey200};

            .ant-picker-input {
                input {
                    color: ${theme.color.secondary.mediumGrey.mediumGrey400};

                    &::placeholder {
                        color: ${theme.color.secondary.mediumGrey.mediumGrey400};
                    }
                }

                .ant-picker-suffix,
                .ant-picker-clear {
                    color: ${theme.color.secondary.mediumGrey.mediumGrey400};
                }
            }
        }

        &.ant-picker-status-warning:not(.ant-picker-disabled) {
            background-color: ${theme.color.secondary.orange.orange100};
            border-color: ${theme.color.secondary.orange.orange400};
            box-shadow: none;

            &:hover {
                background-color: ${theme.color.secondary.orange.orange100};
                border-color: ${theme.color.secondary.orange.orange400};
            }

            .ant-picker-input {
                input {
                    color: ${theme.color.secondary.orange.orange400};

                    &::placeholder {
                        color: ${theme.color.secondary.orange.orange400};
                    }
                }

                .ant-picker-suffix {
                    color: ${theme.color.secondary.orange.orange400};
                }

                .ant-picker-clear {
                    color: ${theme.color.secondary.orange.orange500};
                }
            }
        }

        &.ant-picker-status-error:not(.ant-picker-disabled) {
            background-color: ${theme.color.secondary.red.red100};
            border-color: ${theme.color.secondary.red.red400};
            box-shadow: none;

            &:hover {
                background-color: ${theme.color.secondary.red.red100};
                border-color: ${theme.color.secondary.red.red400};
            }

            .ant-picker-input {
                input {
                    color: ${theme.color.secondary.red.red400};

                    &::placeholder {
                        color: ${theme.color.secondary.red.red400};
                    }
                }

                .ant-picker-suffix,
                .ant-picker-clear {
                    color: ${theme.color.secondary.red.red400};
                }
            }
        }

        &.ant-picker-focused {
            border-style: dashed;
            box-shadow: none;

            &:not(.ant-picker-disabled) .ant-picker-input input::placeholder {
                color: transparent;
            }
        }
    }
`;

const KitDatePicker: React.FunctionComponent<KitDatePickerProps> = ({
    label,
    helper,
    allowClear = true,
    ...datePickerProps
}) => {
    return (
        <KitInputWrapper
            label={label}
            helper={helper}
            disabled={datePickerProps.disabled}
            status={datePickerProps.status}
        >
            <StyledDatePicker
                {...datePickerProps}
                allowClear={allowClear ? {clearIcon: <CloseCircleOutlined />} : false}
            />
        </KitInputWrapper>
    );
};

export default KitDatePicker;
