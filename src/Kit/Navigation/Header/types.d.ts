import {ReactNode} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {MenuProps} from 'antd';
import {IKitTag} from '@kit/DataDisplay/Tag/types';
import {IKitIdCard} from '@kit/DataDisplay/IdCard/types';

export interface IKitHeader extends KitHTMLAttributes<HTMLDivElement> {
    menu?: ReactNode;
    logo?: ReactNode;
    langSwitcher?: ReactNode;
    profile?: ReactNode;
    children?: ReactNode;
}

export type KitHeaderIdCard = IKitIdCard & {onClick?: () => void};

export interface IKitHeaderProfile extends KitHTMLAttributes<HTMLDivElement> {
    logo?: string;
    alt?: string;
    tagProps?: IKitTag;
    profileCardProps?: IKitIdCard;
    profileMenuCardProps?: KitHeaderIdCard;
    menu?: ReactNode | MenuProps;
    complement?: ReactNode;
}
