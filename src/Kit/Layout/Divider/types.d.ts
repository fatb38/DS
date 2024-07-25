import {DividerProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type AntdDividerTypesToOmit = 'style' | 'plain';

export interface IKitDivider extends Omit<DividerProps, AntdDividerTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    noMargin?: boolean;
}

export interface IStyledAntdDivider {
    $noMargin: boolean;
}
