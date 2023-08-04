import React from "react";
import { Switch } from "antd";
import styled from "styled-components";
import theme from "./theme";
import { KitSwitchProps, StyledSwitchProps } from "./types";

const StyledSwitch = styled(Switch)<StyledSwitchProps>`
    & {
        background: ${theme.backgroundColor.default.off};
        height: ${theme.height}px;
        width: 32px;
        min-width: 32px;
        border-radius: 20px;
    }

    .ant-switch-handle {
        font-size: ${theme.iconFontSize}px;
        top: 1px;
        width: 18px;
        height: 18px;
        inset-inline-start: 1px;

        .ant-switch-loading-icon {
            top: ${(theme.pinHeight - theme.iconFontSize) / 2}px;
        }
    }

    &.ant-switch-checked .ant-switch-handle {
        inset-inline-start: calc(100% - 19px);
    }

    .ant-switch-handle::before {
        border: ${theme.handle.borderWidth} solid
            ${theme.handle.borderColor.default.off};
        background-color: ${theme.handle.backgroundColor.default};
        box-shadow: none;
        border-radius: 9px;
    }

    &.ant-switch-disabled,
    &.ant-switch-checked.ant-switch-disabled {
        background: ${theme.backgroundColor.disabled.on};

        .ant-switch-handle::before {
            border-color: ${theme.handle.borderColor.disabled.on};
            background-color: ${theme.handle.backgroundColor.disabled};
            box-shadow: none;
        }
    }

    &.ant-switch.ant-switch-checked:not(.ant-switch-disabled) {
        background: ${theme.backgroundColor.default.on};

        .ant-switch-handle::before {
            border-color: ${theme.handle.borderColor.default.on};
            box-shadow: none;
        }

        &.ant-switch.ant-switch-focus {
            .ant-switch-handle::before {
                box-shadow: none;
            }
        }
    }

    &:focus {
        .ant-switch-handle::before {
            border-style: dashed;
        }
    }
`;

export const KitSwitch: React.FunctionComponent<KitSwitchProps> = (props) => (
    <StyledSwitch
        {...props}
        checkedChildren={null}
        unCheckedChildren={null}
        size={"default"}
    />
);

KitSwitch.displayName = "KitSwitch";
