import {BadgeProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitBadgeTheme} from '@theme/types/components/DataDisplay/Badge';
import {IKitTypography} from '@theme/types/general/typography';
import {KitColorProp} from '@utils/functions/types';

type AntdBadgeTypesToOmit = 'color' | 'size' | 'offset' | 'text';

export interface IKitBadge extends Omit<BadgeProps, AntdBadgeTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    color?: KitColorProp;
    secondaryColorInvert?: boolean;
}

export interface IStyledKitBadge {
    $theme: IKitBadgeTheme;
    $typographyTheme: IKitTypography;
    $backgroundColor: string;
    $fontColor: string;
}
