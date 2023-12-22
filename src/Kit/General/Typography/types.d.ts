import type {BlockProps, EllipsisConfig} from 'antd/lib/typography/Base';
import {AllHTMLAttributes, ForwardedRef, FunctionComponent} from 'react';
import {KitHTMLAttributes} from '../../../types';

export interface IInternalKitTitle extends Base {
    component?: string;
    ref: ForwardedRef;
}

type antdTitleTypesToOmit = 'type' | 'editable' | 'code' | 'italic' | 'keyboard' | 'mark' | 'underline';

type kitTextSize = 'small' | 'medium' | 'large';

type kitTextWeight = 'bold' | 'medium' | 'regular';

type TitleLevelKeys = 'h1' | 'h2' | 'h3' | 'h4';

export interface IKitTitle
    extends Omit<BlockProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>, 'strong'>,
        Omit<
            KitHTMLAttributes<HTMLHeadElement>,
            antdTitleTypesToOmit | keyof BlockProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
        > {
    level?: TitleLevelKeys;
    regular?: boolean;
}

export interface IKitText
    extends BlockProps<'span'>,
        Omit<KitHTMLAttributes<HTMLSpanElement>, 'type' | keyof BlockProps<'span'>> {
    ellipsis?: boolean | Omit<EllipsisConfig, 'onExpand'>;
    size?: kitTextSize;
    weight?: kitTextWeight;
}

export interface IKitLink
    extends BlockProps<'a'>,
        Omit<AllHTMLAttributes<HTMLAnchorElement>, 'type' | 'size' | keyof BlockProps<'a'>> {
    ellipsis?: boolean;
    size?: kitTextSize;
    weight?: kitTextWeight;
}

export interface IStyledKitLink {
    size: kitTextSize;
}

export interface IStyledKitParagraph {
    size: kitTextSize;
}

export interface IStyledKitText {
    size: kitTextSize;
}

export type TitleLevel = Record<TitleLevelKeys, string>;

export type TypographyWeightKeys = 'medium' | 'regular' | 'bold';

export type TypographyWeight = Record<TypographyWeightKeys, string>;

export type TypographyCompoundedComponent = {
    Title: FunctionComponent<IKitTitle>;
    Text: FunctionComponent<IKitText>;
    Link: FunctionComponent<IKitLink>;
    Paragraph: FunctionComponent<IKitText>;
    displayName?: string;
};
