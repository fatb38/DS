import {CSSProperties, ReactNode} from 'react';

export interface IKitRedirectCard {
    title: string;
    className?: string;
    style?: CSSProperties;
    description?: string;
    icon?: ReactNode;
    imageAlt?: string;
    imageSrc?: string;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}
