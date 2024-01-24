import React, {CSSProperties, FunctionComponent, useMemo} from 'react';
import {css, styled} from 'styled-components';
import {IKitIcon, IStyledKitIcon} from './types';
import {useKitTheme} from '@theme/useKitTheme';
import useSecureClick from '@hooks/useSecureClick';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';
import {kitIconCssTokens} from '@theme/aristid/components/General/Icon';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {borderCssTokens} from '@theme/aristid/general/border';
import {convertToPixel} from '@theme/utils/convert';

const StyledKitIcon = styled.span<IStyledKitIcon>`
    color: ${({$on}) => {
        if ($on) {
            return `var(${kitIconCssTokens.colors.icon.on}, var(${kitColorsPaletteCssTokens.primary.primary400}))`;
        }
        return `var(${kitIconCssTokens.colors.icon.default}, var(${kitColorsPaletteCssTokens.neutral.typography.black}))`;
    }};
    background-color: ${({$on}) => {
        if ($on) {
            return `var(${kitIconCssTokens.colors.background.on}, var(${kitColorsPaletteCssTokens.primary.primary100}))`;
        }
        return `var(${kitIconCssTokens.colors.background.default}, transparent)`;
    }};
    border-radius: ${({$on}) => {
        if ($on) {
            return convertToPixel(kitIconCssTokens.border.radius.on, borderCssTokens.radius.s);
        }
        return convertToPixel(kitIconCssTokens.border.radius.default, borderCssTokens.radius.square);
    }};
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
    style,
    ...props
}) => {
    const {appId} = useKitTheme();

    const getCustomColors = (color: IKitIcon['color']): CSSProperties | null => {
        if (!color || !isValidColor(color)) {
            return null;
        }

        return {
            [kitIconCssTokens.colors.background.on]: getLighterColor(color),
            [kitIconCssTokens.colors.background.default]: 'transparent',
            [kitIconCssTokens.colors.icon.on]: getColor(color),
            [kitIconCssTokens.colors.icon.default]: getColor(color)
        } as CSSProperties;
    };

    const secureClick = useSecureClick(onClick);

    const customStyle = useMemo(() => ({...style, ...getCustomColors(color)}), [color, style]);

    return (
        <StyledKitIcon
            {...props}
            className={`${appId} kit-icon ${className ?? ''}`}
            style={customStyle}
            $on={on}
            $isClickable={onClick !== undefined}
            onClick={disableSecureClick ? onClick : secureClick}
        >
            {icon}
        </StyledKitIcon>
    );
};

KitIcon.displayName = 'KitIcon';
