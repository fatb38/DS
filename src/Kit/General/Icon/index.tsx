import React, {FunctionComponent} from 'react';
import {css, styled} from 'styled-components';
import {IKitIcon, IStyledKitIcon} from './types';
import {useKitTheme} from '@theme/theme-context';
import useSecureClick from '../../../hooks/useSecureClick';

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
        color: ${({$hoverable, $on, $theme}) =>
            $hoverable || $on ? $theme.colors.icon.on : $theme.colors.icon.default};
        background-color: ${({$hoverable, $on, $theme}) =>
            $hoverable || $on ? $theme.colors.background.on : $theme.colors.background.default};
        border-radius: ${({$hoverable, $on, $theme}) =>
            $hoverable || $on ? $theme.border.radius.on : $theme.border.radius.default}px;
    }
`;

export const KitIcon: FunctionComponent<IKitIcon> = ({
    className,
    on,
    hoverable,
    icon,
    onClick,
    disableSecureClick,
    ...props
}) => {
    const {theme} = useKitTheme();

    const secureClick = useSecureClick(onClick);

    return (
        <StyledKitIcon
            $theme={theme.components.Icon}
            className={'kit-icon ' + className}
            $on={on}
            $hoverable={hoverable}
            $isClickable={onClick !== undefined}
            onClick={disableSecureClick ? onClick : secureClick}
            {...props}
        >
            {icon}
        </StyledKitIcon>
    );
};

KitIcon.displayName = 'KitIcon';
