import {KitInputProps} from '@kit/DataEntry/Input/types';
import {KitHTMLAttributes} from '../../../types';
import {ReactElement, ReactNode} from 'react';

export interface HeaderProps extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    search?: KitInputProps;
    actions?: ReactNode[];
    breadcrumb?: ReactElement;
    onPlusClick?: React.MouseEventHandler<HTMLButtonElement>;
}
