import React, {forwardRef} from 'react';
import {DatePicker as AntdDatePicker} from 'antd';
import {IKitRangePicker} from './types';
import styled from 'styled-components';
import KitInputWrapper from '../Input/InputWrapper';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faClock, faCalendar} from '@fortawesome/free-regular-svg-icons';
import {kitDatePickerCssTokens} from '@theme/aristid/components/DataEntry/DatePicker';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

export const StyledRangePicker = styled.div`
    .ant-picker.ant-picker-range {
        display: grid;
        grid-template-areas: 'icon input1 separator input2 clear';
        grid-template-columns: 28px 1fr 28px 1fr 12px;
        height: 40px;
        min-width: 270px;
        padding: 0px 12px 0px 8px;
        font-weight: var(
            ${kitDatePickerCssTokens.RangePicker.typography.fontWeight.placeholder},
            var(${typographyCssTokens.regularFontWeight})
        );

        .ant-picker-range-separator {
            grid-area: separator;

            .ant-picker-separator {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.separator.default},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
                );
            }
        }

        .ant-picker-active-bar {
            display: none;
        }

        .ant-picker-input {
            &:nth-child(1) {
                grid-area: input1;
            }

            &:nth-child(2) {
                grid-area: input2;
            }
        }

        .ant-picker-input {
            input {
                font-weight: var(
                    ${kitDatePickerCssTokens.RangePicker.typography.fontWeight.content},
                    var(${typographyCssTokens.mediumfontWeight})
                );
                font-family: var(
                    ${kitDatePickerCssTokens.RangePicker.typography.fontFamily},
                    var(${typographyCssTokens.fontFamily})
                );

                &::placeholder {
                    font-weight: var(
                        ${kitDatePickerCssTokens.RangePicker.typography.fontWeight.placeholder},
                        var(${typographyCssTokens.regularFontWeight})
                    );
                }
            }
        }

        .ant-picker-suffix {
            grid-area: icon;
            color: var(
                ${kitDatePickerCssTokens.RangePicker.colors.icon.default},
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
                ${kitDatePickerCssTokens.RangePicker.colors.clearIcon.default},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey500})
            );
        }

        .ant-picker-input {
            input[disabled] {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.typography.content.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
        }

        &.ant-picker-disabled {
            border-color: var(
                ${kitDatePickerCssTokens.RangePicker.colors.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );

            .ant-picker-input {
                input {
                    color: var(
                        ${kitDatePickerCssTokens.RangePicker.colors.typography.content.disabled},
                        var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                    );

                    &::placeholder {
                        color: var(
                            ${kitDatePickerCssTokens.RangePicker.colors.typography.placeholder.disabled},
                            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                        );
                    }
                }
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.separator.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }

            .ant-picker-suffix {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.icon.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }

            .ant-picker-clear {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.clearIcon.disabled},
                    var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
                );
            }
        }

        &.ant-picker-status-warning:not(.ant-picker-disabled) {
            background-color: var(
                ${kitDatePickerCssTokens.RangePicker.colors.background.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
            );
            border-color: var(
                ${kitDatePickerCssTokens.RangePicker.colors.border.warning},
                var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
            );
            box-shadow: none;

            &:hover {
                background-color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.background.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange100})
                );
                border-color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.border.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }

            .ant-picker-input {
                input {
                    color: var(
                        ${kitDatePickerCssTokens.RangePicker.colors.typography.content.warning},
                        var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                    );

                    &::placeholder {
                        color: var(
                            ${kitDatePickerCssTokens.RangePicker.colors.typography.placeholder.warning},
                            var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                        );
                    }
                }
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.separator.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange300})
                );
            }

            .ant-picker-suffix {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.icon.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange400})
                );
            }

            .ant-picker-clear {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.clearIcon.warning},
                    var(${kitColorsPaletteCssTokens.secondary.orange.orange500})
                );
            }
        }

        &.ant-picker-status-error:not(.ant-picker-disabled) {
            background-color: var(
                ${kitDatePickerCssTokens.RangePicker.colors.background.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red100})
            );
            border-color: var(
                ${kitDatePickerCssTokens.RangePicker.colors.border.error},
                var(${kitColorsPaletteCssTokens.secondary.red.red400})
            );
            box-shadow: none;

            &:hover {
                background-color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.background.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red100})
                );
                border-color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.border.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }

            .ant-picker-input {
                input {
                    color: var(
                        ${kitDatePickerCssTokens.RangePicker.colors.typography.content.error},
                        var(${kitColorsPaletteCssTokens.secondary.red.red400})
                    );

                    &::placeholder {
                        color: var(
                            ${kitDatePickerCssTokens.RangePicker.colors.typography.placeholder.error},
                            var(${kitColorsPaletteCssTokens.secondary.red.red400})
                        );
                    }
                }
            }

            .ant-picker-range-separator .ant-picker-separator {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.separator.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red300})
                );
            }

            .ant-picker-suffix {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.icon.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }

            .ant-picker-clear {
                color: var(
                    ${kitDatePickerCssTokens.RangePicker.colors.clearIcon.error},
                    var(${kitColorsPaletteCssTokens.secondary.red.red400})
                );
            }
        }

        &.ant-picker-focused {
            border-style: dashed;
            box-shadow: none;

            &:not(.ant-picker-disabled) .ant-picker-input:focus-within input::placeholder {
                color: transparent;
            }
        }
    }
`;

const KitDatePicker = forwardRef<any, IKitRangePicker>(
    ({label, className, helper, suffixIcon, picker, allowClear = true, ...rangePickerProps}, ref) => {
        const {appId} = useKitTheme();

        const _getSuffixIcon = () => {
            if (picker === 'time') {
                return <FontAwesomeIcon icon={faClock} />;
            }
            return <FontAwesomeIcon icon={faCalendar} />;
        };

        const _isRangePickerDisabled = () => {
            if (rangePickerProps.disabled === undefined) {
                return false;
            }

            if (typeof rangePickerProps.disabled === 'boolean') {
                return rangePickerProps.disabled;
            }

            return rangePickerProps.disabled[0] && rangePickerProps.disabled[1];
        };

        return (
            <KitInputWrapper
                label={label}
                helper={helper}
                disabled={_isRangePickerDisabled()}
                status={rangePickerProps.status}
            >
                <StyledRangePicker>
                    <AntdDatePicker.RangePicker
                        {...rangePickerProps}
                        picker={picker}
                        ref={ref}
                        suffixIcon={suffixIcon ?? _getSuffixIcon()}
                        allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : false}
                        className={`${appId} ${className ?? ''}`}
                    />
                </StyledRangePicker>
            </KitInputWrapper>
        );
    }
);

export default KitDatePicker;
