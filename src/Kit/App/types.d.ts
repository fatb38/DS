import {KitHTMLAttributes} from '../../types';
import {ReactNode} from 'react';

export interface KitAppProps extends KitHTMLAttributes {
    children?: ReactNode;
}
