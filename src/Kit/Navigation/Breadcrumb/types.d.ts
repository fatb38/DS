import {BreadcrumbProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {IKitBreadcrumbTheme} from '@theme/types/components/Navigation/Breadcrumb';

export interface IKitBreadcrumb extends BreadcrumbProps, KitHTMLAttributes<HTMLDivElement> {}

export interface IStyledBreadcrumb {
    $theme: IKitBreadcrumbTheme;
}
