import {HTMLAttributes} from 'react';

export interface KitItemListProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    picture?: ReactNode;
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    tagNumber?: number;
    onRafterClick?: Function;
    isDisabled?: boolean;
    onClick?: Function;
}
