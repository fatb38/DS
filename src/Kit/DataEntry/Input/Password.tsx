import React from 'react';
import {Input as AntdInput} from 'antd';
import {KitPasswordProps} from './types';
import {styled} from 'styled-components';
import theme from '@theme/index';
import {KitTypography} from '@kit/General/';
import {CloseCircleOutlined} from '@ant-design/icons';

const StyledAntdPassword = styled(AntdInput.Password)`
    &.ant-input-affix-wrapper {
        padding: 0px 12px;

        .ant-input {
            height: 38px;
            padding: 0px 10px 0px 0px;
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
                margin-top: 2px;
                color: ${theme.color.secondary.mediumGrey.mediumGrey500};
            }
        }

        .ant-input-prefix {
            margin-inline-end: 10px;
            color: ${theme.color.secondary.mediumGrey.mediumGrey500};
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: ${theme.color.secondary.mediumGrey.mediumGrey200};

            .ant-input {
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};

                &::placeholder {
                    color: ${theme.color.secondary.mediumGrey.mediumGrey400};
                }
            }

            .ant-input-prefix,
            .ant-input-suffix,
            .ant-input-suffix .anticon {
                color: ${theme.color.secondary.mediumGrey.mediumGrey400};
            }
        }

        &.ant-input-affix-wrapper-status-error,
        &.ant-input-affix-wrapper-status-error .ant-input {
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

            .ant-input-prefix,
            .ant-input-suffix {
                .anticon {
                    color: ${theme.color.secondary.red.red400};
                }
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix {
                    color: ${theme.color.secondary.red.red300};
                }

                .ant-input-clear-icon {
                    .anticon {
                        color: ${theme.color.secondary.red.red400};
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
                box-shadow: none;

                &:hover,
                &:focus {
                    border-color: ${theme.color.secondary.orange.orange400};
                }
            }

            &::placeholder {
                color: ${theme.color.secondary.orange.orange400};
            }

            .ant-input-prefix,
            .ant-input-suffix {
                .anticon {
                    color: ${theme.color.secondary.orange.orange400};
                }
            }

            .ant-input-suffix {
                .ant-input-show-count-suffix {
                    color: ${theme.color.secondary.orange.orange300};
                }

                .ant-input-clear-icon {
                    .anticon {
                        color: ${theme.color.secondary.orange.orange500};
                    }
                }
            }
        }

        &.ant-input-affix-wrapper-focused {
            border-style: dashed;
            box-shadow: none;

            .ant-input::placeholder {
                color: transparent;
            }
        }
    }
`;

const KitPassword: React.FunctionComponent<KitPasswordProps> = ({
    label,
    helper,
    allowClear = true,
    ...passwordProps
}) => {
    const styledPassword = (
        <StyledAntdPassword
            {...passwordProps}
            allowClear={allowClear ? {clearIcon: <CloseCircleOutlined />} : undefined}
        />
    );

    const getKitPasswordWrapperTextColor = () => {
        if (passwordProps.disabled) {
            return theme.color.secondary.mediumGrey.mediumGrey400;
        }

        switch (passwordProps.status) {
            case 'warning':
                return theme.color.secondary.orange.orange400;
            case 'error':
                return theme.color.secondary.red.red400;
            default:
                return theme.color.secondary.mediumGrey.mediumGrey500;
        }
    };

    const getKitPassword = () => {
        const textColor = getKitPasswordWrapperTextColor();

        if (label || helper) {
            return (
                <div className="kit-password-wrapper">
                    {label && (
                        <div className="kit-password-label" style={{paddingBottom: '4px'}}>
                            <KitTypography.Text size="large" weight="medium" style={{color: textColor}}>
                                {label}
                            </KitTypography.Text>
                        </div>
                    )}
                    {styledPassword}
                    {helper && (
                        <div className="kit-password-helper" style={{paddingTop: '4px'}}>
                            <KitTypography.Text size="small" weight="regular" style={{color: textColor}}>
                                * {helper}
                            </KitTypography.Text>
                        </div>
                    )}
                </div>
            );
        }

        return styledPassword;
    };

    return getKitPassword();
};

export default KitPassword;
