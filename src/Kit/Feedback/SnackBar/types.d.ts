import {IKitSnackBarTheme} from '@theme/types/components/Feedback/SnackBar';
import {KitHTMLAttributes} from '../../../types';

export interface IKitSnackBar extends KitHTMLAttributes<HTMLDivElement> {
    message: string;
    ctaText?: string;
    ctaOnClick?: Function;
    closable?: boolean;
}

export interface IKitOpenSnackBar {
    message: string;
    closable?: boolean;
    ctaText?: string;
    ctaOnClick?: Function;
    duration?: number;
}

export interface IStyledKitSnackBar {
    $showCtaContainer: boolean;
    $showCloseContainer: boolean;
}
