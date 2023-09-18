import {BadgeProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdBadgeTypesToOmit = 'color' | 'size' | 'offset' | 'text';

export type KitBadgeCountColor = 'default' | 'green' | 'blue' | 'blueInvert' | 'gray';

export interface KitBadgeProps extends Omit<BadgeProps, AntdBadgeTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    countColor?: KitBadgeCountColor;
}
