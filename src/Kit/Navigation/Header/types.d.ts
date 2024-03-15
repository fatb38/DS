import {ReactNode} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {MenuProps} from 'antd';

export interface IKitHeader extends KitHTMLAttributes<HTMLDivElement> {
    menu?: ReactNode;
    logo?: ReactNode;
    langSwitcher?: ReactNode;
    profile?: ReactNode;
    children?: ReactNode;
}

export interface IKitHeaderProfile extends KitHTMLAttributes<HTMLDivElement> {
    logo?: string;
    tag?: ReactNode;
    userCard?: ReactNode;
    menu?: ReactNode | MenuProps;
}
