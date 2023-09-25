import {AvatarProps} from 'antd';
import {GroupProps} from 'antd/lib/avatar';
import {KitHTMLAttributes} from '../../../types';

type AntdAvatarTypesToOmit = '';
type AntdAvatarGroupTypesToOmit = 'maxStyle';

export type KitAvatarColorType = 'default' | 'blueInvert';

export interface KitAvatarProps extends Omit<AvatarProps, AntdAvatarTypesToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    color?: KitAvatarColorType;
}

export interface KitAvatarGroupProps
    extends Omit<GroupProps, AntdAvatarGroupTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {}
