import {IKitInput} from '@kit/DataEntry/Input/types';
import {KitHTMLAttributes} from '../../../types';
import {ReactElement, ReactNode} from 'react';

export interface HeaderProps extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    search?: IKitInput;
    actions?: ReactNode[];
    breadcrumb?: ReactElement;
    onPlusClick?: React.MouseEventHandler<HTMLButtonElement>;
}
