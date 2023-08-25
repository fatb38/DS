import React from 'react';
import {Badge as AntdBadge} from 'antd';
import {KitBadgeProps, KitBadgeCountColor} from './types';
import {css, styled} from 'styled-components';
import theme from '@theme/index';

const StyledAntdBadge = styled(AntdBadge)<{
    $countColor: KitBadgeCountColor;
}>`
    height: 16px;
    min-width: 16px;
    line-height: 16px;
    font-size: ${theme.typography.fontSize7};

    .ant-badge-count {
        ${props => {
            switch (props.$countColor) {
                case 'default':
                    return css`
                        background: ${theme.color.secondary.red.red400};
                        color: ${theme.color.neutral.typography.white};
                    `;
                case 'green':
                    return css`
                        background: ${theme.color.secondary.green.green400};
                        color: ${theme.color.neutral.typography.white};
                    `;
                case 'blue':
                    return css`
                        background: ${theme.color.primary.blue400};
                        color: ${theme.color.neutral.typography.white};
                    `;
                case 'blueInvert':
                    return css`
                        background: ${theme.color.primary.blue100};
                        color: ${theme.color.secondary.blue.blue400};
                    `;
                case 'gray':
                    return css`
                        background: ${theme.color.neutral.background};
                        color: ${theme.color.neutral.typography.black60};
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
    return <StyledAntdBadge $countColor={countColor} {...badgeProps} />;
};

KitBadge.displayName = 'KitBadge';
