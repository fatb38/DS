import {KitHTMLAttributes} from '../../../types';
import {ReactNode, ReactElement, MouseEvent} from 'react';

export interface IKitInputWrapper extends KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    disabled?: boolean;
    status?: '' | 'warning' | 'error';
    className?: string;
    bordered?: boolean;
    hoverable?: boolean;
    required?: boolean;
    infoIcon?: ReactNode;
    actions?: ReactElement[];
    onInfoClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
    onFocus?: (e: FocusEvent<HTMLDivElement>) => void;
    onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
}
