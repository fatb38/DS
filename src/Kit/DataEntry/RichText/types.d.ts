import {KitHTMLAttributes} from '../../../types';
import {ReactNode, ReactElement, MouseEvent} from 'react';

export type KitRichTextStatus = 'warning' | 'error';

export interface KitRichTextProps extends KitHTMLAttributes<HTMLSpanElement | HTMLInputElement> {
    label?: string;
    helper?: string;
    htmlFor?: string;
    wrapperClassName?: string;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    status?: KitRichTextStatus;
    showCount?: boolean;
    maxLength?: number;
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
}
