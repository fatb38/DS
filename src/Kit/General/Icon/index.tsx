import React from 'react';
import {css, styled} from 'styled-components';
import {KitIconProps} from './types';
import {useKitTheme} from '@theme/theme-context';
import {IKitIconTheme} from '@theme/types/components/General/Icon';

interface StyledKitIconProps extends Omit<KitIconProps, 'icon'> {
    $theme: IKitIconTheme;
    $on?: boolean;
    $hoverable?: boolean;
    $isClickable?: boolean;
    className?: string;
}

const StyledKitIcon = styled.span<StyledKitIconProps>`
    color: ${({$on, $theme}) => ($on ? $theme.colors.icon.on : $theme.colors.icon.default)};
    background-color: ${({$on, $theme}) => ($on ? $theme.colors.background.on : $theme.colors.background.default)};
    border-radius: ${({$on, $theme}) => ($on ? $theme.border.radius.on : $theme.border.radius.default)}px;
    padding: 8px;

    ${({$isClickable}) =>
        $isClickable &&
        css`
            cursor: pointer;
        `}

    &:hover {
        color: ${({$hoverable, $on, $theme}) =>
            $hoverable || $on ? $theme.colors.icon.on : $theme.colors.icon.default};
        background-color: ${({$hoverable, $on, $theme}) =>
            $hoverable || $on ? $theme.colors.background.on : $theme.colors.background.default};
        border-radius: ${({$hoverable, $on, $theme}) =>
            $hoverable || $on ? $theme.border.radius.on : $theme.border.radius.default}px;
    }
`;

export const KitIcon: React.FunctionComponent<KitIconProps> = ({className, on, hoverable, icon, onClick, ...props}) => {
    const {theme} = useKitTheme();

    return (
        <StyledKitIcon
            $theme={theme.components.Icon}
            className={'kit-icon ' + className}
            $on={on}
            $hoverable={hoverable}
            $isClickable={onClick !== undefined}
            {...props}
        >
            {icon}
        </StyledKitIcon>
    );
};

KitIcon.displayName = 'KitIcon';
