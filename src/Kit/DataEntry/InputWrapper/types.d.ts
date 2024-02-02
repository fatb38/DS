import {KitHTMLAttributes} from '../../../types';

export interface IKitInputWrapper extends KitHTMLAttributes<HTMLDivElement> {
    label?: string;
    helper?: string;
    disabled?: boolean;
    status?: '' | 'warning' | 'error';
    className?: string;
    bordered?: boolean;
}
