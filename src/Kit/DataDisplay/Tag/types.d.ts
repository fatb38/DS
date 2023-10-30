import {TagProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';
import {IKitTagTheme} from '@theme/types/components/DataDisplay/Tag';
import {KitColorProp} from '@utils/functions/types';

export type AntdTagPropsToOmit = 'color' | 'checkableTag' | 'icon' | 'closable';

export interface IKitTag extends Omit<TagProps, AntdTagPropsToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    color?: KitColorProp;
    secondaryColorInvert?: boolean;
    children?: ReactNode[] | ReactNode;
    onClose?: TagProps['onClose'];
}

export interface IStyledAntdTag {
    $theme: IKitTagTheme;
    $color?: string;
    $backgroundColor?: string;
}
