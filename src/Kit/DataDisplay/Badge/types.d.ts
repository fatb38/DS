import {BadgeProps} from 'antd';

type AntdBadgeTypesToOmit = 'color' | 'size' | 'offset' | 'text';

export type KitBadgeCountColor = 'default' | 'green' | 'blue' | 'blueInvert' | 'gray';

export interface KitBadgeProps extends Omit<BadgeProps, AntdBadgeTypesToOmit>, HTMLAttributes<HTMLDivElement> {
    countColor?: KitBadgeCountColor;
}
