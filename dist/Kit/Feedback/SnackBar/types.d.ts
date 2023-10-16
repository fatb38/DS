import {KitHTMLAttributes} from '../../../types';

export interface KitSnackBarProps extends KitHTMLAttributes<HTMLDivElement> {
    message: string;
    ctaText?: string;
    ctaOnClick?: Function;
    closable?: boolean;
}

export interface KitOpenSnackBarProps {
    message: string;
    closable?: boolean;
    ctaText?: string;
    ctaOnClick?: Function;
    duration?: number;
}
