import React from 'react';
import {InputNumber as AntdInputNumber} from 'antd';
import {KitInputNumberProps} from './types';
import {styled} from 'styled-components';
import theme from '@theme/index';

const StyledAntdInputNumber = styled(AntdInputNumber)`
    font-weight: ${theme.typography.regularFontWeight};
    height: 40px;
    line-height: 40px;

    &.ant-input-number-focused,
    &.ant-input-number-affix-wrapper-focused {
        border-style: dashed;
    }

    &.ant-input-number-disabled,
    &.ant-input-number-affix-wrapper-disabled {
        border-color: ${theme.color.primary.blue100};

        .ant-input-number-input {
            color: ${theme.color.primary.blue300};

            &::placeholder {
                color: ${theme.color.primary.blue200};
            }
        }
    }

    &.ant-input-number-affix-wrapper {
        .ant-input-number-input-wrap {
            .ant-input-number-input {
                padding: 0px 10px 0px 0px;
            }
        }

        .ant-input-number-prefix {
            margin-inline-end: 10px;
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-input-number {
            height: 38px;
        }
    }

    .ant-input-number-input-wrap {
        .ant-input-number-input {
            padding: 0px 10px;
        }
    }

    &.ant-input-number-status-warning,
    &.ant-input-number-affix-wrapper-status-warning {
        background-color: ${theme.color.secondary.orange.orange100};

        .ant-input-number-input {
            color: ${theme.color.secondary.orange.orange500};

            &::placeholder {
                color: ${theme.color.secondary.orange.orange300};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${theme.color.secondary.orange.orange400};

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.orange.orange400};
            }
        }
    }

    &.ant-input-number-status-error,
    &.ant-input-number-out-of-range,
    &.ant-input-number-affix-wrapper-status-error {
        background-color: ${theme.color.secondary.red.red100};

        .ant-input-number-input {
            color: ${theme.color.secondary.red.red400};

            &::placeholder {
                color: ${theme.color.secondary.red.red300};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${theme.color.secondary.red.red400};

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.red.red400};
            }
        }
    }
`;

export const KitInputNumber: React.FunctionComponent<KitInputNumberProps> = inputNumberProps => {
    return <StyledAntdInputNumber {...inputNumberProps} />;
};

KitInputNumber.displayName = 'KitInputNumber';
