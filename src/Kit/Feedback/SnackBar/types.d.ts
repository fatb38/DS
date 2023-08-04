import { HTMLAttributes } from "react";

export interface KitSnackBarProps extends HTMLAttributes<HTMLDivElement> {
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
