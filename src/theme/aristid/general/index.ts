import {IKitThemeGeneral} from '@theme/types';
import {colorsPalette} from './colors';
import {typography} from './typography';
import {border} from './border';
import {spacing} from './spacing';
import {utilities} from './utilities';
import {grid} from './grid';

export const KitAristidThemeGeneral: IKitThemeGeneral = {
    colors: colorsPalette,
    border: border,
    spacing: spacing,
    breakpoints: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
    grid: grid,
    typography: typography,
    utilities: utilities
};
