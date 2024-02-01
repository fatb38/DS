import React, {forwardRef} from 'react';
import {Input as AntdInput, InputRef} from 'antd';
import {IKitTextArea} from './types';
import {styled} from 'styled-components';
import {KitInputWrapper} from '@kit/DataEntry/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {kitTextAreaCssTokens} from '@theme/aristid/components/DataEntry/Input';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {convertToPixel} from '@theme/utils/convert';

const StyledAntdTextArea = styled(AntdInput.TextArea)`
    &.ant-input,
    .ant-input {
        padding: 4px 10px;
        font-weight: var(
            ${kitTextAreaCssTokens.typography.content.fontWeight},
            var(${typographyCssTokens.mediumfontWeight})
        );

        &::placeholder {
            font-weight: var(
                ${kitTextAreaCssTokens.typography.placeholder.fontWeight},
                var(${typographyCssTokens.regularFontWeight})
            );
        }
    }

    .ant-input-suffix {
        .ant-input-clear-icon {
            color: var(
                ${kitTextAreaCssTokens.colors.clearIcon.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );
        }
    }

    &.ant-input-affix-wrapper {
        &.ant-input-textarea-allow-clear {
            .ant-input {
                padding-inline-end: 24px;
            }
        }

        &.ant-input-textarea-show-count {
            .ant-input-data-count {
                bottom: -23px;
                color: var(
                    ${kitTextAreaCssTokens.colors.showCount.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey300})
                );
                font-size: ${convertToPixel(
                    kitTextAreaCssTokens.typography.showCount.fontSize,
                    typographyCssTokens.fontSize7
                )};
                font-weight: var(
                    ${kitTextAreaCssTokens.typography.showCount.fontWeight},
                    var(${typographyCssTokens.regularFontWeight})
                );
            }
        }

        &.ant-input-affix-wrapper-disabled {
            .ant-input-data-count {
                color: var(
                    ${kitTextAreaCssTokens.colors.showCount.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: var(
                        ${kitTextAreaCssTokens.colors.clearIcon.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }
            }
        }

        &.ant-input-affix-wrapper-status-error {
            .ant-input-data-count {
                color: var(
                    ${kitTextAreaCssTokens.colors.showCount.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red300})
                );
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: var(
                        ${kitTextAreaCssTokens.colors.clearIcon.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );
                }
            }

            &:hover,
            &:focus {
                border-color: var(
                    ${kitTextAreaCssTokens.colors.border.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }
        }

        &.ant-input-affix-wrapper-status-warning {
            .ant-input-data-count {
                color: var(
                    ${kitTextAreaCssTokens.colors.showCount.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange300})
                );
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: var(
                        ${kitTextAreaCssTokens.colors.clearIcon.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
                    );
                }
            }

            &:hover,
            &:focus {
                border-color: var(
                    ${kitTextAreaCssTokens.colors.border.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }
        }
    }

    &.ant-input-disabled,
    .ant-input-disabled {
        border-color: var(
            ${kitTextAreaCssTokens.colors.border.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
        );
        color: var(
            ${kitTextAreaCssTokens.colors.typography.content.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
        );

        &:hover {
            border-color: var(
                ${kitTextAreaCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
        }

        &::placeholder {
            color: var(
                ${kitTextAreaCssTokens.colors.typography.placeholder.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        }
    }

    &.ant-input-status-error,
    &.ant-input-affix-wrapper-status-error,
    .ant-input-status-error {
        background-color: var(
            ${kitTextAreaCssTokens.colors.background.error},
            var(${kitColorsPaletteCssTokens.secondary.red.red100})
        );
        color: var(
            ${kitTextAreaCssTokens.colors.typography.content.error},
            var(${kitColorsPaletteCssTokens.secondary.red.red400})
        );

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: var(
                ${kitTextAreaCssTokens.colors.border.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
            &.ant-input-affix-wrapper-focused {
                border-color: transparent;
                // TODO change to cards-border-stroke when available
                box-shadow: 0 0 0 3px
                    var(
                        ${kitTextAreaCssTokens.colors.border.focus.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red200})
                    );

                &:hover {
                    border-color: transparent;
                }
            }
        }

        &::placeholder {
            color: var(
                ${kitTextAreaCssTokens.colors.typography.placeholder.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
        }
    }

    &.ant-input-status-warning,
    &.ant-input-affix-wrapper-status-warning,
    .ant-input-status-warning {
        background-color: var(
            ${kitTextAreaCssTokens.colors.background.warning},
            var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
        );
        color: var(
            ${kitTextAreaCssTokens.colors.typography.content.warning},
            var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
        );

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: var(
                ${kitTextAreaCssTokens.colors.border.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
            );
            &.ant-input-affix-wrapper-focused {
                border-color: transparent;
                // TODO change to cards-border-stroke when available
                box-shadow: 0 0 0 3px
                    var(
                        ${kitTextAreaCssTokens.colors.border.focus.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange200})
                    );

                &:hover {
                    border-color: transparent;
                }
            }
        }

        &::placeholder {
            color: var(
                ${kitTextAreaCssTokens.colors.typography.placeholder.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
            );
        }
    }

    &:focus,
    &.ant-input-affix-wrapper-focused {
        border-color: transparent;
        // TODO change to cards-border-stroke when available
        box-shadow: 0 0 0 3px
            var(
                ${kitTextAreaCssTokens.colors.border.focus.default},
                var(${kitColorsPaletteCssTokens.primary.primary200})
            );

        .ant-input::placeholder {
            color: transparent;
        }
    }
`;

const KitTextArea = forwardRef<InputRef, IKitTextArea>(
    ({label, className, helper, wrapperClassName, allowClear = true, ...textAreaProps}, ref) => {
        const {appId} = useKitTheme();

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={textAreaProps.disabled}
                status={textAreaProps.status}
                className={wrapperClassName}
            >
                <StyledAntdTextArea
                    {...textAreaProps}
                    ref={ref}
                    allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : undefined}
                    className={`${appId} ${className ?? ''}`}
                />
            </KitInputWrapper>
        );
    }
);

export default KitTextArea;
