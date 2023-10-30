import convert from 'color-convert';
import colorString from 'color-string';
import {IKitTheme} from '@theme/types';
import {KitColorProp} from './types';

export const getColor = (theme: IKitTheme, color: KitColorProp, isInvert: boolean = false) => {
    const colorAccent = isInvert ? 100 : 400;

    if (color && Object.keys(theme.general.colors.secondary).includes(color)) {
        return theme.general.colors.secondary[color][`${color}${colorAccent}`];
    }

    return color;
};

export const getLighterColor = (theme: IKitTheme, color: KitColorProp, isInvert: boolean = false) => {
    const colorAccent = isInvert ? 400 : 100;

    if (color && Object.keys(theme.general.colors.secondary).includes(color)) {
        return theme.general.colors.secondary[color][`${color}${colorAccent}`];
    }

    return _colorToLightHSL(color);
};

export const getContrastColor = (theme: IKitTheme, color: KitColorProp) => {
    if (color === undefined) {
        return theme.general.colors.neutral.black;
    }

    let convertedColor = getColor(theme, color);

    if (convertedColor?.startsWith('#') || convertedColor?.startsWith('rgb')) {
        convertedColor = colorString.get.rgb(convertedColor);
    } else if (convertedColor?.startsWith('hsl')) {
        const hsl = colorString.get.hsl(convertedColor);
        convertedColor = convert.hsl.rgb(hsl);
    }

    const yiq = (convertedColor[0] * 299 + convertedColor[1] * 587 + convertedColor[2] * 114) / 1000;

    return yiq < 128 ? theme.general.colors.neutral.white : theme.general.colors.neutral.black;
};

const _colorToLightHSL = (color, lightness = 95): string | null => {
    if (color?.startsWith('#')) {
        const rgbColor = convert.hex.rgb(color);
        const hslColor = convert.rgb.hsl(rgbColor);
        return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${lightness}%)`;
    } else if (color?.startsWith('rgb')) {
        const rgbColor = color.match(/\d+/g).map(Number);
        const hslColor = convert.rgb.hsl(rgbColor);
        return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${lightness}%)`;
    } else if (color?.startsWith('hsl')) {
        const hslColor = color.match(/\d+/g).map(Number);
        return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${lightness}%)`;
    }

    return null;
};
