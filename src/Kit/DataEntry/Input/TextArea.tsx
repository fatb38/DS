import React, {FunctionComponent} from 'react';
import {Input as AntdInput} from 'antd';
import {IKitTextArea, IStyledAntdTextArea} from './types';
import {styled} from 'styled-components';
import {CloseCircleOutlined} from '@ant-design/icons';
import KitInputWrapper from './InputWrapper';
import {useKitTheme} from '@theme/theme-context';

const StyledAntdTextArea = styled(AntdInput.TextArea)<IStyledAntdTextArea>`
    &.ant-input,
    .ant-input {
        padding: 4px 10px;
        font-weight: ${({$theme}) => $theme.typography.content.fontWeight};

        &::placeholder {
            font-weight: ${({$theme}) => $theme.typography.placeholder.fontWeight};
        }
    }

    .ant-input-suffix {
        .ant-input-clear-icon {
            color: ${({$theme}) => $theme.colors.clearIcon.default};
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
                color: ${({$theme}) => $theme.colors.showCount.default};
                font-size: ${({$theme}) => $theme.typography.showCount.fontSize}px;
                font-weight: ${({$theme}) => $theme.typography.showCount.fontWeight};
            }
        }

        &.ant-input-affix-wrapper-disabled {
            .ant-input-data-count {
                color: ${({$theme}) => $theme.colors.showCount.disabled};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${({$theme}) => $theme.colors.clearIcon.disabled};
                }
            }
        }

        &.ant-input-affix-wrapper-status-error {
            .ant-input-data-count {
                color: ${({$theme}) => $theme.colors.showCount.error};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${({$theme}) => $theme.colors.clearIcon.error};
                }
            }

            &:hover,
            &:focus {
                border-color: ${({$theme}) => $theme.colors.border.error};
            }
        }

        &.ant-input-affix-wrapper-status-warning {
            .ant-input-data-count {
                color: ${({$theme}) => $theme.colors.showCount.warning};
            }

            .ant-input-suffix {
                .ant-input-clear-icon {
                    color: ${({$theme}) => $theme.colors.clearIcon.warning};
                }
            }

            &:hover,
            &:focus {
                border-color: ${({$theme}) => $theme.colors.border.warning};
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
    &.ant-input-affix-wrapper-status-error,
    .ant-input-status-error {
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
    &.ant-input-affix-wrapper-status-warning,
    .ant-input-status-warning {
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

    &:focus,
    &.ant-input-affix-wrapper-focused {
        border-style: dashed;
        box-shadow: none;

        .ant-input::placeholder {
            color: transparent;
        }
    }
`;

const KitTextArea: FunctionComponent<IKitTextArea> = ({label, helper, allowClear = true, ...textAreaProps}) => {
    const {theme} = useKitTheme();

    return (
        <KitInputWrapper label={label} helper={helper} disabled={textAreaProps.disabled} status={textAreaProps.status}>
            <StyledAntdTextArea
                $theme={theme.components.Input.TextArea}
                {...textAreaProps}
                allowClear={allowClear ? {clearIcon: <CloseCircleOutlined />} : undefined}
            />
        </KitInputWrapper>
    );
};

export default KitTextArea;
