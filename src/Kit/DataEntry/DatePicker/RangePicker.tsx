import React from 'react';
import {DatePicker as AntdDatePicker} from 'antd';
import {KitRangePickerProps} from './types';
import styled from 'styled-components';
import {theme} from '../../..';

const StyledRangePicker = styled(AntdDatePicker.RangePicker)`
    &.ant-picker.ant-picker-range {
        height: 40px;
        padding: 0px 10px;
        font-weight: ${theme.typography.regularFontWeight};

        &.ant-picker-focused {
            border-style: dashed;
            box-shadow: none;
        }

        .ant-picker-range-separator .ant-picker-separator {
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-picker-active-bar {
            bottom: 8px;
            height: 1px;
        }

        .ant-picker-suffix,
        .ant-picker-clear {
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-picker-clear {
            inset-inline-end: 10px;
        }

        .ant-picker-input {
            input[disabled] {
                color: ${theme.color.primary.blue200};
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
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: ${theme.color.primary.blue200};
            }

            .ant-picker-suffix,
            .ant-picker-clear {
                color: ${theme.color.primary.blue200};
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
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: ${theme.color.secondary.orange.orange300};
            }

            .ant-picker-suffix,
            .ant-picker-clear {
                color: ${theme.color.secondary.orange.orange300};
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
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: ${theme.color.secondary.red.red300};
            }

            .ant-picker-suffix,
            .ant-picker-clear {
                color: ${theme.color.secondary.red.red300};
            }
        }
    }
`;

const KitDatePicker: React.FunctionComponent<KitRangePickerProps> = rangePickerProps => {
    return <StyledRangePicker {...rangePickerProps} />;
};

export default KitDatePicker;
