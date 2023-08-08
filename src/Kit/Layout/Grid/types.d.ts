import {ColProps, RowProps} from 'antd';
import {HTMLAttributes} from 'react';

type KitGridJustify = 'start' | 'end' | 'center';

type AntdRowTypesToOmit = 'gutter' | 'justify';

export interface KitRowProps extends Omit<RowProps, AntdRowTypesToOmit>, HTMLAttributes<HTMLDivElement> {
    justify?: KitGridJustify;
}

export interface KitColProps extends ColProps, HTMLAttributes<HTMLDivElement> {}
