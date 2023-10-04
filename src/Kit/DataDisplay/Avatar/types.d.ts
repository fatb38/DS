import {AvatarProps} from 'antd';
import {GroupProps} from 'antd/lib/avatar';
import {KitHTMLAttributes} from '../../../types';

type AntdAvatarTypesToOmit = '';
type AntdAvatarGroupTypesToOmit = 'maxStyle';

export type KitAvatarColorType = 'default' | 'blueInvert' | string;

export interface IKitAvatar extends Omit<AvatarProps, AntdAvatarTypesToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    color?: KitAvatarColorType;
}

export interface IKitAvatarGroup
    extends Omit<GroupProps, AntdAvatarGroupTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {}
