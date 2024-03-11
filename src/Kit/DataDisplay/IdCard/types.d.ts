import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';

export interface IKitIdCard extends KitHTMLAttributes<HTMLDivElement> {
    avatar?: ReactNode;
    size?: 'medium' | 'large';
    title?: string;
    description?: string;
}
