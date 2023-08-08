import React from 'react';
import {Input as AntdInput} from 'antd';
import {KitTextAreaProps} from './types';
import {styled} from 'styled-components';
import theme from '@theme/index';

const StyledAntdTextArea = styled(AntdInput.TextArea)`
    &.ant-input,
    .ant-input {
        padding: 4px 10px;
        font-weight: ${theme.typography.regularFontWeight};

        &:focus {
            border-style: dashed;
        }
    }

    .ant-input-suffix {
        .ant-input-clear-icon {
            color: ${theme.color.secondary.mediumGrey.mediumGrey300};
        }
    }

    &.ant-input-affix-wrapper {
        &.ant-input-affix-wrapper-focused {
            border-style: dashed;
        }

        &.ant-input-textarea-allow-clear {
            .ant-input {
                padding-inline-end: 24px;
            }
        }

        &.ant-input-textarea-show-count {
            .ant-input-data-count {
                bottom: -18px;
                color: ${theme.color.secondary.mediumGrey.mediumGrey300};
                font-size: ${theme.typography.fontSize7};
                font-weight: ${theme.typography.regularFontWeight};
                line-height: ${theme.typography.lineHeight7};
            }
        }

        &.ant-input-affix-wrapper-disabled {
            .ant-input-data-count {
                color: ${theme.color.primary.blue200};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${theme.color.primary.blue200};
                }
            }
        }

        &.ant-input-affix-wrapper-status-error {
            .ant-input-data-count {
                color: ${theme.color.secondary.red.red300};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${theme.color.secondary.red.red300};
                }
            }

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.red.red400};
            }
        }

        &.ant-input-affix-wrapper-status-warning {
            .ant-input-data-count {
                color: ${theme.color.secondary.orange.orange300};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${theme.color.secondary.orange.orange300};
                }
            }

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.orange.orange400};
            }
        }
    }

    &.ant-input-disabled,
    .ant-input-disabled {
        border-color: ${theme.color.primary.blue100};
        color: ${theme.color.primary.blue300};

        &:hover {
            border-color: ${theme.color.primary.blue100};
        }

        &::placeholder {
            color: ${theme.color.primary.blue200};
        }
    }

    &.ant-input-status-error,
    &.ant-input-affix-wrapper-status-error,
    .ant-input-status-error {
        background-color: ${theme.color.secondary.red.red100};
        color: ${theme.color.secondary.red.red400};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${theme.color.secondary.red.red400};

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.red.red400};
            }
        }

        &::placeholder {
            color: ${theme.color.secondary.red.red300};
        }
    }

    &.ant-input-status-warning,
    &.ant-input-affix-wrapper-status-warning,
    .ant-input-status-warning {
        background-color: ${theme.color.secondary.orange.orange100};
        color: ${theme.color.secondary.orange.orange500};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${theme.color.secondary.orange.orange400};

            &:hover,
            &:focus {
                border-color: ${theme.color.secondary.orange.orange400};
            }
        }

        &::placeholder {
            color: ${theme.color.secondary.orange.orange300};
        }
    }
`;

const KitTextArea: React.FunctionComponent<KitTextAreaProps> = textAreaProps => {
    return <StyledAntdTextArea {...textAreaProps} />;
};

export default KitTextArea;
