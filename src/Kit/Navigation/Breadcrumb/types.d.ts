import {BreadcrumbProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ItemType} from 'antd/es/breadcrumb/Breadcrumb';
import {MenuItemType} from 'antd/es/menu/hooks/useItems';

export interface IKitBreadcrumbMenuItem extends MenuItemType {}
export interface IKitBreadcrumbItem extends ItemType {
    icon?: React.ReactNode;
}
export interface IKitBreadcrumb extends Omit<BreadcrumbProps, 'items'>, KitHTMLAttributes<HTMLDivElement> {
    items?: IKitBreadcrumbItem[];
}
