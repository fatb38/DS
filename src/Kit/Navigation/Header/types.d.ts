import {KitInputProps} from '@kit/DataEntry/';
import {KitHTMLAttributes} from '../../../types';

export interface HeaderProps extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    search?: KitInputProps;
    actions?: ReactNode[];
    breadcrumb?: ReactNode;
    onPlusClick?: React.MouseEventHandler<HTMLButtonElement>;
}
