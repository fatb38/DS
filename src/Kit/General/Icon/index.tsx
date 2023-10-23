import React, {FunctionComponent, useMemo} from 'react';
import {css, styled} from 'styled-components';
import {IKitIcon, IStyledKitIcon} from './types';
import {useKitTheme} from '@theme/theme-context';
import useSecureClick from '@hooks/useSecureClick';
import convert from 'color-convert';

const StyledKitIcon = styled.span<IStyledKitIcon>`
    color: ${({$on, $theme, $color}) => {
        if ($on) {
            return $color ?? $theme.colors.icon.on;
        }
        return $color ?? $theme.colors.icon.default;
    }};
    background-color: ${({$on, $theme, $color, $backgroundColor}) => {
        if ($on) {
            return $color ? $backgroundColor : $theme.colors.background.on;
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

const colorToLightHSL = (color, lightness = 95): string | null => {
    if (color?.startsWith('#')) {
        const rgbColor = convert.hex.rgb(color);
        const hslColor = convert.rgb.hsl(rgbColor);
        return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${lightness}%)`;
    } else if (color?.startsWith('rgb')) {
        const rgbColor = color.match(/\d+/g).map(Number);
        const hslColor = convert.rgb.hsl(rgbColor);
        return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${lightness}%)`;
    } else if (color?.startsWith('hsl')) {
        const hslColor = color.match(/\d+/g).map(Number);
        return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${lightness}%)`;
    }
    return null;
};

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

    const _getColor = (color: string | undefined) => {
        if (color && Object.keys(theme.general.colors.secondary).includes(color)) {
            return theme.general.colors.secondary[color][`${color}400`];
        }
        return color;
    };

    const _getBackgroundColor = (color: string | undefined) => {
        if (color && Object.keys(theme.general.colors.secondary).includes(color)) {
            return theme.general.colors.secondary[color][`${color}100`];
        }
        return colorToLightHSL(color);
    };

    const calculatedColor = useMemo(() => _getColor(color), [color]);
    const calculatedBackgroundColor = useMemo(() => _getBackgroundColor(color), [color]);

    const secureClick = useSecureClick(onClick);

    return (
        <StyledKitIcon
            $theme={theme.components.Icon}
            className={'kit-icon ' + className}
            $color={calculatedColor}
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
