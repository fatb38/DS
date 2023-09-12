import {KitInputProps} from '@kit/DataEntry/';
import {HTMLAttributes} from 'react';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    search?: KitInputProps;
    actions?: ReactNode[];
    breadcrumb?: ReactNode;
    onPlusClick?: React.MouseEventHandler<HTMLButtonElement>;
}
