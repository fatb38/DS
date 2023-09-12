import {HTMLAttributes} from 'react';
import {KitTagProps} from '../../DataEntry/Tag/types';

export type cardColor = {
    label: string;
    color: string;
};

export interface KitColorbarProps {
    colors?: cardColor[] | null;
    vertical?: boolean;
    className?: string;
}

export default interface KitCardProps extends HTMLAttributes<HTMLDivElement> {
    vertical?: boolean;
    disabled?: boolean;
    colors?: cardColor[] | null;
    picture?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    extrainfo?: ReactNode;
    tags?: KitTagProps[] | string[];
    actions?: (typeof Button)[];
    onSelectChange?: (e: T) => void;
    onEdit?: () => void;
}
