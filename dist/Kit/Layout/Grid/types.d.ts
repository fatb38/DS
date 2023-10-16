import {ColProps, RowProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

type KitGridJustify = 'start' | 'end' | 'center';

type AntdRowTypesToOmit = 'gutter' | 'justify';

export interface KitRowProps extends Omit<RowProps, AntdRowTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    justify?: KitGridJustify;
}

export interface KitColProps extends ColProps, KitHTMLAttributes<HTMLDivElement> {}
