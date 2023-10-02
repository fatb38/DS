import React from 'react';
import {InputNumber as AntdInputNumber} from 'antd';
import {KitInputNumberProps} from './types';
import {styled} from 'styled-components';
import KitInputWrapper from '../Input/InputWrapper';
import {IKitInputNumberTheme} from '@theme/types/components/DataEntry/InputNumber';
import {useKitTheme} from '@theme/theme-context';

const StyledAntdInputNumber = styled(AntdInputNumber)<{
    $theme: IKitInputNumberTheme;
}>`
    font-weight: ${({$theme}) => $theme.typography.placeholder.fontWeight};
    height: 40px;
    line-height: 40px;

    .ant-input-number-input {
        font-weight: ${({$theme}) => $theme.typography.content.fontWeight};

        &::placeholder {
            font-weight: ${({$theme}) => $theme.typography.placeholder.fontWeight};
        }
    }

    &:not(.ant-input-number-affix-wrapper) {
        line-height: 38px;

        .ant-input-number-input-wrap {
            border-radius: ${({$theme}) => $theme.border.radius}px;
        }
    }

    // Use :focus-within because antd doesn't add a "ant-input-number-affix-wrapper-focused" class
    &.ant-input-number-focused,
    &.ant-input-number-affix-wrapper:focus-within {
        border-style: dashed;
        border-color: ${({$theme}) => $theme.colors.border.focused};

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            box-shadow: none;
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
        border-color: ${({$theme}) => $theme.colors.border.disabled};

        .ant-input-number-input {
            color: ${({$theme}) => $theme.colors.typography.content.disabled};

            &::placeholder {
                color: ${({$theme}) => $theme.colors.typography.placeholder.disabled};
            }
        }

        &.ant-input-number-affix-wrapper .ant-input-number-prefix {
            color: ${({$theme}) => $theme.colors.prefix.disabled};
        }
    }

    &.ant-input-number-affix-wrapper {
        .ant-input-number-input-wrap {
            .ant-input-number-input {
                padding: 0px 10px 0px 0px;
            }
        }

        .ant-input-number-prefix {
            margin-inline-end: 10px;
            color: ${({$theme}) => $theme.colors.prefix.default};
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
        background-color: ${({$theme}) => $theme.colors.background.warning};
        box-shadow: none;

        .ant-input-number-input-wrap {
            background-color: ${({$theme}) => $theme.colors.background.warning};
        }

        .ant-input-number-input {
            color: ${({$theme}) => $theme.colors.typography.content.warning};

            &::placeholder {
                color: ${({$theme}) => $theme.colors.typography.placeholder.warning};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${({$theme}) => $theme.colors.border.warning};

            &:hover,
            &:focus {
                border-color: ${({$theme}) => $theme.colors.border.warning};
            }

            &.ant-input-number-affix-wrapper .ant-input-number-prefix {
                color: ${({$theme}) => $theme.colors.prefix.warning};
            }
        }
    }

    &.ant-input-number-status-error,
    &.ant-input-number-out-of-range,
    &.ant-input-number-affix-wrapper-status-error {
        background-color: ${({$theme}) => $theme.colors.background.error};
        box-shadow: none;

        .ant-input-number-input-wrap {
            background-color: ${({$theme}) => $theme.colors.background.error};
        }

        .ant-input-number-input {
            color: ${({$theme}) => $theme.colors.typography.content.error};

            &::placeholder {
                color: ${({$theme}) => $theme.colors.typography.placeholder.error};
            }
        }

        &:not(.ant-input-borderless):not(.ant-input-disabled) {
            border-color: ${({$theme}) => $theme.colors.border.error};

            &:hover,
            &:focus {
                border-color: ${({$theme}) => $theme.colors.border.error};
            }

            &.ant-input-number-affix-wrapper .ant-input-number-prefix {
                color: ${({$theme}) => $theme.colors.prefix.error};
            }
        }
    }
`;

export const KitInputNumber: React.FunctionComponent<KitInputNumberProps> = ({label, helper, ...inputNumberProps}) => {
    const {theme} = useKitTheme();

    return (
        <KitInputWrapper
            label={label}
            helper={helper}
            disabled={inputNumberProps.disabled}
            status={inputNumberProps.status}
        >
            <StyledAntdInputNumber $theme={theme.components.InputNumber} {...inputNumberProps} />
        </KitInputWrapper>
    );
};

KitInputNumber.displayName = 'KitInputNumber';
