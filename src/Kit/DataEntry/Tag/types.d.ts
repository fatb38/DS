import {TagProps} from 'antd';
import {HTMLAttributes} from 'react';

export const AntdTagPropsToOmit = 'color' | 'checkableTag' | 'icon' | 'closable';

export type KitTagColor = 'red' | 'green' | 'blue' | 'blueInvert' | 'default';

export interface KitTagProps extends Omit<TagProps, AntdTagPropsToOmit>, HTMLAttributes<HTMLSpanElement> {
    color?: KitTagColor;
    children?: ReactNode[] | ReactNode;
    onClose?: TagProps['onClose'];
}
