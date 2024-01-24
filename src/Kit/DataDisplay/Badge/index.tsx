import React, {CSSProperties, FunctionComponent, useMemo} from 'react';
import {Badge as AntdBadge} from 'antd';
import {IKitBadge} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/useKitTheme';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';
import {kitBadgeCssTokens} from '@theme/aristid/components/DataDisplay/Badge';
import {kitColorsPaletteCssTokens} from '@theme/aristid/general/colors';
import {typographyCssTokens} from '@theme/aristid/general/typography';
import {convertToPixel} from '@theme/utils/convert';

const StyledAntdBadge = styled(AntdBadge)`
    height: 16px;
    min-width: 16px;
    line-height: 16px;
    font-size: ${convertToPixel(typographyCssTokens.fontSize7)};

    .ant-badge-count {
        background: var(
            ${kitBadgeCssTokens.colors.background.default},
            var(${kitColorsPaletteCssTokens.secondary.red.red400})
        );
        color: var(
            ${kitBadgeCssTokens.colors.typography.default},
            var(${kitColorsPaletteCssTokens.neutral.typography.white})
        );
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

const getCustomColors = (
    color: IKitBadge['color'],
    secondaryColorInvert: IKitBadge['secondaryColorInvert']
): CSSProperties | null => {
    if (!color || !isValidColor(color)) {
        return null;
    }

    return {
        [kitBadgeCssTokens.colors.background.default]: getColor(color, secondaryColorInvert),
        [kitBadgeCssTokens.colors.typography.default]: getLighterColor(color, secondaryColorInvert)
    } as CSSProperties;
};

export const KitBadge: FunctionComponent<IKitBadge> = ({color, style, secondaryColorInvert = false, ...badgeProps}) => {
    const {appId} = useKitTheme();

    const customStyle = useMemo(
        () => ({...style, ...getCustomColors(color, secondaryColorInvert)}),
        [color, secondaryColorInvert, style]
    );

    return <StyledAntdBadge style={customStyle} className={`${badgeProps.className} ${appId}`} {...badgeProps} />;
};

KitBadge.displayName = 'KitBadge';
