import {TagProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {ReactNode} from 'react';

export type AntdTagPropsToOmit = 'color' | 'checkableTag' | 'icon' | 'closable';

export type KitTagColor = 'red' | 'green' | 'blue' | 'blueInvert' | 'default';

export interface KitTagProps extends Omit<TagProps, AntdTagPropsToOmit>, KitHTMLAttributes<HTMLSpanElement> {
    color?: KitTagColor;
    children?: ReactNode[] | ReactNode;
    onClose?: TagProps['onClose'];
}
