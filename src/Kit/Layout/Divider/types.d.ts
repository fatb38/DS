import {DividerProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdDividerTypesToOmit = 'style' | 'plain';

type KitDividerColor = 'default' | 'lightGrey';

export interface IKitDivider extends Omit<DividerProps, AntdDividerTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    noMargin?: boolean;
    color?: KitDividerColor;
}

export interface IStyledAntdDivider {
    $noMargin: boolean;
    $color: KitDividerColor;
}
