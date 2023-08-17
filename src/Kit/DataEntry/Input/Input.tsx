import React from 'react';
import {Input as AntdInput} from 'antd';
import {KitInputProps} from './types';
import {styled} from 'styled-components';
import theme from '@theme/index';
import {KitTypography} from '@kit/General/';
import {CloseCircleOutlined} from '@ant-design/icons';
import KitInputWrapper from './InputWrapper';

const StyledAntdInput = styled(AntdInput)`
    &.ant-input,
    .ant-input {
        height: 40px;
        padding: 0px 10px;
        font-weight: ${theme.typography.regularFontWeight};
    }

    &.ant-input-affix-wrapper {
        padding: 0px 12px;

        .ant-input-prefix {
            margin-inline-end: 10px;
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        }

        .ant-input-suffix {
            margin-inline-start: 10px;
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};

            .ant-input-clear-icon {
                color: ${theme.color.secondary.mediumGrey.mediumGrey500};
            }
        }

        .ant-input-suffix .ant-input-show-count-suffix {
            color: ${theme.color.secondary.mediumGrey.mediumGrey300};
            font-size: ${theme.typography.fontSize7};
            font-weight: ${theme.typography.regularFontWeight};
        }

        .ant-input {
            font-weight: ${theme.typography.regularFontWeight};
            height: 38px;
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: ${theme.color.secondary.mediumGrey.mediumGrey200};

            .ant-input-prefix,
            .ant-input-suffix,
            .ant-input-suffix .ant-input-show-count-suffix,
            .ant-input-suffix .ant-input-clear-icon {
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-input-affix-wrapper-status-error:not(.ant-input-disabled) {
            .ant-input-prefix,
            .ant-input-suffix {
                color: ${theme.color.secondary.red.red400};
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix {
                    color: ${theme.color.secondary.red.red300};
                }

                .ant-input-clear-icon {
                    color: ${theme.color.secondary.red.red400};
                }
            }
        }

        &.ant-input-affix-wrapper-status-warning:not(.ant-input-disabled) {
            .ant-input-prefix,
            .ant-input-suffix {
                color: ${theme.color.secondary.orange.orange400};
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix {
                    color: ${theme.color.secondary.orange.orange300};
                }

                .ant-input-clear-icon {
                    color: ${theme.color.secondary.orange.orange500};
                }
            }
        }
    }

    &.ant-input-disabled,
    .ant-input-disabled {
        border-color: ${theme.color.secondary.mediumGrey.mediumGrey200};
        color: ${theme.color.secondary.mediumGrey.mediumGrey400};

        &:hover {
            border-color: ${theme.color.secondary.mediumGrey.mediumGrey200};
        }

        &::placeholder {
            color: ${theme.color.secondary.mediumGrey.mediumGrey400};
        }
    }

    &.ant-input-status-error,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error .ant-input {
        background-color: ${theme.color.secondary.red.red100};
        color: ${theme.color.secondary.red.red400};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${theme.color.secondary.red.red400};
            box-shadow: none;

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.red.red400};
            }
        }

        &::placeholder {
            color: ${theme.color.secondary.red.red400};
        }
    }

    &.ant-input-status-warning,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning .ant-input {
        background-color: ${theme.color.secondary.orange.orange100};
        color: ${theme.color.secondary.orange.orange500};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${theme.color.secondary.orange.orange400};
            box-shadow: none;

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.orange.orange400};
            }
        }

        &::placeholder {
            color: ${theme.color.secondary.orange.orange400};
        }
    }

    &:focus-within,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-focused {
        border-style: dashed;
        box-shadow: none;

        &.ant-input::placeholder,
        .ant-input::placeholder {
            color: transparent;
        }
    }
`;

const KitInput: React.FunctionComponent<KitInputProps> = ({label, helper, allowClear = true, ...inputProps}) => {
    return (
        <KitInputWrapper label={label} helper={helper} disabled={inputProps.disabled} status={inputProps.status}>
            <StyledAntdInput
                {...inputProps}
                allowClear={allowClear ? {clearIcon: <CloseCircleOutlined />} : undefined}
            />
        </KitInputWrapper>
    );
};

export default KitInput;
