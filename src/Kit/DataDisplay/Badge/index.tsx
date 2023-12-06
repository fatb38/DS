import React, {CSSProperties, FunctionComponent, useMemo} from 'react';
import {Badge as AntdBadge} from 'antd';
import {IKitBadge} from './types';
import {styled} from 'styled-components';
import {useKitTheme} from '@theme/theme-context';
import {getColor, getLighterColor, isValidColor} from '@utils/functions';
import {kitBadgeCssTokens} from '@theme/aristid/components/DataDisplay/Badge';

const StyledAntdBadge = styled(AntdBadge)`
    height: 16px;
    min-width: 16px;
    line-height: 16px;
    font-size: calc(var(--general-typography-fontSize7) * 1px);

    .ant-badge-count {
        background: var(--components-Badge-colors-background-default, var(--general-colors-secondary-red-red400));
        color: var(--components-Badge-colors-typography-default, var(--general-colors-neutral-typography-white));
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
