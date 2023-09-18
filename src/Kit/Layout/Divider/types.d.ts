import {DividerProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export type AntdDividerTypesToOmit = 'style' | 'plain';

export type KitDividerColor = 'default' | 'lightGrey';

export interface KitDividerProps extends Omit<DividerProps, AntdDividerTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    noMargin?: boolean;
    color?: KitDividerColor;
}
