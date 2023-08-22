import React from 'react';
import {InputNumber as AntdInputNumber} from 'antd';
import {KitInputNumberProps} from './types';
import {styled} from 'styled-components';
import theme from '@theme/index';
import {KitTypography} from '@kit/General/';
import KitInputWrapper from '../Input/InputWrapper';

const StyledAntdInputNumber = styled(AntdInputNumber)`
    font-weight: ${theme.typography.regularFontWeight};
    height: 40px;
    line-height: 40px;

    .ant-input-number-input {
        font-weight: ${theme.typography.mediumfontWeight};

        &::placeholder {
            font-weight: ${theme.typography.regularFontWeight};
        }
    }

    &:not(.ant-input-number-affix-wrapper) {
        line-height: 38px;

        .ant-input-number-input-wrap {
            border-radius: 7px;
        }
    }

    // Use :focus-within because antd doesn't add a "ant-input-number-affix-wrapper-focused" class
    &.ant-input-number-focused,
    &.ant-input-number-affix-wrapper:focus-within {
        border-style: dashed;
        border-color: ${theme.color.primary.blue400};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            box-shadow: none;
        }
    }

    &.ant-input-number-focused,
    &.ant-input-number-affix-wrapper .ant-input-number-focused,
    &.ant-input-number-focused .ant-input-number-affix-wrapper {
        .ant-input-number-input::placeholder {
            color: transparent;
        }
    }

    &.ant-input-number-disabled,
    &.ant-input-number-affix-wrapper-disabled {
        border-color: ${theme.color.secondary.mediumGrey.mediumGrey200};

        .ant-input-number-input {
            color: ${theme.color.secondary.mediumGrey.mediumGrey400};

            &::placeholder {
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-input-number-affix-wrapper .ant-input-number-prefix {
            color: ${theme.color.secondary.mediumGrey.mediumGrey400};
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
            line-height: 38px;
        }
    }

    .ant-input-number-input-wrap {
        border-radius: 0 7px 7px 0;

        .ant-input-number-input {
            padding: 0px 10px;
            border-radius: 0;
        }
    }

    &.ant-input-number-status-warning,
    &.ant-input-number-affix-wrapper-status-warning {
        background-color: ${theme.color.secondary.orange.orange100};
        box-shadow: none;

        .ant-input-number-input-wrap {
            background-color: ${theme.color.secondary.orange.orange100};
        }

        .ant-input-number-input {
            color: ${theme.color.secondary.orange.orange400};

            &::placeholder {
                color: ${theme.color.secondary.orange.orange400};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${theme.color.secondary.orange.orange400};

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.orange.orange400};
            }

            &.ant-input-number-affix-wrapper .ant-input-number-prefix {
                color: ${theme.color.secondary.orange.orange400};
            }
        }
    }

    &.ant-input-number-status-error,
    &.ant-input-number-out-of-range,
    &.ant-input-number-affix-wrapper-status-error {
        background-color: ${theme.color.secondary.red.red100};
        box-shadow: none;

        .ant-input-number-input-wrap {
            background-color: ${theme.color.secondary.red.red100};
        }

        .ant-input-number-input {
            color: ${theme.color.secondary.red.red400};

            &::placeholder {
                color: ${theme.color.secondary.red.red400};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${theme.color.secondary.red.red400};

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.red.red400};
            }

            &.ant-input-number-affix-wrapper .ant-input-number-prefix {
                color: ${theme.color.secondary.red.red400};
            }
        }
    }
`;

export const KitInputNumber: React.FunctionComponent<KitInputNumberProps> = ({label, helper, ...inputNumberProps}) => {
    return (
        <KitInputWrapper
            label={label}
            helper={helper}
            disabled={inputNumberProps.disabled}
            status={inputNumberProps.status}
        >
            <StyledAntdInputNumber {...inputNumberProps} />
        </KitInputWrapper>
    );
};

KitInputNumber.displayName = 'KitInputNumber';
