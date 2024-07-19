import {TagProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {CSSProperties} from 'react';
import {IKitIdCard} from '../IdCard/types';
import {IKitAvatar} from '../Avatar/types';

export type KitTagType = 'primary' | 'secondary' | 'neutral' | 'error' | 'success';

type AntdTagPropsToOmit = 'color' | 'checkableTag' | 'icon' | 'closable';

type KitHTMLAttributesToOmit = 'color';

type KitIdCardToOmit = 'title' | 'disabled' | 'size' | 'avatarProps';

export interface IKitTag
    extends Omit<TagProps, AntdTagPropsToOmit>,
        Omit<KitHTMLAttributes<HTMLSpanElement>, KitHTMLAttributesToOmit> {
    idCardProps?: Omit<IKitIdCard, KitIdCardToOmit> & {
        avatarProps?: Omit<IKitAvatar, 'size'>;
    };
    type?: KitTagType;
    disabled?: boolean;
    onClose?: TagProps['onClose'];
    onClick?: TagProps['onClick'];
}

export interface IKitTagConfig {
    idCardProps?: Omit<IKitIdCard, KitIdCardToOmit>;
    type?: IKitTag['type'];
    disabled?: IKitTag['disabled'];
}

export interface IKitTagGroup {
    tags: IKitTagConfig[];
    className?: string;
    style?: CSSProperties;
    othersTagType?: KitTagType;
}

export interface IUseTagGroup {
    visibleTags: number;
    remainingTags: number;
}
