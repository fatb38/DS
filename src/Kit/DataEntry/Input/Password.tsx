import React, {forwardRef} from 'react';
import {Input as AntdInput, InputRef} from 'antd';
import {IKitPassword} from './types';
import {styled} from 'styled-components';
import KitInputWrapper from './InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {kitInputPasswordCssTokens} from '@theme/aristid/components/DataEntry/Input';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {convertToPixel} from '@theme/utils/convert';

const StyledAntdPassword = styled(AntdInput.Password)`
    &.ant-input-affix-wrapper {
        padding: 0 12px;

        .ant-input {
            height: 38px;
            padding: 0 10px 0 0;
            border-radius: 7px;
            font-weight: var(
                ${kitInputPasswordCssTokens.typography.content.fontWeight},
                var(${typographyCssTokens.mediumfontWeight})
            );

            &::placeholder {
                font-weight: var(
                    ${kitInputPasswordCssTokens.typography.placeholder.fontWeight},
                    var(${typographyCssTokens.regularFontWeight})
                );
            }
        }

        .ant-input-suffix {
            .ant-input-password-icon {
                color: var(
                    ${kitInputPasswordCssTokens.colors.passwordIcon.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                );
            }

            .ant-input-show-count-suffix {
                color: var(
                    ${kitInputPasswordCssTokens.colors.showCount.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
                );
                font-size: ${convertToPixel(
                    kitInputPasswordCssTokens.typography.showCount.fontSize,
                    typographyCssTokens.fontSize7
                )};
                font-weight: var(
                    ${kitInputPasswordCssTokens.typography.showCount.fontWeight},
                    var(${typographyCssTokens.regularFontWeight})
                );
            }

            .ant-input-clear-icon {
                color: var(
                    ${kitInputPasswordCssTokens.colors.clearIcon.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                );
                display: flex;
            }
        }

        .ant-input-prefix {
            margin-inline-end: 10px;
            color: var(
                ${kitInputPasswordCssTokens.colors.prefix.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: var(
                ${kitInputPasswordCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );

            .ant-input {
                color: var(
                    ${kitInputPasswordCssTokens.colors.typography.content.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );

                &::placeholder {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.typography.placeholder.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }
            }

            .ant-input-prefix svg {
                color: var(
                    ${kitInputPasswordCssTokens.colors.prefix.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }

            .ant-input-suffix {
                color: var(
                    ${kitInputPasswordCssTokens.colors.suffix.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );

                .ant-input-clear-icon {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.clearIcon.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }

                .ant-input-show-count-suffix {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.showCount.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }

                .ant-input-password-icon {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.passwordIcon.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }
            }
        }

        &.ant-input-affix-wrapper-status-error,
        &.ant-input-affix-wrapper-status-error .ant-input {
            background-color: var(
                ${kitInputPasswordCssTokens.colors.background.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red100})
            );
            color: var(
                ${kitInputPasswordCssTokens.colors.typography.content.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );

            &:not(.ant-input-borderless):not(.ant-input-disabled) {
                border-color: var(
                    ${kitInputPasswordCssTokens.colors.border.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
                &.ant-input-affix-wrapper-focused {
                    border-color: transparent;
                    // TODO change to cards-border-stroke when available
                    box-shadow: 0 0 0 3px
                        var(
                            ${kitInputPasswordCssTokens.colors.border.focus.error},
                            var(${kitColorsPaletteCssTokens.secondary.red.red200})
                        );

                    &:hover {
                        border-color: transparent;
                    }
                }
            }

            &::placeholder {
                color: var(
                    ${kitInputPasswordCssTokens.colors.typography.placeholder.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }

            .ant-input-prefix svg {
                color: var(
                    ${kitInputPasswordCssTokens.colors.prefix.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }

            .ant-input-suffix {
                color: var(
                    ${kitInputPasswordCssTokens.colors.suffix.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );

                .ant-input-clear-icon {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.clearIcon.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );
                }

                .ant-input-show-count-suffix {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.showCount.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red300})
                    );
                }

                .ant-input-password-icon {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.passwordIcon.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );
                }
            }
        }

        &.ant-input-affix-wrapper-status-warning,
        &.ant-input-affix-wrapper-status-warning .ant-input {
            background-color: var(
                ${kitInputPasswordCssTokens.colors.background.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
            );
            color: var(
                ${kitInputPasswordCssTokens.colors.typography.content.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
            );

            &:not(.ant-input-borderless):not(.ant-input-disabled) {
                border-color: var(
                    ${kitInputPasswordCssTokens.colors.border.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
                &.ant-input-affix-wrapper-focused {
                    border-color: transparent;
                    // TODO change to cards-border-stroke when available
                    box-shadow: 0 0 0 3px
                        var(
                            ${kitInputPasswordCssTokens.colors.border.focus.warning},
                            var(${kitColorsPaletteCssTokens.secondary.orange.orange200})
                        );

                    &:hover {
                        border-color: transparent;
                    }
                }
            }

            &::placeholder {
                color: var(
                    ${kitInputPasswordCssTokens.colors.typography.placeholder.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
                );
            }

            .ant-input-prefix svg {
                color: var(
                    ${kitInputPasswordCssTokens.colors.prefix.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }

            .ant-input-suffix {
                color: var(
                    ${kitInputPasswordCssTokens.colors.prefix.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );

                .ant-input-clear-icon {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.clearIcon.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
                    );
                }

                .ant-input-show-count-suffix {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.showCount.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange300})
                    );
                }

                .ant-input-password-icon {
                    color: var(
                        ${kitInputPasswordCssTokens.colors.passwordIcon.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
                    );
                }
            }
        }

        &.ant-input-affix-wrapper-focused {
            // TODO change to cards-border-stroke when available
            border-color: transparent;
            box-shadow: 0 0 0 3px
                var(
                    ${kitInputPasswordCssTokens.colors.border.focus.default},
                    var(${kitColorsPaletteCssTokens.primary.primary200})
                );

            .ant-input::placeholder {
                color: transparent;
            }
        }
    }
`;

const KitPassword = forwardRef<InputRef, IKitPassword>(
    ({label, className, helper, iconRender, wrapperClassName, allowClear = true, ...passwordProps}, ref) => {
        const {appId} = useKitTheme();

        const _getIconRender = (passwordVisible: boolean) => {
            if (passwordVisible) {
                return <FontAwesomeIcon icon={faEye} />;
            }
            return <FontAwesomeIcon icon={faEyeSlash} />;
        };

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={passwordProps.disabled}
                status={passwordProps.status}
                className={wrapperClassName}
            >
                <StyledAntdPassword
                    {...passwordProps}
                    className={`${appId} ${className || ''}`}
                    ref={ref}
                    allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : undefined}
                    iconRender={iconRender ?? _getIconRender}
                />
            </KitInputWrapper>
        );
    }
);

export default KitPassword;
