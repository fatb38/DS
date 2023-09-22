import React from 'react';
import {Switch as AntdSwitch} from 'antd';
import styled from 'styled-components';
import {KitSwitchProps} from './types';
import {useKitTheme} from '@theme/theme-context';
import {KitSwitchTheme} from '@theme/types/components/DataEntry/Switch';

const StyledSwitch = styled(AntdSwitch)<{
    $theme: KitSwitchTheme;
}>`
    & {
        background: ${({$theme}) => $theme.colors.background.default.off};
        border: 1.3px solid ${({$theme}) => $theme.colors.handle.border.default.off};
        height: 20px;
        width: 32px;
        min-width: 32px;
        border-radius: 20px;
    }

    &.ant-switch-checked {
        border: 1.3px solid ${({$theme}) => $theme.colors.handle.border.default.on};
    }

    &.ant-switch:hover {
        background-color: white;
    }

    & {
        height: 22px;
    }

    .ant-switch-handle {
        font-size: 12px;
        top: 1px;
        width: 18px;
        height: 18px;
        inset-inline-start: 1px;

        .ant-switch-loading-icon {
            top: ${(16 - 12) / 2 + 1}px;
        }
    }

    &.ant-switch-checked .ant-switch-handle {
        inset-inline-start: calc(100% - 19px);
    }

    .ant-switch-handle::before {
        border: 1.3px solid ${({$theme}) => $theme.colors.handle.border.default.off};
        background-color: ${({$theme}) => $theme.colors.handle.background.default.off};
        box-shadow: none;
        border-radius: 9px;
    }

    &.ant-switch-checked .ant-switch-handle::before {
        border: 1.3px solid ${({$theme}) => $theme.colors.handle.border.default.on};
        background-color: ${({$theme}) => $theme.colors.handle.background.default.on};
    }

    &.ant-switch-disabled,
    &.ant-switch-checked.ant-switch-disabled {
        background: ${({$theme}) => $theme.colors.background.disabled};
        border-color: ${({$theme}) => $theme.colors.handle.border.disabled};

        .ant-switch-handle::before {
            background-color: ${({$theme}) => $theme.colors.background.disabled};
            border-color: ${({$theme}) => $theme.colors.handle.border.disabled};
            box-shadow: none;
        }
    }

    &.ant-switch.ant-switch-checked:not(.ant-switch-disabled) {
        background: ${({$theme}) => $theme.colors.background.default.on};

        .ant-switch-handle::before {
            border-color: ${({$theme}) => $theme.colors.handle.border.default.on};
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
            background-color: ${({$theme}) => $theme.colors.handle.background.default.on};
            border-color: ${({$theme}) => $theme.colors.handle.border.default.on};
        }
    }
`;

export const KitSwitch: React.FunctionComponent<KitSwitchProps> = props => {
    const {theme} = useKitTheme();

    return (
        <StyledSwitch
            $theme={theme.components.Switch}
            {...props}
            checkedChildren={null}
            unCheckedChildren={null}
            size={'default'}
        />
    );
};

KitSwitch.displayName = 'KitSwitch';
