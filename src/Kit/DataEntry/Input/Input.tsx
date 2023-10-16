import React, {forwardRef} from 'react';
import {Input as AntdInput} from 'antd';
import {IKitInput, IStyledAntdInput} from './types';
import {styled} from 'styled-components';
import {CloseCircleOutlined} from '@ant-design/icons';
import KitInputWrapper from './InputWrapper';
import {useKitTheme} from '@theme/theme-context';

const StyledAntdInput = styled(AntdInput)<IStyledAntdInput>`
    &.ant-input,
    .ant-input {
        height: 40px;
        padding: 0px 10px;
        font-weight: ${({$theme}) => $theme.typography.content.fontWeight};

        &::placeholder {
            font-weight: ${({$theme}) => $theme.typography.placeholder.fontWeight};
        }
    }

    &.ant-input-affix-wrapper {
        padding: 0px 12px;

        .ant-input-prefix {
            margin-inline-end: 10px;
            color: ${({$theme}) => $theme.colors.prefix.default};
        }

        .ant-input-suffix {
            margin-inline-start: 10px;
            color: ${({$theme}) => $theme.colors.suffix.default};

            .ant-input-clear-icon {
                display: flex;
                color: ${({$theme}) => $theme.colors.clearIcon.default};
            }
        }

        .ant-input-suffix .ant-input-show-count-suffix {
            color: ${({$theme}) => $theme.colors.showCount.default};
            font-size: ${({$theme}) => $theme.typography.showCount.fontSize}px;
            font-weight: ${({$theme}) => $theme.typography.showCount.fontWeight};
        }

        .ant-input {
            font-weight: ${({$theme}) => $theme.typography.content.fontWeight};
            height: 38px;

            &::placeholder {
                font-weight: ${({$theme}) => $theme.typography.placeholder.fontWeight};
            }
        }

        &.ant-input-affix-wrapper-disabled {
            border-color: ${({$theme}) => $theme.colors.border.disabled};

            .ant-input-prefix .anticon {
                color: ${({$theme}) => $theme.colors.prefix.disabled};
            }

            .ant-input-suffix {
                color: ${({$theme}) => $theme.colors.suffix.disabled};

                .ant-input-show-count-suffix {
                    color: ${({$theme}) => $theme.colors.showCount.disabled};
                }

                .ant-input-clear-icon {
                    color: ${({$theme}) => $theme.colors.clearIcon.disabled};
                }
            }
        }

        &.ant-input-affix-wrapper-status-error:not(.ant-input-disabled) {
            .ant-input-prefix .anticon {
                color: ${({$theme}) => $theme.colors.prefix.error};
            }

            .ant-input-suffix {
                color: ${({$theme}) => $theme.colors.suffix.error};

                .ant-input-show-count-suffix {
                    color: ${({$theme}) => $theme.colors.showCount.error};
                }

                .ant-input-clear-icon {
                    color: ${({$theme}) => $theme.colors.clearIcon.error};
                }
            }
        }

        &.ant-input-affix-wrapper-status-warning:not(.ant-input-disabled) {
            .ant-input-prefix .anticon {
                color: ${({$theme}) => $theme.colors.prefix.warning};
            }

            .ant-input-suffix {
                color: ${({$theme}) => $theme.colors.suffix.warning};

                .ant-input-show-count-suffix {
                    color: ${({$theme}) => $theme.colors.showCount.warning};
                }

                .ant-input-clear-icon {
                    color: ${({$theme}) => $theme.colors.clearIcon.warning};
                }
            }
        }
    }

    &.ant-input-disabled,
    .ant-input-disabled {
        border-color: ${({$theme}) => $theme.colors.border.disabled};
        color: ${({$theme}) => $theme.colors.typography.content.disabled};

        &:hover {
            border-color: ${({$theme}) => $theme.colors.border.disabled};
        }

        &::placeholder {
            color: ${({$theme}) => $theme.colors.typography.placeholder.disabled};
        }
    }

    &.ant-input-status-error,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-error .ant-input {
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
    }

    &.ant-input-status-warning,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning,
    &.ant-input-affix-wrapper.ant-input-affix-wrapper-status-warning .ant-input {
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

const KitInput = forwardRef<any, IKitInput>(({label, helper, allowClear = true, ...inputProps}, ref) => {
    const {theme} = useKitTheme();

    return (
        <KitInputWrapper label={label} helper={helper} disabled={inputProps.disabled} status={inputProps.status}>
            <StyledAntdInput
                ref={ref}
                $theme={theme.components.Input}
                {...inputProps}
                allowClear={allowClear ? {clearIcon: <CloseCircleOutlined />} : undefined}
            />
        </KitInputWrapper>
    );
});

export default KitInput;
