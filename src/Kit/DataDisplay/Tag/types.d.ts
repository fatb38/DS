import {TagProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {CSSProperties, ReactNode} from 'react';
import {KitColorProp} from '@utils/functions/types';

export type AntdTagPropsToOmit = 'color' | 'checkableTag' | 'icon' | 'closable';

export interface IKitTag extends Omit<TagProps, AntdTagPropsToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    color?: KitColorProp;
    secondaryColorInvert?: boolean;
    children?: ReactNode[] | ReactNode;
    onClose?: TagProps['onClose'];
}

export interface IKitTagConfig {
    wording: string;
    color?: KitColorProp;
}

export interface IKitTagGroup {
    tags: IKitTagConfig[];
    className?: string;
    style?: CSSProperties;
}

export interface IUseTagGroup {
    visibleTags: number;
    remainingTags: number;
}
