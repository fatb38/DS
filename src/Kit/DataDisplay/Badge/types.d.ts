import {BadgeProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitBadgeTheme} from '@theme/types/components/DataDisplay/Badge';
import {IKitTypography} from '@theme/types/general/typography';

type AntdBadgeTypesToOmit = 'color' | 'size' | 'offset' | 'text';

export type KitBadgeCountColor = 'default' | 'green' | 'blue' | 'blueInvert' | 'grey';

export interface IKitBadge extends Omit<BadgeProps, AntdBadgeTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    countColor?: KitBadgeCountColor;
}

export interface IStyledKitBadge {
    $theme: IKitBadgeTheme;
    $typographyTheme: IKitTypography;
    $countColor: KitBadgeCountColor;
}
