import {AvatarProps} from 'antd';
import {GroupProps} from 'antd/lib/avatar';
import {KitHTMLAttributes} from '../../../types';
import {IKitAvatarTheme} from '@theme/types/components/DataDisplay/Avatar';
import {FunctionComponent} from 'react';
import {KitColorProp} from '@utils/functions/types';

type AntdAvatarTypesToOmit = '';
type AntdAvatarGroupTypesToOmit = 'maxStyle';

export interface IKitAvatar extends Omit<AvatarProps, AntdAvatarTypesToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    color?: KitColorProp;
    secondaryColorInvert?: boolean;
}

export interface IStyledKitAvatar {
    $theme: IKitAvatarTheme;
    $iconColor: string;
    $backgroundColor: string;
}

export interface IKitAvatarGroup
    extends Omit<GroupProps, AntdAvatarGroupTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {}

export type KitAvatarCompoundedComponent = FunctionComponent<IKitAvatar> & {
    Group: FunctionComponent<IKitAvatarGroup>;
};
