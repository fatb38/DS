import type {BlockProps, EllipsisConfig} from 'antd/lib/typography/Base';
import {TITLE_ELE_LIST} from './commons';
import {AllHTMLAttributes} from 'react';
import {KitHTMLAttributes} from '../../../types';

type antdTitleTypesToOmit = 'type' | 'editable' | 'code' | 'italic' | 'keyboard' | 'mark' | 'underline';

export interface KitTitleProps
    extends Omit<BlockProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>, 'strong'>,
        Omit<
            KitHTMLAttributes<HTMLHeadElement>,
            antdTitleTypesToOmit | keyof BlockProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
        > {
    level?: (typeof TITLE_ELE_LIST)[number];
    regular?: boolean;
}

type kitTextSize = 'small' | 'medium' | 'large';
type kitTextWeight = 'bold' | 'medium' | 'regular';

type antdTextTypesToOmit = 'code' | 'mark' | 'keyboard' | 'delete' | 'strong' | 'italic';

export interface KitTextProps
    extends BlockProps<'span'>,
        Omit<KitHTMLAttributes<HTMLSpanElement>, 'type' | keyof BlockProps<'span'>> {
    ellipsis?: boolean | Omit<EllipsisConfig, 'onExpand'>;
    size?: kitTextSize;
    weight?: kitTextWeight;
}

export interface KitLinkProps
    extends BlockProps<'a'>,
        Omit<AllHTMLAttributes<HTMLAnchorElement>, 'type' | 'size' | keyof BlockProps<'a'>> {
    ellipsis?: boolean;
    size?: kitTextSize;
    weight?: kitTextWeight;
}

export interface KitBaseProps {
    component: keyof JSX.IntrinsicElements;
}
