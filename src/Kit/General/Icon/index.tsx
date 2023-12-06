import React, {FunctionComponent, useMemo} from 'react';
import {css, styled} from 'styled-components';
import {IKitIcon, IStyledKitIcon} from './types';
import {useKitTheme} from '@theme/theme-context';
import useSecureClick from '@hooks/useSecureClick';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';

const StyledKitIcon = styled.span<IStyledKitIcon>`
    color: ${({$on, $theme, $iconColor}) => {
        if ($on) {
            return $iconColor ?? $theme.colors.icon.on;
        }
        return $iconColor ?? $theme.colors.icon.default;
    }};
    background-color: ${({$on, $theme, $iconColor, $backgroundColor}) => {
        if ($on) {
            return $iconColor ? $backgroundColor : $theme.colors.background.on;
        }
        return $theme.colors.background.default;
    }};
    border-radius: ${({$on, $theme}) => ($on ? $theme.border.radius.on : $theme.border.radius.default)}px;
    padding: 8px;
    min-width: 16px;
    min-height: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ${({$isClickable}) =>
        $isClickable &&
        css`
            cursor: pointer;
        `}
`;

export const KitIcon: FunctionComponent<IKitIcon> = ({
    className,
    on,
    icon,
    onClick,
    disableSecureClick,
    color,
    ...props
}) => {
    const {theme} = useKitTheme();

    const calculatedIconColor = useMemo(() => {
        if (!color || !isValidColor(color)) {
            return undefined;
        }

        return getColor(color);
    }, [color]);

    const calculatedBackgroundColor = useMemo(() => {
        if (!color || !isValidColor(color)) {
            return undefined;
        }

        return getLighterColor(color);
    }, [color]);

    const secureClick = useSecureClick(onClick);

    return (
        <StyledKitIcon
            $theme={theme.components.Icon}
            className={'kit-icon ' + className}
            $iconColor={calculatedIconColor}
            $backgroundColor={calculatedBackgroundColor}
            $on={on}
            $isClickable={onClick !== undefined}
            onClick={disableSecureClick ? onClick : secureClick}
            {...props}
        >
            {icon}
        </StyledKitIcon>
    );
};

KitIcon.displayName = 'KitIcon';
