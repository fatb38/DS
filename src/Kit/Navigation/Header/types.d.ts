import {IKitInput} from '@kit/DataEntry/Input/types';
import {KitHTMLAttributes} from '../../../types';
import {ReactElement, ReactNode, MouseEventHandler} from 'react';

export interface IKitHeader extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    search?: IKitInput;
    actions?: ReactNode[];
    breadcrumb?: ReactElement;
    onPlusClick?: MouseEventHandler<HTMLButtonElement>;
}
