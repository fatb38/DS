import {KitHTMLAttributes} from '../../../types';
import {CSSProperties, ForwardRefExoticComponent, RefAttributes} from 'react';
import {IKitButtonPropetiesCssTokens} from '@theme/types/components/General/Button';

export type KitButtonType = 'primary' | 'secondary' | 'tertiary' | 'text' | 'segmented' | 'link' | 'redirect';

type KitButtonHtmlType = 'submit' | 'button' | 'reset';

export type KitButtonIconSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type loadingType =
    | boolean
    | {
          delay: number;
      };

export type loadingConfig = {
    loading: boolean;
    delay: number;
};

export interface IKitButton extends KitHTMLAttributes<HTMLDivElement> {
    type?: KitButtonType;
    htmlType?: KitButtonHtmlType;
    href?: string;
    target?: string;
    form?: string | undefined;
    iconSize?: KitButtonIconSize;
    disableSecureClick?: boolean;
    disabled?: boolean;
    danger?: boolean;
    loading?: loadingType;
    icon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    checked?: boolean;
    dangerModal?: boolean;
    block?: boolean;
    active?: boolean;
    [key: `data-${string}`]: string;
    styles?: {
        icon: CSSProperties;
    };
    onClick?: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface IStyledKitButton {
    $buttonCssTokens: {
        custom: IKitButtonPropetiesCssTokens;
        default: IKitButtonPropetiesCssTokens;
    };
    $iconSize?: KitButtonIconSize;
}

export type KitButtonCompoundedComponent = ForwardRefExoticComponent<IKitButton & RefAttributes<HTMLElement>>;
