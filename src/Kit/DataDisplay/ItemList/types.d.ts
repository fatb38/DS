import {ReactNode} from 'react';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';
import {IKitActionButton} from '@kit/DataDisplay/types';
import {KitHTMLAttributes} from '../../../types';

export interface IKitItemList extends KitHTMLAttributes<HTMLDivElement> {
    idCardProps: IKitIdCard;
    draggableHandler?: ReactNode;
    onSelect?: (isChecked: boolean) => void;
    onClick?: () => void;
    actions?: IKitActionButton[];
    content?: ReactNode;
    disabled?: boolean;
}
