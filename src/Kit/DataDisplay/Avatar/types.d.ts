import {AvatarProps} from 'antd';
import {GroupProps} from 'antd/lib/avatar';
import {KitHTMLAttributes} from '../../../types';
import {IKitAvatarTheme} from '@theme/types/components/DataDisplay/Avatar';
import {FunctionComponent} from 'react';

type AntdAvatarTypesToOmit = '';
type AntdAvatarGroupTypesToOmit = 'maxStyle';

export type KitAvatarColorType = 'default' | 'blueInvert' | string;

export interface IKitAvatar extends Omit<AvatarProps, AntdAvatarTypesToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    color?: KitAvatarColorType;
}

export interface IStyledKitAvatar {
    $theme: IKitAvatarTheme;
    $color: KitAvatarColorType;
}

export interface IKitAvatarGroup
    extends Omit<GroupProps, AntdAvatarGroupTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {}

export type KitAvatarCompoundedComponent = FunctionComponent<IKitAvatar> & {
    Group: FunctionComponent<IKitAvatarGroup>;
};
