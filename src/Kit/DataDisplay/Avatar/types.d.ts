import {AvatarProps} from 'antd';
import {GroupProps} from 'antd/es/avatar';
import {KitHTMLAttributes} from '../../../types';
import {FunctionComponent} from 'react';
import {KitColorProp} from '@utils/functions/types';

type AntdAvatarTypesToOmit = '';
type AntdAvatarGroupTypesToOmit = 'maxStyle';

export interface IKitAvatar extends Omit<AvatarProps, AntdAvatarTypesToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    color?: KitColorProp;
    secondaryColorInvert?: boolean;
}

export interface IKitAvatarGroup
    extends Omit<GroupProps, AntdAvatarGroupTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {}

export type KitAvatarCompoundedComponent = FunctionComponent<IKitAvatar> & {
    Group: FunctionComponent<IKitAvatarGroup>;
};
