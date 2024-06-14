import {ReactNode} from 'react';

export interface IKitActionButton {
    key: string;
    label: string;
    icon: ReactNode;
    disabled?: boolean;
    onClick: (e: unknown) => void;
}
