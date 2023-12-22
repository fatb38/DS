import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {DatePicker as AntdDatePicker} from 'antd';
import {IKitDatePicker} from './types';
import KitInputWrapper from '../Input/InputWrapper';
import {useKitTheme} from '@theme/useKitTheme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {kitDatePickerCssTokens} from '@theme/aristid/components/DataEntry/DatePicker';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {borderCssTokens} from '@theme/aristid/general/border';

const StyledDatePicker = styled.div`
    .ant-picker {
        font-size: calc(
            var(${kitDatePickerCssTokens.typography.fontSize}, var(${typographyCssTokens.fontSize5})) * 1px
        );
        height: 40px;
        padding: 0px 12px 0px 8px;
        min-width: 165px;
        font-weight: var(
            ${kitDatePickerCssTokens.typography.fontWeight.placeholder},
            var(${typographyCssTokens.regularFontWeight})
        );
        border-radius: calc(var(${kitDatePickerCssTokens.border.radius}, var(${borderCssTokens.radius.s})) * 1px);

        .ant-picker-input {
            display: grid;
            grid-template-areas: 'icon input clear';
            grid-template-columns: 28px 1fr 12px;

            input {
                grid-area: input;
                font-weight: var(
                    ${kitDatePickerCssTokens.typography.fontWeight.content},
                    var(${typographyCssTokens.mediumfontWeight})
                );
                font-family: var(
                    ${kitDatePickerCssTokens.typography.fontFamily},
                    var(${typographyCssTokens.fontFamily})
                );

                &::placeholder {
                    font-weight: var(
                        ${kitDatePickerCssTokens.typography.fontWeight.placeholder},
                        var(${typographyCssTokens.regularFontWeight})
                    );
                }
            }

            .ant-picker-suffix {
                grid-area: icon;
                color: var(
                    ${kitDatePickerCssTokens.colors.icon.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                );
            }

            .ant-picker-clear {
                grid-area: clear;
                font-size: 12px;
                position: initial;
                top: initial;
                line-height: 1;
                transform: none;
                transition: none;
                opacity: 1;
                color: var(
                    ${kitDatePickerCssTokens.colors.clearIcon.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                );
            }
        }

        &.ant-picker-disabled {
            border-color: var(
                ${kitDatePickerCssTokens.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );

            .ant-picker-input {
                input {
                    color: var(
                        ${kitDatePickerCssTokens.colors.typography.content.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );

                    &::placeholder {
                        color: var(
                            ${kitDatePickerCssTokens.colors.typography.placeholder.disabled},
                            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                        );
                    }
                }

                .ant-picker-suffix {
                    color: var(
                        ${kitDatePickerCssTokens.colors.icon.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }

                .ant-picker-clear {
                    color: var(
                        ${kitDatePickerCssTokens.colors.clearIcon.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );
                }
            }
        }

        &.ant-picker-status-warning:not(.ant-picker-disabled) {
            background-color: var(
                ${kitDatePickerCssTokens.colors.background.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
            );
            border-color: var(
                ${kitDatePickerCssTokens.colors.border.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
            );
            box-shadow: none;

            &:hover {
                background-color: var(
                    ${kitDatePickerCssTokens.colors.background.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
                );
                border-color: var(
                    ${kitDatePickerCssTokens.colors.border.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }

            .ant-picker-input {
                input {
                    color: var(
                        ${kitDatePickerCssTokens.colors.typography.content.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                    );

                    &::placeholder {
                        color: var(
                            ${kitDatePickerCssTokens.colors.typography.placeholder.warning},
                            var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                        );
                    }
                }

                .ant-picker-suffix {
                    color: var(
                        ${kitDatePickerCssTokens.colors.icon.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                    );
                }

                .ant-picker-clear {
                    color: var(
                        ${kitDatePickerCssTokens.colors.clearIcon.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
                    );
                }
            }
        }

        &.ant-picker-status-error:not(.ant-picker-disabled) {
            background-color: var(
                ${kitDatePickerCssTokens.colors.background.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red100})
            );
            border-color: var(
                ${kitDatePickerCssTokens.colors.border.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
            box-shadow: none;

            &:hover {
                background-color: var(
                    ${kitDatePickerCssTokens.colors.background.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red100})
                );
                border-color: var(
                    ${kitDatePickerCssTokens.colors.border.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }

            .ant-picker-input {
                input {
                    color: var(
                        ${kitDatePickerCssTokens.colors.typography.content.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );

                    &::placeholder {
                        color: var(
                            ${kitDatePickerCssTokens.colors.typography.placeholder.error},
                            var(${kitColorsPaletteCssTokens.secondary.red.red400})
                        );
                    }
                }

                .ant-picker-suffix {
                    color: var(
                        ${kitDatePickerCssTokens.colors.icon.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );
                }

                .ant-picker-clear {
                    color: var(
                        ${kitDatePickerCssTokens.colors.clearIcon.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );
                }
            }
        }

        &.ant-picker-focused {
            border-style: dashed;
            box-shadow: none;

            &:not(.ant-picker-disabled) .ant-picker-input input::placeholder {
                color: transparent;
            }
        }
    }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const KitDatePicker = forwardRef<any, IKitDatePicker>(
    (
        {
            label,
            helper,
            suffixIcon,
            className,
            wrapperClassName,
            picker = 'date',
            allowClear = true,
            ...datePickerProps
        },
        ref
    ) => {
        const {appId} = useKitTheme();

        const _getSuffixIcon = () => {
            if (picker === 'time') {
                return <FontAwesomeIcon icon={faClock} />;
            }
            return <FontAwesomeIcon icon={faCalendar} />;
        };

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={datePickerProps.disabled}
                status={datePickerProps.status}
                className={wrapperClassName}
            >
                <StyledDatePicker>
                    <AntdDatePicker
                        {...datePickerProps}
                        picker={picker}
                        ref={ref}
                        suffixIcon={suffixIcon ?? _getSuffixIcon()}
                        allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : false}
                        className={`${appId} ${className ?? ''}`}
                    />
                </StyledDatePicker>
            </KitInputWrapper>
        );
    }
);

export default KitDatePicker;
