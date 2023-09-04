import React from 'react';
import {Switch} from 'antd';
import styled from 'styled-components';
import theme from './theme';
import {KitSwitchProps, StyledSwitchProps} from './types';

const StyledSwitch = styled(Switch)<StyledSwitchProps>`
    & {
        background: ${theme.backgroundColor.default.off};
        border: ${theme.handle.borderWidth} solid ${theme.handle.borderColor.default.off};
        height: ${theme.height}px;
        width: 32px;
        min-width: 32px;
        border-radius: 20px;
    }

    &.ant-switch-checked {
        border: ${theme.handle.borderWidth} solid ${theme.handle.borderColor.default.on};
    }

    &.ant-switch:hover {
        background-color: white;
    }

    & {
        height: 22px;
    }

    .ant-switch-handle {
        font-size: ${theme.iconFontSize}px;
        top: 1px;
        width: 18px;
        height: 18px;
        inset-inline-start: 1px;

        .ant-switch-loading-icon {
            top: ${(theme.pinHeight - theme.iconFontSize) / 2 + 1}px;
        }
    }

    &.ant-switch-checked .ant-switch-handle {
        inset-inline-start: calc(100% - 19px);
    }

    .ant-switch-handle::before {
        border: ${theme.handle.borderWidth} solid ${theme.handle.borderColor.default.off};
        background-color: ${theme.handle.backgroundColor.default.off};
        box-shadow: none;
        border-radius: 9px;
    }

    &.ant-switch-checked .ant-switch-handle::before {
        border: ${theme.handle.borderWidth} solid ${theme.handle.borderColor.default.on};
        background-color: ${theme.handle.backgroundColor.default.on};
    }

    &.ant-switch-disabled,
    &.ant-switch-checked.ant-switch-disabled {
        background: ${theme.backgroundColor.disabled.on};
        border-color: ${theme.handle.borderColor.disabled.on};

        .ant-switch-handle::before {
            border-color: ${theme.handle.borderColor.disabled.on};
            background-color: ${theme.handle.borderColor.disabled.on};
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

    // Focus
    &.ant-switch-checked:focus-visible .ant-switch-handle {
        width: 23px;
        inset-inline-start: calc(100% - 24px);
    }

    &.ant-switch:not(.ant-switch-checked):focus-visible .ant-switch-handle {
        width: 23px;
        &::before {
            background-color: ${theme.handle.borderColor.default.on};
            border-color: ${theme.handle.borderColor.default.on};
        }
    }
`;

export const KitSwitch: React.FunctionComponent<KitSwitchProps> = props => (
    <StyledSwitch {...props} checkedChildren={null} unCheckedChildren={null} size={'default'} />
);

KitSwitch.displayName = 'KitSwitch';
