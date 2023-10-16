import React, {FunctionComponent} from 'react';
import {css, styled} from 'styled-components';
import {IKitIcon, IStyledKitIcon} from './types';
import {useKitTheme} from '@theme/theme-context';

const StyledKitIcon = styled.span<IStyledKitIcon>`
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
        color: ${({$on, $theme}) => ($on ? $theme.colors.icon.on : $theme.colors.icon.default)};
        background-color: ${({$on, $theme}) => ($on ? $theme.colors.background.on : $theme.colors.background.default)};
        border-radius: ${({$on, $theme}) => ($on ? $theme.border.radius.on : $theme.border.radius.default)}px;
    }
`;

export const KitIcon: FunctionComponent<IKitIcon> = ({className, on, icon, onClick, ...props}) => {
    const {theme} = useKitTheme();

    return (
        <StyledKitIcon
            $theme={theme.components.Icon}
            className={'kit-icon ' + className}
            $on={on}
            $isClickable={onClick !== undefined}
            {...props}
        >
            {icon}
        </StyledKitIcon>
    );
};

KitIcon.displayName = 'KitIcon';
