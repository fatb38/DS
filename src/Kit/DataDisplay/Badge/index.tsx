import React, {FunctionComponent, useMemo} from 'react';
import {Badge as AntdBadge} from 'antd';
import {IKitBadge, IStyledKitBadge} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';

const StyledAntdBadge = styled(AntdBadge)<IStyledKitBadge>`
    height: 16px;
    min-width: 16px;
    line-height: 16px;
    font-size: ${({$typographyTheme}) => $typographyTheme.fontSize7}px;

    .ant-badge-count {
        background: ${({$backgroundColor}) => $backgroundColor};
        color: ${({$fontColor}) => $fontColor};
    }

    &.ant-badge {
        .ant-badge-status-processing {
            &.ant-scroll-number {
                position: absolute;
            }

            &::after {
                animation-name: none;
                content: initial;
            }

            &.ant-badge-status-dot {
                &::after {
                    animation-name: none;
                    content: initial;
                }
            }
        }
    }
`;

export const KitBadge: FunctionComponent<IKitBadge> = ({color, secondaryColorInvert = false, ...badgeProps}) => {
    const {theme} = useKitTheme();

    const calculatedBackgroundColor = useMemo(() => {
        if (!color || !isValidColor(theme.general.colors, color)) {
            return theme.components.Badge.colors.background.default;
        }

        return getColor(theme.general.colors, color, secondaryColorInvert);
    }, [color, secondaryColorInvert, theme]);

    const calculatedFontColor = useMemo(() => {
        if (!color || !isValidColor(theme.general.colors, color)) {
            return theme.components.Badge.colors.typography.default;
        }

        return getLighterColor(theme.general.colors, color, secondaryColorInvert);
    }, [color, secondaryColorInvert, theme]);

    return (
        <StyledAntdBadge
            $theme={theme.components.Badge}
            $typographyTheme={theme.general.typography}
            $backgroundColor={calculatedBackgroundColor}
            $fontColor={calculatedFontColor}
            {...badgeProps}
        />
    );
};

KitBadge.displayName = 'KitBadge';
