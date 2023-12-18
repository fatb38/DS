import {KitHTMLAttributes} from '../../../types';

export interface IKitSnackBar extends KitHTMLAttributes<HTMLDivElement> {
    message: string;
    ctaText?: string;
    ctaOnClick?: (...args) => void;
    closable?: boolean;
}

export interface IKitOpenSnackBar {
    message: string;
    closable?: boolean;
    ctaText?: string;
    ctaOnClick?: (...args) => void;
    duration?: number;
}

export interface IStyledKitSnackBar {
    $showCtaContainer: boolean;
    $showCloseContainer: boolean;
}
