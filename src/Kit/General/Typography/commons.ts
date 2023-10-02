import cn from 'classnames';
import {TitleLevel} from './types';

export const sizeTofontSize = {
    large: 5,
    medium: 6,
    small: 7
};

export const getWeightClassname = ({className, weight}) =>
    cn(className, {
        'ant-typography-regular': weight === 'regular',
        'ant-typography-medium': weight === 'medium',
        'ant-typography-bold': weight === 'bold'
    });

export const TITLE_LEVEL: TitleLevel = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4'
};
