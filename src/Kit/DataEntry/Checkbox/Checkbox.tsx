import React, {useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Checkbox} from 'antd';
import {IKitCheckbox} from './types';
import {useKitTheme} from '@theme/theme-context';
import {IKitCheckboxTheme} from '@theme/types/components/DataEntry/Checkbox';
import {GroupContext} from './Group';

const StyledKitCheckbox = styled(Checkbox)<{
    $theme: IKitCheckboxTheme;
}>`
    font-weight: ${({$theme}) => $theme.typography.fontWeight};

    &:not(.ant-checkbox-wrapper-danger) {
        .ant-checkbox-disabled + span {
            color: ${({$theme}) => $theme.colors.typography.disabled};
        }
    }

    .ant-checkbox-disabled {
        color: ${({$theme}) => $theme.colors.typography.disabled};

        .ant-checkbox-inner {
            background-color: ${({$theme}) => $theme.colors.background.disabled};
            border: 1px solid ${({$theme}) => $theme.colors.border.disabled};
        }

        .ant-checkbox-inner:after {
            border-color: ${({$theme}) => $theme.colors.border.disabled};
        }
    }

    .ant-checkbox-indeterminate {
        &:not(.ant-checkbox-disabled) .ant-checkbox-inner {
            background-color: ${({$theme}) => $theme.colors.background.check};
            border-color: ${({$theme}) => $theme.colors.border.check};
        }

        .ant-checkbox-inner:after {
            width: 8px;
            height: 0px;
            border: 1px solid white;
            transform: translate('-4px', '-1px');
        }

        &.ant-checkbox-disabled .ant-checkbox-inner:after {
            border-color: ${({$theme}) => $theme.colors.border.disabled};
        }
    }

    &.ant-checkbox-wrapper-danger {
        .ant-checkbox {
            &.ant-checkbox-disabled + span {
                color: ${({$theme}) => $theme.colors.typography.danger.disabled};
            }

            .ant-checkbox-inner {
                background-color: ${({$theme}) => $theme.colors.background.danger.default};
                border: 1px solid ${({$theme}) => $theme.colors.border.danger.default};
            }
        }

        .ant-checkbox-disabled .ant-checkbox-inner:after {
            border-color: ${({$theme}) => $theme.colors.border.danger.default};
        }
    }

    .ant-checkbox-checked + span {
        font-weight: ${({$theme}) => $theme.typography.fontWeight};
    }

    .ant-checkbox-checked:after {
        border: none;
    }

    &.ant-checkbox-wrapper-danger .ant-checkbox-checked:after {
        border: none;
    }

    // Hover
    &:not(.ant-checkbox-wrapper-disabled):hover,
    &:not(.ant-checkbox-wrapper-disabled) .ant-checkbox:hover {
        .ant-checkbox-inner {
            border-color: ${({$theme}) => $theme.colors.border.hover};
        }
    }

    &:not(.ant-checkbox-wrapper-disabled) .ant-checkbox-indeterminate:hover {
        .ant-checkbox-inner {
            background-color: ${({$theme}) => $theme.colors.background.hover};
            border-color: ${({$theme}) => $theme.colors.background.hover};
        }
    }

    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled):hover,
    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-checked,
    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled) .ant-checkbox:hover {
        .ant-checkbox-inner {
            border-color: ${({$theme}) => $theme.colors.border.danger.hover};
            background-color: ${({$theme}) => $theme.colors.background.danger.hover};
        }
    }

    &.ant-checkbox-wrapper .ant-checkbox-input:focus + .ant-checkbox-inner {
        border: 1px dashed ${({$theme}) => $theme.colors.border.focus};
    }
    &.ant-checkbox-wrapper-danger .ant-checkbox-input:focus + .ant-checkbox-inner {
        border: 1px dashed ${({$theme}) => $theme.colors.border.danger.focus};
    }

    // Focus
    &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):not(.ant-checkbox-wrapper-danger):hover
        .ant-checkbox:focus-within
        .ant-checkbox-inner {
        border: 1px dashed ${({$theme}) => $theme.colors.border.focus};
        background-color: ${({$theme}) => $theme.colors.background.focus};
        &:after {
            border-color: ${({$theme}) => $theme.colors.border.focus};
            border-top: 0;
            border-inline-start: 0;
        }
    }

    &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):not(.ant-checkbox-wrapper-danger)
        .ant-checkbox:focus-within
        .ant-checkbox-inner {
        background-color: ${({$theme}) => $theme.colors.background.focus};
        &:after {
            border-color: ${({$theme}) => $theme.colors.border.focus};
            border-top: 0;
            border-inline-start: 0;
        }
    }

    &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):not(.ant-checkbox-wrapper-danger)
        .ant-checkbox:focus-within
        .ant-checkbox-inner {
        background-color: ${({$theme}) => $theme.colors.background.focus};
        &:after {
            border-color: ${({$theme}) => $theme.colors.border.focus};
            border-top: 0;
            border-inline-start: 0;
            border-width: 2px;
        }
    }

    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled) .ant-checkbox:focus-within {
        .ant-checkbox-inner {
            background-color: ${({$theme}) => $theme.colors.background.focus};
            &:after {
                border-color: ${({$theme}) => $theme.colors.border.danger.focus};
                border-top: 0;
                border-inline-start: 0;
                border-width: 2px;
            }
        }
    }
`;

const KitCheckbox = React.forwardRef<any, IKitCheckbox>(({danger, ...props}, ref) => {
    const checkboxGroup = useContext(GroupContext);
    const {theme} = useKitTheme();
    const mergedDisabled = checkboxGroup?.disabled || props.disabled;
    const prevValue = useRef(props.value);

    useEffect(() => {
        checkboxGroup?.registerValue(props.value);
    }, []);

    useEffect(() => {
        if (props.skipGroup) {
            return;
        }
        if (props.value !== prevValue.current) {
            checkboxGroup?.cancelValue(prevValue.current);
            checkboxGroup?.registerValue(props.value);
            prevValue.current = props.value;
        }
        return () => checkboxGroup?.cancelValue(props.value);
    }, [props.value]);

    const checkboxProps = {...props};
    if (checkboxGroup && !props.skipGroup) {
        checkboxProps.onChange = (...args) => {
            if (props.onChange) {
                props.onChange(...args);
            }
            if (checkboxGroup.toggleOption) {
                checkboxGroup.toggleOption({label: props.children, value: props.value});
            }
        };
        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.includes(props.value);
    }

    const className = danger ? (props.className || '') + ' ant-checkbox-wrapper-danger' : props.className;

    return (
        <StyledKitCheckbox
            $theme={theme.components.Checkbox}
            {...checkboxProps}
            ref={ref}
            disabled={mergedDisabled}
            className={className}
        />
    );
});

export default KitCheckbox;
