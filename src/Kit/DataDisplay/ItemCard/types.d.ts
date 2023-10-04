import {KitHTMLAttributes} from '../../../types';
import {KitTagProps} from '../../DataEntry/Tag/types';
import {ReactNode, MouseEvent} from 'react';
import {CheckboxChangeEvent} from 'antd/lib/checkbox';
import {IKitItemCardTheme} from '@theme/types/components/DataDisplay/ItemCard';

export type CardColor = {
    label: string;
    color: string;
};

export interface IKitColorbar {
    colors?: CardColor[] | null;
    vertical?: boolean;
    className?: string;
}

export interface IStyledKitColorbar {
    $theme: IKitItemCardTheme;
    $column: boolean;
}

//TODO change title wording and delete omit<title>
export default interface IKitItemCard extends Omit<KitHTMLAttributes<HTMLDivElement>, 'title'> {
    vertical?: boolean;
    disabled?: boolean;
    colors?: CardColor[] | null;
    fullWidthAvatar?: boolean;
    picture?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    extrainfo?: ReactNode;
    tags?: KitTagProps[] | string[];
    actions?: ReactNode[];
    onSelectChange?: (e: CheckboxChangeEvent) => void;
    onEdit?: (e: MouseEvent<HTMLElement>) => void;
}

export interface IStyledKitItemCard {
    $theme: IKitItemCardTheme;
    $disabled: boolean;
    $vertical?: boolean;
}
