import React, {forwardRef, useContext} from 'react';
import {Radio, RadioChangeEvent, RadioProps} from 'antd';
import styled from 'styled-components';
import {IStyledKitRadio, KitRadioProps} from './types';
import RadioGroupContext from './context';
import {useKitTheme} from '@theme/theme-context';

const StyledKitRadio = styled(Radio)<IStyledKitRadio>`
    font-weight: ${({$theme}) => $theme.typography.fontWeight};

    // Uncheked
    .ant-radio {
        .ant-radio-inner {
            border: 1px solid ${({$theme}) => $theme.colors.border.default};
            background-color: ${({$theme}) => $theme.colors.background.default};
        }

        .ant-radio-inner:after {
            transform: scale(0.6);
            visibility: hidden;
            background-color: ${({$theme}) => $theme.colors.bullet.default};
        }
    }

    .ant-radio-checked::after {
        border-color: transparent;
    }

    &.ant-radio-wrapper-disabled .ant-radio .ant-radio-inner {
        border: 1px solid ${({$theme}) => $theme.colors.border.disabled};
        background-color: ${({$theme}) => $theme.colors.background.disabled};

        &:after {
            background-color: ${({$theme}) => $theme.colors.bullet.disabled};
        }
    }

    &.ant-radio-wrapper-danger .ant-radio {
        .ant-radio-inner {
            border: 1px solid ${({$theme}) => $theme.colors.border.danger.default};
            background-color: ${({$theme}) => $theme.colors.background.danger.default};

            &:after {
                background-color: ${({$theme}) => $theme.colors.bullet.danger.default};
            }
        }

        .ant-radio-input:hover + .ant-radio-inner {
            border-color: ${({$theme}) => $theme.colors.border.danger.hover};
            background-color: ${({$theme}) => $theme.colors.background.danger.hover};

            &:after {
                background-color: ${({$theme}) => $theme.colors.bullet.danger.hover};
            }
        }
    }

    &.ant-radio-wrapper-danger.ant-radio-wrapper-disabled .ant-radio .ant-radio-inner {
        border: 1px solid ${({$theme}) => $theme.colors.border.danger.default};
        background-color: ${({$theme}) => $theme.colors.background.danger.default};

        &:after {
            background-color: ${({$theme}) => $theme.colors.bullet.danger.default};
        }
    }

    &:not(.ant-radio-wrapper-danger):not(.ant-radio-wrapper-disabled) {
        .ant-radio-checked .ant-radio-inner {
            border-color: ${({$theme}) => $theme.colors.border.checked};
            background-color: ${({$theme}) => $theme.colors.background.checked};
        }

        .ant-radio-input:hover + .ant-radio-inner {
            border-color: ${({$theme}) => $theme.colors.border.hover};
            background-color: ${({$theme}) => $theme.colors.background.hover};

            &:after {
                background-color: ${({$theme}) => $theme.colors.bullet.hover};
            }
        }
    }

    .ant-radio-checked .ant-radio-inner:after {
        visibility: visible;
    }

    // Focus
    &:not(.ant-radio-wrapper-disabled) .ant-radio-input:focus + .ant-radio-inner {
        border-style: dashed;
    }

    &:not(.ant-radio-wrapper-disabled):not(.ant-radio-wrapper-danger) .ant-radio-input:focus + .ant-radio-inner {
        border-color: ${({$theme}) => $theme.colors.border.checked};
    }

    &:not(.ant-radio-wrapper-disabled) .ant-radio-input:focus-within + .ant-radio-inner::after {
        transform: scale(0.52);
    }

    // active
    &:not(.ant-radio-wrapper-danger) {
        .ant-radio-disabled + span {
            color: ${({$theme}) => $theme.colors.typography.disabled};
        }
    }

    .ant-radio-disabled {
        color: ${({$theme}) => $theme.colors.typography.disabled};
    }

    &.ant-radio-wrapper-danger {
        .ant-radio {
            &.ant-radio-disabled + span {
                color: ${({$theme}) => $theme.colors.typography.danger.disabled};
            }
        }
    }

    .ant-radio-checked + span {
        font-weight: ${({$theme}) => $theme.typography.fontWeight};
    }
`;

const KitRadio = forwardRef<any, KitRadioProps>((props, ref) => {
    const groupContext = useContext(RadioGroupContext);
    const {theme} = useKitTheme();
    const {className, danger, ...rest} = props;

    const _onChange = (e: RadioChangeEvent) => {
        props.onChange?.(e);
        groupContext?.onChange?.(e);
    };

    const radioProps: RadioProps = {...rest};
    if (groupContext) {
        radioProps.name = groupContext.name;
        radioProps.onChange = _onChange;
        radioProps.checked = props.value === groupContext.value;
        radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
    }

    return (
        <StyledKitRadio
            $theme={theme.components.Radio}
            ref={ref}
            className={danger ? (className || '') + ' ant-radio-wrapper-danger' : className}
            {...radioProps}
        />
    );
});

export default KitRadio;
