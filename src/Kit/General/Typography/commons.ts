import cn from 'classnames';
import {TitleLevel, TypographyWeight, TypographyWeightKeys} from './types';
import {CSSProperties} from 'react';
import {getColor, isValidColor} from '@utils/functions';

export const getWeightClassname = ({
    className = '',
    weight = 'regular'
}: {
    className?: string;
    weight?: TypographyWeightKeys;
}) =>
    cn(className, {
        'ant-typography-regular': weight === TYPOGRAPHY_WEIGHT['regular'],
        'ant-typography-medium': weight === TYPOGRAPHY_WEIGHT['medium'],
        'ant-typography-bold': weight === TYPOGRAPHY_WEIGHT['bold']
    });

export const TYPOGRAPHY_WEIGHT: TypographyWeight = {
    regular: 'regular',
    medium: 'medium',
    bold: 'bold'
};

export const TITLE_LEVEL: TitleLevel = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4'
};

const isTypographyValidExtraColor = (color: string) => ['primary', 'grey', 'black', 'black60', 'white'].includes(color);

export const getCustomColor = (color: string | undefined | null): CSSProperties | null => {
    if (!color || !(isValidColor(color) || isTypographyValidExtraColor(color))) {
        return null;
    }

    let colorValue = '';
    switch (color) {
        case 'black':
            colorValue = 'var(--general-colors-neutral-black)';
            break;
        case 'white':
            colorValue = 'var(--general-colors-neutral-white)';
            break;
        default:
            colorValue = getColor(color);
            break;
    }

    return {
        ['--kit-typography-color']: colorValue
    } as CSSProperties;
};
