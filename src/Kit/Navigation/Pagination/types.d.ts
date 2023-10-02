import type {PaginationProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export interface KitPaginationProps extends PaginationProps, Omit<KitHTMLAttributes<HTMLDivElement>, 'role'> {
    bordered?: boolean;
}

export interface PaginationthemeProps {
    bordered: {
        borderColor: string;
        hoverBorderColor: string;
        backgroundColor: string;
    };
    fontSize: number;
    miniActiveBackground: string;
    disabledActiveTextColor: string;
    hoverColor: string;
}
