import {DividerProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitDividerTheme} from '@theme/types/components/Layout/Divider';

type AntdDividerTypesToOmit = 'style' | 'plain';

type KitDividerColor = 'default' | 'lightGrey';

export interface IKitDivider extends Omit<DividerProps, AntdDividerTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    noMargin?: boolean;
    color?: KitDividerColor;
}

export interface IStyledAntdDivider {
    $theme: IKitDividerTheme;
    $noMargin: boolean;
    $color: KitDividerColor;
}
