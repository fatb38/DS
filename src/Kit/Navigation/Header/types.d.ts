import {IKitInput} from '@kit/DataEntry/Input/types';
import {KitHTMLAttributes} from '../../../types';
import {ReactElement, ReactNode, MouseEventHandler} from 'react';
import {IKitHeaderTheme} from '@theme/types/components/Navigation/Header';

export interface IHeader extends KitHTMLAttributes<HTMLDivElement> {
    title?: string;
    search?: IKitInput;
    actions?: ReactNode[];
    breadcrumb?: ReactElement;
    onPlusClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IStyledHeaderWrapper {
    $theme: IKitHeaderTheme;
}
