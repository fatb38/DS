import {ColProps, RowProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type KitGridJustify = 'start' | 'end' | 'center';

type AntdRowTypesToOmit = 'gutter' | 'justify';

export interface IKitRow extends Omit<RowProps, AntdRowTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    justify?: KitGridJustify;
}

export interface IKitCol extends ColProps, KitHTMLAttributes<HTMLDivElement> {}
