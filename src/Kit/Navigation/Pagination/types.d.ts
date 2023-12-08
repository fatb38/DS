import type {PaginationProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';

export interface IKitPagination extends PaginationProps, Omit<KitHTMLAttributes<HTMLDivElement>, 'role'> {
    bordered?: boolean;
}
