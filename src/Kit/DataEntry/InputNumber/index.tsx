import React, {forwardRef, useState} from 'react';
import {InputNumber as AntdInputNumber} from 'antd';
import {KitInputNumberProps} from './types';
import {styled} from 'styled-components';
import KitInputWrapper from '../Input/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {kitInputNumberCssTokens} from '@theme/aristid/components/DataEntry/InputNumber';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {borderCssTokens} from '@theme/aristid/general/border';
import classNames from 'classnames';
import {convertToPixel} from '@theme/utils/convert';

const StyledAntdInputNumber = styled(AntdInputNumber)`
    font-weight: var(
        ${kitInputNumberCssTokens.typography.placeholder.fontWeight},
        var(${typographyCssTokens.regularFontWeight})
    );
    font-size: ${convertToPixel(kitInputNumberCssTokens.typography.fontSize, typographyCssTokens.fontSize5)};
    border-radius: ${convertToPixel(kitInputNumberCssTokens.border.radius, borderCssTokens.radius.s)};
    height: 40px;
    line-height: 40px;

    .ant-input-number-input {
        font-weight: var(
            ${kitInputNumberCssTokens.typography.content.fontWeight},
            var(${typographyCssTokens.mediumfontWeight})
        );

        &::placeholder {
            font-weight: var(
                ${kitInputNumberCssTokens.typography.placeholder.fontWeight},
                var(${typographyCssTokens.regularFontWeight})
            );
        }
    }

    &:not(.ant-input-number-affix-wrapper) {
        line-height: 38px;

        .ant-input-number-input-wrap {
            border-radius: ${convertToPixel(kitInputNumberCssTokens.border.radius, borderCssTokens.radius.s)};
        }
    }

    &.ant-input-number-affix-wrapper.kit-input-number-affix-wrapper-focused,
    &.ant-input-number.kit-input-number-affix-wrapper-focused {
        border-color: transparent;
        // TODO change to cards-border-stroke when available
        box-shadow: 0 0 0 3px
            var(
                ${kitInputNumberCssTokens.colors.border.focus.default},
                var(${kitColorsPaletteCssTokens.primary.primary200})
            );

        &.ant-input::placeholder,
        .ant-input::placeholder {
            color: transparent;
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
        border-color: var(
            ${kitInputNumberCssTokens.colors.border.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
        );

        .ant-input-number-input {
            color: var(
                ${kitInputNumberCssTokens.colors.typography.content.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );

            &::placeholder {
                color: var(
                    ${kitInputNumberCssTokens.colors.typography.placeholder.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
        }
    }

    &.ant-input-number-affix-wrapper {
        .ant-input-number-input-wrap {
            .ant-input-number-input {
                padding: 0px 10px 0px 0px;
            }
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
        background-color: var(
            ${kitInputNumberCssTokens.colors.background.warning},
            var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
        );

        .ant-input-number-input-wrap {
            background-color: var(
                ${kitInputNumberCssTokens.colors.background.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
            );
        }

        .ant-input-number-input {
            color: var(
                ${kitInputNumberCssTokens.colors.typography.content.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
            );

            &::placeholder {
                color: var(
                    ${kitInputNumberCssTokens.colors.typography.content.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: var(
                ${kitInputNumberCssTokens.colors.border.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
            );

            &.ant-input-number-affix-wrapper.kit-input-number-affix-wrapper-focused,
            &.ant-input-number.kit-input-number-affix-wrapper-focused {
                border-color: transparent;
                // TODO change to cards-border-stroke when available
                box-shadow: 0 0 0 3px
                    var(
                        ${kitInputNumberCssTokens.colors.border.focus.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange200})
                    );

                &:hover {
                    border-color: transparent;
                }
            }
        }
    }

    &.ant-input-number-status-error,
    &.ant-input-number-out-of-range,
    &.ant-input-number-affix-wrapper-status-error {
        background-color: var(
            ${kitInputNumberCssTokens.colors.background.error},
            var(${kitColorsPaletteCssTokens.secondary.red.red100})
        );
        box-shadow: none;

        .ant-input-number-input-wrap {
            background-color: var(
                ${kitInputNumberCssTokens.colors.background.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red100})
            );
        }

        .ant-input-number-input {
            color: var(
                ${kitInputNumberCssTokens.colors.typography.content.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );

            &::placeholder {
                color: var(
                    ${kitInputNumberCssTokens.colors.typography.placeholder.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: var(
                ${kitInputNumberCssTokens.colors.border.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );

            &.ant-input-number-affix-wrapper.kit-input-number-affix-wrapper-focused,
            &.ant-input-number.kit-input-number-affix-wrapper-focused {
                border-color: transparent;
                // TODO change to cards-border-stroke when available
                box-shadow: 0 0 0 3px
                    var(
                        ${kitInputNumberCssTokens.colors.border.focus.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red200})
                    );

                &:hover {
                    border-color: transparent;
                }
            }
        }
    }
`;

export const KitInputNumber = forwardRef<HTMLInputElement, KitInputNumberProps>(
    ({label, helper, wrapperClassName, className, ...inputNumberProps}, ref) => {
        const {appId} = useKitTheme();
        const [hasFocus, setHasFocus] = useState(false);

        const inputNumberClassNames = classNames(appId, className, {
            'kit-input-number-affix-wrapper-focused': hasFocus
        });

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={inputNumberProps.disabled}
                status={inputNumberProps.status}
                className={wrapperClassName}
            >
                <StyledAntdInputNumber
                    ref={ref}
                    onFocus={() => setHasFocus(true)}
                    onBlur={() => setHasFocus(false)}
                    className={inputNumberClassNames}
                    {...inputNumberProps}
                />
            </KitInputWrapper>
        );
    }
);

KitInputNumber.displayName = 'KitInputNumber';
