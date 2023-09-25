import {KitColorsPalette} from '@theme/types/general/colors';
import {ButtonProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {CSSProperties} from 'react';

export type KitButtonType = 'primary' | 'default' | 'text' | 'link' | 'segmented';

export type AntdButtonTypesToOmit = 'type' | 'size' | 'ghost' | 'shape' | 'styles';

export type KitButtonIconSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface IKitButtonProps extends Omit<ButtonProps, AntdButtonTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    type?: KitButtonType;
    segmentedActived?: boolean;
    segmentedChecked?: boolean;
    segmentedColor?: keyof KitColorsPalette['secondary'];
    primaryModal?: boolean;
    iconSize?: KitButtonIconSize;
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
}
