import {ReactNode} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {MenuProps} from 'antd';
import {IKitTag} from '@kit/DataDisplay/Tag/types';

export interface IKitHeader extends KitHTMLAttributes<HTMLDivElement> {
    menu?: ReactNode;
    logo?: ReactNode;
    langSwitcher?: ReactNode;
    profile?: ReactNode;
    children?: ReactNode;
}

export interface IKitHeaderProfile extends KitHTMLAttributes<HTMLDivElement> {
    logo?: string;
    alt?: string;
    tagProps?: IKitTag;
    userCard?: ReactNode;
    menu?: ReactNode | MenuProps;
}
