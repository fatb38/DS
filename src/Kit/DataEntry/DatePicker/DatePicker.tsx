import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {DatePicker as AntdDatePicker} from 'antd';
import {IKitDatePicker, IStyledDatePicker} from './types';
import KitInputWrapper from '../Input/InputWrapper';
import {useKitTheme} from '@theme/theme-context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark, faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';

const StyledDatePicker = styled.div<IStyledDatePicker>`
    .ant-picker {
        height: 40px;
        padding: 0px 12px 0px 8px;
        min-width: 165px;
        font-weight: ${({$theme}) => $theme.typography.fontWeight.placeholder};

        .ant-picker-input {
            display: grid;
            grid-template-areas: 'icon input clear';
            grid-template-columns: 28px 1fr 12px;

            input {
                grid-area: input;
                font-weight: ${({$theme}) => $theme.typography.fontWeight.content};
                font-family: ${({$theme}) => $theme.typography.fontFamily};

                &::placeholder {
                    font-weight: ${({$theme}) => $theme.typography.fontWeight.placeholder};
                }
            }

            .ant-picker-suffix {
                grid-area: icon;
                color: ${({$theme}) => $theme.colors.icon.default};
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
                color: ${({$theme}) => $theme.colors.clearIcon.default};
            }
        }

        &.ant-picker-disabled {
            border-color: ${({$theme}) => $theme.colors.border.disabled};

            .ant-picker-input {
                input {
                    color: ${({$theme}) => $theme.colors.typography.content.disabled};

                    &::placeholder {
                        color: ${({$theme}) => $theme.colors.typography.placeholder.disabled};
                    }
                }

                .ant-picker-suffix {
                    color: ${({$theme}) => $theme.colors.icon.disabled};
                }

                .ant-picker-clear {
                    color: ${({$theme}) => $theme.colors.clearIcon.disabled};
                }
            }
        }

        &.ant-picker-status-warning:not(.ant-picker-disabled) {
            background-color: ${({$theme}) => $theme.colors.background.warning};
            border-color: ${({$theme}) => $theme.colors.border.warning};
            box-shadow: none;

            &:hover {
                background-color: ${({$theme}) => $theme.colors.background.warning};
                border-color: ${({$theme}) => $theme.colors.border.warning};
            }

            .ant-picker-input {
                input {
                    color: ${({$theme}) => $theme.colors.typography.content.warning};

                    &::placeholder {
                        color: ${({$theme}) => $theme.colors.typography.placeholder.warning};
                    }
                }

                .ant-picker-suffix {
                    color: ${({$theme}) => $theme.colors.icon.warning};
                }

                .ant-picker-clear {
                    color: ${({$theme}) => $theme.colors.clearIcon.warning};
                }
            }
        }

        &.ant-picker-status-error:not(.ant-picker-disabled) {
            background-color: ${({$theme}) => $theme.colors.background.error};
            border-color: ${({$theme}) => $theme.colors.border.error};
            box-shadow: none;

            &:hover {
                background-color: ${({$theme}) => $theme.colors.background.error};
                border-color: ${({$theme}) => $theme.colors.border.error};
            }

            .ant-picker-input {
                input {
                    color: ${({$theme}) => $theme.colors.typography.content.error};

                    &::placeholder {
                        color: ${({$theme}) => $theme.colors.typography.placeholder.error};
                    }
                }

                .ant-picker-suffix {
                    color: ${({$theme}) => $theme.colors.icon.error};
                }

                .ant-picker-clear {
                    color: ${({$theme}) => $theme.colors.clearIcon.error};
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

const KitDatePicker = forwardRef<any, IKitDatePicker>(
    ({label, helper, suffixIcon, wrapperClassName, picker = 'date', allowClear = true, ...datePickerProps}, ref) => {
        const {theme} = useKitTheme();

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
                <StyledDatePicker $theme={theme.components.DatePicker}>
                    <AntdDatePicker
                        {...datePickerProps}
                        picker={picker}
                        ref={ref}
                        suffixIcon={suffixIcon ?? _getSuffixIcon()}
                        allowClear={allowClear ? {clearIcon: <FontAwesomeIcon icon={faCircleXmark} />} : false}
                    />
                </StyledDatePicker>
            </KitInputWrapper>
        );
    }
);

export default KitDatePicker;
