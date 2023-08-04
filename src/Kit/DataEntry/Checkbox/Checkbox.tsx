import React from "react";
import { Checkbox } from "antd";
import styled from "styled-components";
import theme from "./theme";
import { KitCheckboxProps } from "./types";

const StyledKitCheckbox = styled(Checkbox)<KitCheckboxProps>`
    font-weight: ${theme.fontWeight.default};

    &:not(.ant-checkbox-wrapper-danger) {
        .ant-checkbox-disabled + span {
            color: ${theme.color.disabled};
        }
    }

    .ant-checkbox-disabled {
        color: ${theme.color.disabled};

        .ant-checkbox-inner {
            background-color: ${theme.backgroundColor.disabled};
            border: ${theme.borderWidth} solid ${theme.borderColor.disabled};
        }

        .ant-checkbox-inner:after {
            border-color: ${theme.borderColor.disabled};
        }
    }

    &.ant-checkbox-wrapper-danger
        .ant-checkbox-disabled
        .ant-checkbox-inner:after {
        border-color: ${theme.borderColor.danger.default};
    }

    .ant-checkbox-indeterminate {
        &:not(.ant-checkbox-disabled) .ant-checkbox-inner {
            background-color: ${theme.backgroundColor.default};
            border-color: ${theme.backgroundColor.default};
        }

        .ant-checkbox-inner:after {
            width: 8px;
            height: 0px;
            border: ${theme.borderWidth} solid white;
            transform: translate("-4px", "-1px");
        }
        &.ant-checkbox-disabled .ant-checkbox-inner:after {
            border-color: ${theme.borderColor.disabled};
        }
    }

    &.ant-checkbox-wrapper-danger {
        .ant-checkbox {
            &.ant-checkbox-disabled + span {
                color: ${theme.color.danger.disabled};
            }

            .ant-checkbox-inner {
                background-color: ${theme.backgroundColor.danger.default};
                border: ${theme.borderWidth} solid
                    ${theme.borderColor.danger.default};
            }
        }
    }

    .ant-checkbox-checked + span {
        font-weight: ${theme.fontWeight.checked};
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
            border-color: ${theme.borderColor.hover};
        }
    }

    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled):hover,
    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled):hover
        .ant-checkbox-checked,
    &.ant-checkbox-wrapper-danger:not(.ant-checkbox-wrapper-disabled)
        .ant-checkbox:hover {
        .ant-checkbox-inner {
            border-color: ${theme.borderColor.danger.hover};
            background-color: ${theme.backgroundColor.danger.hover};
        }
    }

    &.ant-checkbox-wrapper .ant-checkbox-input:focus + .ant-checkbox-inner {
        border: ${theme.borderWidth} dashed ${theme.borderColor.focus};
    }
    &.ant-checkbox-wrapper-danger
        .ant-checkbox-input:focus
        + .ant-checkbox-inner {
        border: ${theme.borderWidth} dashed ${theme.borderColor.danger.focus};
    }
`;

const KitCheckbox = React.forwardRef<any, KitCheckboxProps>((props, ref) => {
    let className = props.danger
        ? (props.className || "") + " ant-checkbox-wrapper-danger"
        : props.className;

    return <StyledKitCheckbox {...props} ref={ref} className={className} />;
});

export default KitCheckbox;
