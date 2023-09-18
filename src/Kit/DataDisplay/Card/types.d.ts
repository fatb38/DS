import {KitHTMLAttributes} from '../../../types';
import {KitTagProps} from '../../DataEntry/Tag/types';
import {ReactNode} from 'react';
import {CheckboxChangeEvent} from 'antd/es/checkbox';

export type cardColor = {
    label: string;
    color: string;
};

export interface KitColorbarProps {
    colors?: cardColor[] | null;
    vertical?: boolean;
    className?: string;
}

//TODO change title wording and delete omit<title>
export default interface KitCardProps extends Omit<KitHTMLAttributes<HTMLDivElement>, 'title'> {
    vertical?: boolean;
    disabled?: boolean;
    colors?: cardColor[] | null;
    picture?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    extrainfo?: ReactNode;
    tags?: KitTagProps[] | string[];
    actions?: ReactNode[];
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    onEdit?: () => void;
}
