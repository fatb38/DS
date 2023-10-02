import React from 'react';
import {Badge as AntdBadge} from 'antd';
import {KitBadgeProps, KitBadgeCountColor} from './types';
import {css, styled} from 'styled-components';
import {IKitBadgeTheme} from '@theme/types/components/DataDisplay/Badge';
import {useKitTheme} from '@theme/theme-context';
import {IKitTypography} from '@theme/types/general/typography';

const StyledAntdBadge = styled(AntdBadge)<{
    $theme: IKitBadgeTheme;
    $typographyTheme: IKitTypography;
    $countColor: KitBadgeCountColor;
}>`
    height: 16px;
    min-width: 16px;
    line-height: 16px;
    font-size: ${({$typographyTheme}) => $typographyTheme.fontSize7}px;

    .ant-badge-count {
        ${({$countColor, $theme}) => {
            switch ($countColor) {
                case 'default':
                    return css`
                        background: ${$theme.colors.background.default};
                        color: ${$theme.colors.typography.default};
                    `;
                case 'green':
                    return css`
                        background: ${$theme.colors.background.green};
                        color: ${$theme.colors.typography.green};
                    `;
                case 'blue':
                    return css`
                        background: ${$theme.colors.background.blue};
                        color: ${$theme.colors.typography.blue};
                    `;
                case 'blueInvert':
                    return css`
                        background: ${$theme.colors.background.blueInvert};
                        color: ${$theme.colors.typography.blueInvert};
                    `;
                case 'gray':
                    return css`
                        background: ${$theme.colors.background.gray};
                        color: ${$theme.colors.typography.gray};
                    `;
            }
        }}
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

export const KitBadge: React.FunctionComponent<KitBadgeProps> = ({countColor = 'default', ...badgeProps}) => {
    const {theme} = useKitTheme();

    return (
        <StyledAntdBadge
            $theme={theme.components.Badge}
            $typographyTheme={theme.general.typography}
            $countColor={countColor}
            {...badgeProps}
        />
    );
};

KitBadge.displayName = 'KitBadge';
