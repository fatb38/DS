import {IKitColorsPalette} from '@theme/types/general/colors';
import {ButtonProps} from 'antd';
import {KitHTMLAttributes} from '../../../types';
import {CSSProperties, ForwardRefExoticComponent, RefAttributes} from 'react';
import {IKitButtonThemePropeties} from '@theme/types/components/General/Button';

export type KitButtonType = 'primary' | 'default' | 'text' | 'link' | 'segmented';

export type AntdButtonTypesToOmit = 'type' | 'size' | 'ghost' | 'shape' | 'styles';

export type KitButtonIconSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface IKitButton extends Omit<ButtonProps, AntdButtonTypesToOmit>, KitHTMLAttributes<HTMLDivElement> {
    type?: KitButtonType;
    segmentedActived?: boolean;
    segmentedChecked?: boolean;
    segmentedColor?: keyof IKitColorsPalette['secondary'];
    primaryModal?: boolean;
    iconSize?: KitButtonIconSize;
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
}

export interface IStyledKitButton {
    $theme: IKitButtonThemePropeties;
    $iconSize?: KitButtonIconSize;
}

export type KitButtonCompoundedComponent = ForwardRefExoticComponent<IKitButton & RefAttributes<HTMLElement>>;
