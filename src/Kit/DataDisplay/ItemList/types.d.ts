import {ReactNode} from 'react';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';
import {IKitActionButton} from '@kit/DataDisplay/types';
import {KitHTMLAttributes} from '../../../types';

export interface IKitItemList extends KitHTMLAttributes<HTMLDivElement> {
    idCardProps?: IKitIdCard;
    idCardSubstitute?: ReactNode;
    draggableHandler?: ReactNode;
    onSelect?: (isChecked: boolean) => void;
    checkboxAriaLabel?: string;
    onClick?: () => void;
    actions?: IKitActionButton[];
    content?: ReactNode;
    disabled?: boolean;
}
