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

type kitTextSize = 'fontSize1' | 'fontSize2' | 'fontSize3' | 'fontSize4' | 'fontSize5' | 'fontSize6' | 'fontSize7';

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
    extends Omit<BlockProps<'span'>, 'type'>,
        Omit<KitHTMLAttributes<HTMLSpanElement>, keyof BlockProps<'span'>> {
    ellipsis?: boolean | Omit<EllipsisConfig, 'onExpand'>;
    size?: kitTextSize;
    weight?: kitTextWeight;
    color?: string;
    style?: CSSProperties;
}

export interface IKitLink
    extends Omit<BlockProps<'a'>, 'type' | 'size'>,
        Omit<AllHTMLAttributes<HTMLAnchorElement>, keyof BlockProps<'a'>> {
    ellipsis?: boolean;
    size?: kitTextSize;
    weight?: kitTextWeight;
    color?: string;
    style?: CSSProperties;
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
