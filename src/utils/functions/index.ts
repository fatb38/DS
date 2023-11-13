import convert from 'color-convert';
import colorString from 'color-string';
import {KitColorProp} from './types';
import {IKitColorsPalette} from '@theme/types/general/colors';

export const isValidColor = (themeColors: IKitColorsPalette, color: string): boolean => {
    const isKeyOfSecondaryColors = Object.keys(themeColors.secondary).includes(color);
    const rgbRegex = /^rgb\(\s*(\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3})\s*\)$/i;
    const rgbaRegex = /^rgba\(\s*(\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/i;
    const hexRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/i;
    const hslRegex = /^hsl\(\s*(\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%)\s*\)$/i;
    const hslaRegex = /^hsla\(\s*(\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*,\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/i;

    return (
        isKeyOfSecondaryColors ||
        rgbRegex.test(color) ||
        rgbaRegex.test(color) ||
        hexRegex.test(color) ||
        hslRegex.test(color) ||
        hslaRegex.test(color)
    );
};

export const getColor = (themeColors: IKitColorsPalette, color: KitColorProp, isInvert: boolean = false) => {
    const colorAccent = isInvert ? 100 : 400;

    if (color && Object.keys(themeColors.secondary).includes(color)) {
        return themeColors.secondary[color][`${color}${colorAccent}`];
    }

    return color;
};

export const getLighterColor = (themeColors: IKitColorsPalette, color: KitColorProp, isInvert: boolean = false) => {
    const colorAccent = isInvert ? 400 : 100;

    if (color && Object.keys(themeColors.secondary).includes(color)) {
        return themeColors.secondary[color][`${color}${colorAccent}`];
    }

    return _colorToLightHSL(color);
};

export const getContrastColor = (themeColors: IKitColorsPalette, color: KitColorProp) => {
    if (color === undefined) {
        return themeColors.neutral.black;
    }

    let convertedColor = getColor(themeColors, color);

    if (convertedColor?.startsWith('#') || convertedColor?.startsWith('rgb')) {
        convertedColor = colorString.get.rgb(convertedColor);
    } else if (convertedColor?.startsWith('hsl')) {
        const hsl = colorString.get.hsl(convertedColor);
        convertedColor = convert.hsl.rgb(hsl);
    }

    const yiq = (convertedColor[0] * 299 + convertedColor[1] * 587 + convertedColor[2] * 114) / 1000;

    return yiq < 128 ? themeColors.neutral.white : themeColors.neutral.black;
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
