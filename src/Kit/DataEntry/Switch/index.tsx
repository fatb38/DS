import React, {forwardRef} from 'react';
import {Switch as AntdSwitch} from 'antd';
import styled from 'styled-components';
import {IKitSwitch} from './types';
import {useKitTheme} from '@theme/theme-context';
import {kitSwitchCssTokens} from '@theme/aristid/components/DataEntry/Switch';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';

const StyledSwitch = styled(AntdSwitch)`
    & {
        background: var(
            ${kitSwitchCssTokens.colors.background.default.off},
            var(${kitColorsPaletteCssTokens.neutral.background})
        );
        border: 1.3px solid
            var(
                ${kitSwitchCssTokens.colors.handle.border.default.off},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        height: 20px;
        width: 32px;
        min-width: 32px;
        border-radius: 20px;
    }

    &.ant-switch-checked {
        border: 1.3px solid
            var(
                ${kitSwitchCssTokens.colors.handle.border.default.on},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
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
            top: 3px;
        }
    }

    &.ant-switch-checked .ant-switch-handle {
        inset-inline-start: calc(100% - 19px);
    }

    .ant-switch-handle::before {
        border: 1.3px solid
            var(
                ${kitSwitchCssTokens.colors.handle.border.default.off},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
            );
        background-color: var(
            ${kitSwitchCssTokens.colors.handle.background.default.off},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey400})
        );
        box-shadow: none;
        border-radius: 9px;
    }

    &.ant-switch-checked .ant-switch-handle::before {
        border: 1.3px solid
            var(
                ${kitSwitchCssTokens.colors.handle.border.default.on},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        background-color: var(
            ${kitSwitchCssTokens.colors.handle.background.default.on},
            var(${kitColorsPaletteCssTokens.neutral.white})
        );
    }

    &.ant-switch-disabled,
    &.ant-switch-checked.ant-switch-disabled {
        background: var(
            ${kitSwitchCssTokens.colors.background.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
        );
        border-color: var(
            ${kitSwitchCssTokens.colors.handle.border.disabled},
            var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
        );

        .ant-switch-handle::before {
            background: var(
                ${kitSwitchCssTokens.colors.background.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey100})
            );
            border-color: var(
                ${kitSwitchCssTokens.colors.handle.border.disabled},
                var(${kitColorsPaletteCssTokens.secondary.mediumGrey.mediumGrey200})
            );
            box-shadow: none;
        }
    }

    &.ant-switch.ant-switch-checked:not(.ant-switch-disabled) {
        background: var(
            ${kitSwitchCssTokens.colors.background.default.on},
            var(${kitColorsPaletteCssTokens.primary.primary400})
        );

        .ant-switch-handle::before {
            border-color: var(
                ${kitSwitchCssTokens.colors.handle.border.default.on},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
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
            background-color: var(
                ${kitSwitchCssTokens.colors.handle.background.default.on},
                var(${kitColorsPaletteCssTokens.neutral.white})
            );
            border-color: var(
                ${kitSwitchCssTokens.colors.handle.border.default.on},
                var(${kitColorsPaletteCssTokens.primary.primary400})
            );
        }
    }
`;

export const KitSwitch = forwardRef<HTMLButtonElement, IKitSwitch>(({className, ...props}, ref) => {
    const {appId} = useKitTheme();

    return (
        <StyledSwitch
            {...props}
            ref={ref}
            checkedChildren={null}
            unCheckedChildren={null}
            size={'default'}
            className={`${appId} ${className ?? ''}`}
        />
    );
});

KitSwitch.displayName = 'KitSwitch';
