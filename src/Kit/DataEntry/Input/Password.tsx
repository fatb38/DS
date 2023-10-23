import React, {FunctionComponent, useState} from 'react';
import {Input as AntdInput} from 'antd';
import {IKitPassword, IStyledAntdPassword} from './types';
import {styled} from 'styled-components';
import KitInputWrapper from './InputWrapper';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';

const StyledAntdPassword = styled(AntdInput.Password)<IStyledAntdPassword>`
    &.ant-input-affix-wrapper {
        padding: 0px 12px;

        .ant-input {
            height: 38px;
            padding: 0px 10px 0px 0px;
            border-radius: 7px;
            font-weight: ${({$theme}) => $theme.typography.content.fontWeight};

            &::placeholder {
                font-weight: ${({$theme}) => $theme.typography.placeholder.fontWeight};
            }
        }

        .ant-input-suffix {
            .ant-input-password-icon {
                color: ${({$theme}) => $theme.colors.passwordIcon.default};
            }

            .ant-input-show-count-suffix {
                color: ${({$theme}) => $theme.colors.showCount.default};
                font-size: ${({$theme}) => $theme.typography.showCount.fontSize}px;
                font-weight: ${({$theme}) => $theme.typography.showCount.fontWeight};
            }

            .ant-input-clear-icon {
                color: ${({$theme}) => $theme.colors.clearIcon.default};
                display: flex;
            }
        }

        .ant-input-prefix {
            margin-inline-end: 10px;
            color: ${({$theme}) => $theme.colors.prefix.default};
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: ${({$theme}) => $theme.colors.border.disabled};

            .ant-input {
                color: ${({$theme}) => $theme.colors.typography.content.disabled};

                &::placeholder {
                    color: ${({$theme}) => $theme.colors.typography.placeholder.disabled};
                }
            }

            .ant-input-prefix .anticon {
                color: ${({$theme}) => $theme.colors.prefix.disabled};
            }

            .ant-input-suffix {
                color: ${({$theme}) => $theme.colors.suffix.disabled};

                .ant-input-clear-icon {
                    color: ${({$theme}) => $theme.colors.clearIcon.disabled};
                }

                .ant-input-show-count-suffix {
                    color: ${({$theme}) => $theme.colors.showCount.disabled};
                }

                .ant-input-password-icon {
                    color: ${({$theme}) => $theme.colors.passwordIcon.disabled};
                }
            }
        }

        &.ant-input-affix-wrapper-status-error,
        &.ant-input-affix-wrapper-status-error .ant-input {
            background-color: ${({$theme}) => $theme.colors.background.error};
            color: ${({$theme}) => $theme.colors.typography.content.error};

            &:not(.ant-input-borderless):not(.ant-input-disabled) {
                border-color: ${({$theme}) => $theme.colors.border.error};
                box-shadow: none;

                &:hover,
                &:focus {
                    border-color: ${({$theme}) => $theme.colors.border.error};
                }
            }

            &::placeholder {
                color: ${({$theme}) => $theme.colors.typography.placeholder.error};
            }

            .ant-input-prefix .anticon {
                color: ${({$theme}) => $theme.colors.prefix.error};
            }

            .ant-input-suffix {
                color: ${({$theme}) => $theme.colors.suffix.error};

                .ant-input-clear-icon {
                    color: ${({$theme}) => $theme.colors.clearIcon.error};
                }

                .ant-input-show-count-suffix {
                    color: ${({$theme}) => $theme.colors.showCount.error};
                }

                .ant-input-password-icon {
                    color: ${({$theme}) => $theme.colors.passwordIcon.error};
                }
            }
        }

        &.ant-input-affix-wrapper-status-warning,
        &.ant-input-affix-wrapper-status-warning .ant-input {
            background-color: ${({$theme}) => $theme.colors.background.warning};
            color: ${({$theme}) => $theme.colors.typography.content.warning};

            &:not(.ant-input-borderless):not(.ant-input-disabled) {
                border-color: ${({$theme}) => $theme.colors.border.warning};
                box-shadow: none;

                &:hover,
                &:focus {
                    border-color: ${({$theme}) => $theme.colors.border.warning};
                }
            }

            &::placeholder {
                color: ${({$theme}) => $theme.colors.typography.placeholder.warning};
            }

            .ant-input-prefix .anticon {
                color: ${({$theme}) => $theme.colors.prefix.warning};
            }

            .ant-input-suffix {
                color: ${({$theme}) => $theme.colors.suffix.warning};

                .ant-input-clear-icon {
                    color: ${({$theme}) => $theme.colors.clearIcon.warning};
                }

                .ant-input-show-count-suffix {
                    color: ${({$theme}) => $theme.colors.showCount.warning};
                }

                .ant-input-password-icon {
                    color: ${({$theme}) => $theme.colors.passwordIcon.warning};
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

const KitPassword: FunctionComponent<IKitPassword> = ({
    label,
    helper,
    visibilityToggle,
    iconRender,
    allowClear = true,
    ...passwordProps
}) => {
    const {theme} = useKitTheme();

    const _getIconRender = (passwordVisible: boolean) => {
        if (passwordVisible) {
            return <FontAwesomeIcon icon={faEye} />;
        }
        return <FontAwesomeIcon icon={faEyeSlash} />;
    };

    return (
        <KitInputWrapper label={label} helper={helper} disabled={passwordProps.disabled} status={passwordProps.status}>
            <StyledAntdPassword
                $theme={theme.components.Input.Password}
                {...passwordProps}
                visibilityToggle={visibilityToggle}
                allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : undefined}
                iconRender={iconRender ?? _getIconRender}
            />
        </KitInputWrapper>
    );
};

export default KitPassword;
