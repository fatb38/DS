import type {PaginationProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitPaginationTheme} from '@theme/types/components/Navigation/Pagination';

export interface IKitPagination extends PaginationProps, Omit<KitHTMLAttributes<HTMLDivElement>, 'role'> {
    bordered?: boolean;
}

export interface IStyledAntdPagination {
    $theme: IKitPaginationTheme;
}
