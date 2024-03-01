import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';

export interface IKitInputWrapper extends KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    disabled?: boolean;
    status?: '' | 'warning' | 'error';
    className?: string;
    bordered?: boolean;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
}
