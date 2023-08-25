import {TagProps} from 'antd';
import {HTMLAttributes} from 'react';

export const AntdTagPropsToOmit = 'color' | 'checkableTag' | 'icon' | 'closable';

export type KitTagColor = 'red' | 'green' | 'blue' | 'blueInvert' | 'default';

export interface KitTagProps extends Omit<TagProps, AntdTagPropsToOmit>, HTMLAttributes<HTMLSpanElement> {
    color?: KitTagColor;
    children?: ReactNode[] | ReactNode;
    onClose?: TagProps['onClose'];
}

export interface KitTagTheme {
    fontSize: string | number;
    fontFamily: string;
    fontWeight: string | number;
    lineHeight: string | number;
    height: string | number;
    placeholderFontSize: string | number;
    placeholderFontWeight: string | number;
    placeholderColor: string;
}
