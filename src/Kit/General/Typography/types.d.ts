import type {BlockProps, EllipsisConfig} from 'antd/es/typography/Base';
import {AllHTMLAttributes, ForwardedRef, FunctionComponent} from 'react';
import {KitHTMLAttributes} from '../../../types';
import {CSSProperties} from 'react';

export interface IInternalKitTitle extends Base {
    component?: string;
    ref: ForwardedRef;
    style?: CSSProperties;
    className?: string;
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
    color?: string;
    className?: string;
}

export interface IKitText
    extends BlockProps<'span'>,
        Omit<KitHTMLAttributes<HTMLSpanElement>, 'type' | keyof BlockProps<'span'>> {
    ellipsis?: boolean | Omit<EllipsisConfig, 'onExpand'>;
    size?: kitTextSize;
    weight?: kitTextWeight;
    color?: string;
    style?: CSSProperties;
}

export interface IKitLink
    extends BlockProps<'a'>,
        Omit<AllHTMLAttributes<HTMLAnchorElement>, 'type' | 'size' | keyof BlockProps<'a'>> {
    ellipsis?: boolean;
    size?: kitTextSize;
    weight?: kitTextWeight;
    color?: string;
    style?: CSSProperties;
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
