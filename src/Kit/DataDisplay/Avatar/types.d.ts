import {AvatarProps} from 'antd';
import {GroupProps} from 'antd/es/avatar';
import {KitHTMLAttributes} from '../../../types';
import {FunctionComponent} from 'react';
import {KitColorProp} from '@utils/functions/types';

type AntdAvatarTypesToOmit = '';
type AntdAvatarGroupTypesToOmit = 'maxStyle';

type KitImageFit = 'cover' | 'contain' | 'fill';

export interface IKitAvatar extends Omit<AvatarProps, AntdAvatarTypesToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    label?: string;
    initialsMaxChars?: number;
    color?: KitColorProp;
    secondaryColorInvert?: boolean;
    imageFit?: KitImageFit;
    disabled?: boolean;
}

export interface IKitAvatarGroup
    extends Omit<GroupProps, AntdAvatarGroupTypesToOmit>,
        KitHTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
}

export type KitAvatarCompoundedComponent = FunctionComponent<IKitAvatar> & {
    Group: FunctionComponent<IKitAvatarGroup>;
};
