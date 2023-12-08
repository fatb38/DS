import React, {forwardRef} from 'react';
import {Input as AntdInput, InputRef} from 'antd';
import {IKitInput} from './types';
import {styled} from 'styled-components';
import KitInputWrapper from './InputWrapper';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {kitInputCssTokens} from '@theme/aristid/components/DataEntry/Input';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledAntdInput = styled(AntdInput)`
    &.ant-input,
    .ant-input {
        height: 40px;
        padding: 0 10px;
        font-weight: var(
            ${kitInputCssTokens.typography.content.fontWeight},
            var(${typographyCssTokens.mediumfontWeight})
        );

        &::placeholder {
            font-weight: var(
                ${kitInputCssTokens.typography.placeholder.fontWeight},
                var(${typographyCssTokens.regularFontWeight})
            );
        }
    }

    &.ant-input-affix-wrapper {
        padding: 0 12px;

        &:focus-within {
            border-color: var(
                ${kitInputCssTokens.colors.border.hover},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }

        .ant-input-prefix {
            margin-inline-end: 10px;
            color: var(
                ${kitInputCssTokens.colors.prefix.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );
        }

        .ant-input-suffix {
            margin-inline-start: 10px;
            color: var(
                ${kitInputCssTokens.colors.suffix.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );

            .ant-input-clear-icon {
                display: flex;
                color: var(
                    ${kitInputCssTokens.colors.clearIcon.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                );
            }
        }

        .ant-input-suffix .ant-input-show-count-suffix {
            color: var(
                ${kitInputCssTokens.colors.showCount.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
            );
            font-size: calc(
                var(${kitInputCssTokens.typography.showCount.fontSize}, var(${typographyCssTokens.fontSize7})) * 1px
            );
            font-weight: var(
                ${kitInputCssTokens.typography.showCount.fontWeight},
                var(${typographyCssTokens.regularFontWeight})
            );
        }

        .ant-input {
            font-weight: var(
                ${kitInputCssTokens.typography.content.fontWeight},
                var(${typographyCssTokens.mediumfontWeight})
            );
            height: 38px;

            &::placeholder {
                font-weight: var(
                    ${kitInputCssTokens.typography.placeholder.fontWeight},
                    var(${typographyCssTokens.regularFontWeight})
                );
            }
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: var(
                ${kitInputCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );

            .ant-input-prefix svg {
                color: var(
                    ${kitInputCssTokens.colors.prefix.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }

            .ant-input-suffix {
                color: var(
                    ${kitInputCssTokens.colors.suffix.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );

                .ant-input-show-count-suffix {
                    color: var(
                        ${kitInputCssTokens.colors.showCount.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }

                .ant-input-clear-icon {
                    color: var(
                        ${kitInputCssTokens.colors.clearIcon.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }
            }
        }

        &.ant-input-affix-wrapper-status-error:not(.ant-input-disabled) {
            .ant-input-prefix svg {
                color: var(
                    ${kitInputCssTokens.colors.prefix.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }

            .ant-input-suffix {
                color: var(
                    ${kitInputCssTokens.colors.suffix.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );

                .ant-input-show-count-suffix {
                    color: var(
                        ${kitInputCssTokens.colors.showCount.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red300})
                    );
                }

                .ant-input-clear-icon {
                    color: var(
                        ${kitInputCssTokens.colors.clearIcon.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );
                }
            }
        }

        &.ant-input-affix-wrapper-status-warning:not(.ant-input-disabled) {
            .ant-input-prefix svg {
                color: var(
                    ${kitInputCssTokens.colors.prefix.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }

            .ant-input-suffix {
                color: var(
                    ${kitInputCssTokens.colors.suffix.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );

                .ant-input-show-count-suffix {
                    color: var(
                        ${kitInputCssTokens.colors.showCount.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange300})
                    );
                }

                .ant-input-clear-icon {
                    color: var(
                        ${kitInputCssTokens.colors.clearIcon.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
                    );
                }
            }
        }
    }

    &.ant-input-disabled,
    .ant-input-disabled {
        border-color: var(
            ${kitInputCssTokens.colors.border.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
        );
        color: var(
            ${kitInputCssTokens.colors.typography.content.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
        );

        &:hover {
            border-color: var(
                ${kitInputCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        }

        &::placeholder {
            color: var(
                ${kitInputCssTokens.colors.typography.placeholder.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        }
    }

    &.ant-input-status-error,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error .ant-input {
        background-color: var(
            ${kitInputCssTokens.colors.background.error},
            var(${kitColorsPaletteCssTokens.secondary.red.red100})
        );
        color: var(
            ${kitInputCssTokens.colors.typography.content.error},
            var(${kitColorsPaletteCssTokens.secondary.red.red400})
        );

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: var(
                ${kitInputCssTokens.colors.border.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
            box-shadow: none;

            &:hover,
            &:focus {
                border-color: var(
                    ${kitInputCssTokens.colors.border.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }
        }

        &::placeholder {
            color: var(
                ${kitInputCssTokens.colors.typography.placeholder.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
        }
    }

    &.ant-input-status-warning,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning .ant-input {
        background-color: var(
            ${kitInputCssTokens.colors.background.warning},
            var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
        );
        color: var(
            ${kitInputCssTokens.colors.typography.content.warning},
            var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
        );

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: var(
                ${kitInputCssTokens.colors.border.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
            );
            box-shadow: none;

            &:hover,
            &:focus {
                border-color: var(
                    ${kitInputCssTokens.colors.border.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }
        }

        &::placeholder {
            color: var(
                ${kitInputCssTokens.colors.typography.placeholder.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
            );
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

const KitInput = forwardRef<InputRef, IKitInput>(
    ({label, className, helper, wrapperClassName, allowClear = true, ...inputProps}, ref) => {
        const {appId} = useKitTheme();

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={inputProps.disabled}
                status={inputProps.status}
                className={wrapperClassName}
            >
                <StyledAntdInput
                    {...inputProps}
                    ref={ref}
                    className={`${appId} ${className || ''}`}
                    allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : undefined}
                />
            </KitInputWrapper>
        );
    }
);

export default KitInput;
