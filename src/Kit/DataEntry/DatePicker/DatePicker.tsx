import React from 'react';
import {DatePicker as AntdDatePicker} from 'antd';
import {KitDatePickerProps} from './types';
import styled from 'styled-components';
import {theme} from '../../..';

const StyledDatePicker = styled(AntdDatePicker)`
    &.ant-picker {
        height: 40px;
        padding: 0px 10px;
        min-width: 130px;
        font-weight: ${theme.typography.regularFontWeight};

        &.ant-picker-focused {
            border-style: dashed;
            box-shadow: none;
        }

        .ant-picker-input {
            .ant-picker-suffix,
            .ant-picker-clear {
                color: ${theme.color.secondary.mediumGrey.mediumGrey500};
            }
        }

        &.ant-picker-disabled {
            background-color: ${theme.color.primary.blue100};
            border-color: ${theme.color.primary.blue100};

            .ant-picker-input {
                input {
                    color: ${theme.color.primary.blue300};

                    &::placeholder {
                        color: ${theme.color.primary.blue200};
                    }
                }

                .ant-picker-suffix,
                .ant-picker-clear {
                    color: ${theme.color.primary.blue200};
                }
            }
        }

        &.ant-picker-status-warning:not(.ant-picker-disabled) {
            background-color: ${theme.color.secondary.orange.orange100};
            border-color: ${theme.color.secondary.orange.orange400};

            &:hover {
                background-color: ${theme.color.secondary.orange.orange100};
                border-color: ${theme.color.secondary.orange.orange400};
            }

            .ant-picker-input {
                input {
                    color: ${theme.color.secondary.orange.orange500};

                    &::placeholder {
                        color: ${theme.color.secondary.orange.orange300};
                    }
                }

                .ant-picker-suffix,
                .ant-picker-clear {
                    color: ${theme.color.secondary.orange.orange300};
                }
            }
        }

        &.ant-picker-status-error:not(.ant-picker-disabled) {
            background-color: ${theme.color.secondary.red.red100};
            border-color: ${theme.color.secondary.red.red400};

            &:hover {
                background-color: ${theme.color.secondary.red.red100};
                border-color: ${theme.color.secondary.red.red400};
            }

            .ant-picker-input {
                input {
                    color: ${theme.color.secondary.red.red400};

                    &::placeholder {
                        color: ${theme.color.secondary.red.red300};
                    }
                }

                .ant-picker-suffix,
                .ant-picker-clear {
                    color: ${theme.color.secondary.red.red300};
                }
            }
        }
    }
`;

const KitDatePicker: React.FunctionComponent<KitDatePickerProps> = datePickerProps => {
    return <StyledDatePicker {...datePickerProps} />;
};

export default KitDatePicker;
