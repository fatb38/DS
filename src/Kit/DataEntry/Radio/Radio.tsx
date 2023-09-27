import React from 'react';
import {Radio, RadioChangeEvent, RadioProps} from 'antd';
import styled from 'styled-components';
import theme from './theme';
import {KitRadioProps, StyledKitRadioProps} from './types';
import RadioGroupContext from './context';

const StyledKitRadio = styled(Radio)<StyledKitRadioProps>`
    font-weight: ${theme.fontWeight.default};

    // Uncheked
    .ant-radio {
        .ant-radio-inner {
            border: ${theme.borderWidth} solid ${theme.borderColor.default};
            background-color: ${theme.backgroundColor.default};
        }

        .ant-radio-inner:after {
            transform: scale(0.6);
            visibility: hidden;
            background-color: ${theme.bulletColor.default};
        }
    }

    .ant-radio-checked::after {
        border-color: transparent;
    }

    &.ant-radio-wrapper-disabled .ant-radio .ant-radio-inner {
        border: ${theme.borderWidth} solid ${theme.borderColor.disabled};
        background-color: ${theme.backgroundColor.disabled};

        &:after {
            background-color: ${theme.bulletColor.disabled};
        }
    }

    &.ant-radio-wrapper-danger .ant-radio {
        .ant-radio-inner {
            border: ${theme.borderWidth} solid ${theme.borderColor.danger.default};
            background-color: ${theme.backgroundColor.danger.default};

            &:after {
                background-color: ${theme.bulletColor.danger.default};
            }
        }

        .ant-radio-input:hover + .ant-radio-inner {
            border-color: ${theme.borderColor.danger.hover};
            background-color: ${theme.backgroundColor.danger.hover};

            &:after {
                background-color: ${theme.bulletColor.danger.hover};
            }
        }
    }

    &.ant-radio-wrapper-danger.ant-radio-wrapper-disabled .ant-radio .ant-radio-inner {
        border: ${theme.borderWidth} solid ${theme.borderColor.danger.default};
        background-color: ${theme.backgroundColor.danger.default};

        &:after {
            background-color: ${theme.bulletColor.danger.default};
        }
    }

    &:not(.ant-radio-wrapper-danger):not(.ant-radio-wrapper-disabled) {
        .ant-radio-checked .ant-radio-inner {
            border-color: ${theme.borderColor.checked};
            background-color: ${theme.backgroundColor.checked};
        }

        .ant-radio-input:hover + .ant-radio-inner {
            border-color: ${theme.borderColor.hover};
            background-color: ${theme.backgroundColor.hover};

            &:after {
                background-color: ${theme.bulletColor.hover};
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
        border-color: ${theme.borderColor.checked};
    }

    &:not(.ant-radio-wrapper-disabled) .ant-radio-input:focus-within + .ant-radio-inner::after {
        transform: scale(0.52);
    }

    // active

    &:not(.ant-radio-wrapper-danger) {
        .ant-radio-disabled + span {
            color: ${theme.color.disabled};
        }
    }

    .ant-radio-disabled {
        color: ${theme.color.disabled};
    }

    &.ant-radio-wrapper-danger {
        .ant-radio {
            &.ant-radio-disabled + span {
                color: ${theme.color.danger.disabled};
            }
        }
    }

    .ant-radio-checked + span {
        font-weight: ${theme.fontWeight.default};
    }
`;

const KitRadio = React.forwardRef<any, KitRadioProps>((props, ref) => {
    const groupContext = React.useContext(RadioGroupContext);
    const {className, danger, ...rest} = props;

    const onChange = (e: RadioChangeEvent) => {
        props.onChange?.(e);
        groupContext?.onChange?.(e);
    };

    const radioProps: RadioProps = {...rest};
    if (groupContext) {
        radioProps.name = groupContext.name;
        radioProps.onChange = onChange;
        radioProps.checked = props.value === groupContext.value;
        radioProps.disabled = radioProps.disabled ?? groupContext.disabled;
    }

    return (
        <StyledKitRadio
            ref={ref}
            className={danger ? (className || '') + ' ant-radio-wrapper-danger' : className}
            {...radioProps}
        />
    );
});

export default KitRadio;
