import {TagProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';
import {IKitTagTheme} from '@theme/types/components/DataEntry/Tag';

export type AntdTagPropsToOmit = 'color' | 'checkableTag' | 'icon' | 'closable';

export type KitTagColor = 'red' | 'green' | 'blue' | 'blueInvert' | 'default';

export interface IKitTag extends Omit<TagProps, AntdTagPropsToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    color?: KitTagColor;
    children?: ReactNode[] | ReactNode;
    onClose?: TagProps['onClose'];
}

export interface IStyledAntdTag {
    $theme: IKitTagTheme;
    $color: KitTagColor;
}
