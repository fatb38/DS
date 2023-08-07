import React from 'react';
import {Input as AntdInput} from 'antd';
import {KitPasswordProps} from './types';
import {styled} from 'styled-components';
import theme from '@theme/index';

const StyledAntdPassword = styled(AntdInput.Password)`
    &.ant-input-affix-wrapper {
        padding: 0px 10px;

        .ant-input {
            height: 38px;
            padding: 0px 10px;
            border-radius: 7px;
            font-weight: ${theme.typography.regularFontWeight};
        }

        .ant-input-suffix {
            .ant-input-password-icon {
                color: ${theme.color.secondary.mediumGrey.mediumGrey500};
            }

            .ant-input-show-count-suffix {
                color: ${theme.color.secondary.mediumGrey.mediumGrey300};
                font-size: ${theme.typography.fontSize7};
                font-weight: ${theme.typography.regularFontWeight};
            }

            .ant-input-clear-icon {
                color: ${theme.color.secondary.mediumGrey.mediumGrey300};
                margin-top: 2px;
            }
        }

        .ant-input-prefix {
            margin-inline-start: 10px;
            margin-inline-end: 0px;
        }

        &.ant-input-affix-wrapper-focused {
            border-style: dashed;
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: ${theme.color.primary.blue100};

            .ant-input {
                color: ${theme.color.primary.blue300};
            }

            .ant-input-prefix,
            .ant-input-suffix,
            .ant-input-suffix .anticon {
                color: ${theme.color.primary.blue200};
            }
        }

        &.ant-input-affix-wrapper-status-error,
        &.ant-input-affix-wrapper-status-error .ant-input {
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

            .ant-input-prefix,
            .ant-input-suffix {
                .anticon {
                    color: ${theme.color.secondary.red.red400};
                }
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix,
                .ant-input-clear-icon {
                    color: ${theme.color.secondary.red.red300};

                    .anticon {
                        color: ${theme.color.secondary.red.red300};
                    }
                }
            }
        }

        &.ant-input-affix-wrapper-status-warning,
        &.ant-input-affix-wrapper-status-warning .ant-input {
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

            .ant-input-prefix,
            .ant-input-suffix {
                .anticon {
                    color: ${theme.color.secondary.orange.orange400};
                }
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix,
                .ant-input-clear-icon {
                    color: ${theme.color.secondary.orange.orange300};

                    .anticon {
                        color: ${theme.color.secondary.orange.orange300};
                    }
                }
            }
        }
    }
`;

const KitPassword: React.FunctionComponent<KitPasswordProps> = passwordProps => {
    return <StyledAntdPassword {...passwordProps} />;
};

export default KitPassword;
