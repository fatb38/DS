import {ReactNode} from 'react';

export interface IKitActionButton {
    key: string;
    label: string;
    icon: ReactNode;
    onClick: (e: unknown) => void;
}
