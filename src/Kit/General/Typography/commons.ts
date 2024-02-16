import cn from 'classnames';
import {TitleLevel, TypographyWeight, TypographyWeightKeys} from './types';

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
