import {BadgeProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {KitColorProp} from '@utils/functions/types';

type AntdBadgeTypesToOmit = 'color' | 'size' | 'offset' | 'text';

export interface IKitBadge extends Omit<BadgeProps, AntdBadgeTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    color?: KitColorProp;
    secondaryColorInvert?: boolean;
}
