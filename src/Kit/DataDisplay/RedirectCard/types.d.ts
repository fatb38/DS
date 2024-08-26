import {CSSProperties, ReactNode} from 'react';
import {IKitActionButton} from '../types';

export interface IKitRedirectCard {
    title: string;
    className?: string;
    style?: CSSProperties;
    description?: string;
    icon?: ReactNode;
    coverAlt?: string;
    coverSrc?: string;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    actions?:
        | [IKitActionButton]
        | [IKitActionButton, IKitActionButton]
        | [IKitActionButton, IKitActionButton, IKitActionButton];
}

export type IKitRedirectCardActions = {
    disabled: IKitRedirectCard['disabled'];
    actions: IKitRedirectCard['actions'];
};
