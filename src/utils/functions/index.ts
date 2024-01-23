import convert from 'color-convert';
import colorString from 'color-string';
import {KitColorProp} from './types';
import {colorsPalette} from '@theme/aristid/general/colors';
import {IJSONObject} from '.storybook/components/ThemeEditor/types';
import {HSL, RGB} from 'color-convert/conversions';

type CssVariablesList = Record<string, string>;

export const toCssVariables = (tokens: IJSONObject, prefix = '-', items = {}): CssVariablesList => {
    if (!tokens) {
        return items;
    }

    Object.keys(tokens).forEach(name => {
        const variableName = `${prefix}-${name}`;
        if (typeof tokens[name] === 'object') {
            items = toCssVariables(tokens[name] as IJSONObject, variableName, items);
        } else {
            items[variableName] = tokens[name];
        }
    });
    return items;
};

export const isSecondaryColor = (color: string): boolean => {
    return Object.keys(colorsPalette.secondary).includes(color);
};

export const isValidColor = (color: string): boolean => {
    const rgbRegex = /^rgb\(\s*(\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3})\s*\)$/i;
    const rgbaRegex = /^rgba\(\s*(\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/i;
    const hexRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/i;
    const hslRegex = /^hsl\(\s*(\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%)\s*\)$/i;
    const hslaRegex = /^hsla\(\s*(\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*,\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/i;

    return (
        isSecondaryColor(color) ||
        rgbRegex.test(color) ||
        rgbaRegex.test(color) ||
        hexRegex.test(color) ||
        hslRegex.test(color) ||
        hslaRegex.test(color)
    );
};

export const getColor = (color: KitColorProp, isInvert: boolean = false): string => {
    const colorAccent = isInvert ? 100 : 400;

    if (color && isSecondaryColor(color)) {
        return 'var(--general-colors-secondary-' + color + '-' + color + colorAccent + ')';
    }

    return color as string;
};

export const getLighterColor = (color: KitColorProp, isInvert: boolean = false) => {
    const colorAccent = isInvert ? 400 : 100;

    if (color && isSecondaryColor(color)) {
        return 'var(--general-colors-secondary-' + color + '-' + color + colorAccent + ')';
    }

    return _colorToLightHSL(color);
};

export const getContrastColor = (color: KitColorProp) => {
    if (color === undefined) {
        return colorsPalette.neutral.black;
    }

    const colorTest = getColor(color);

    if (colorTest?.startsWith('#') || colorTest?.startsWith('rgb')) {
        const convertedColor = colorString.get.rgb(colorTest);
        const yiq = (convertedColor[0] * 299 + convertedColor[1] * 587 + convertedColor[2] * 114) / 1000;

        return yiq < 128 ? colorsPalette.neutral.white : colorsPalette.neutral.black;
    } else if (colorTest?.startsWith('hsl')) {
        const hsl = colorString.get.hsl(colorTest);
        const convertedColor = convert.hsl.rgb(hsl as unknown as HSL);
        const yiq = (convertedColor[0] * 299 + convertedColor[1] * 587 + convertedColor[2] * 114) / 1000;

        return yiq < 128 ? colorsPalette.neutral.white : colorsPalette.neutral.black;
    }
};

const _colorToLightHSL = (color: KitColorProp, lightness = 95): string | null => {
    if (color?.startsWith('#')) {
        const rgbColor = convert.hex.rgb(color);
        const hslColor = convert.rgb.hsl(rgbColor);
        return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${lightness}%)`;
    } else if (color?.startsWith('rgb')) {
        const rgbColor = color.match(/\d+/g)?.map(Number);
        if (rgbColor) {
            const hslColor = convert.rgb.hsl(rgbColor as RGB);
            return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${lightness}%)`;
        }
    } else if (color?.startsWith('hsl') && color.match(/\d+/g)) {
        const hslColor = color.match(/\d+/g)?.map(Number);
        if (hslColor) {
            return `hsl(${hslColor[0]}, ${hslColor[1]}%, ${lightness}%)`;
        }
    }

    return null;
};

/**
A function that returns a universally unique identifier (uuid).  
example: 1b83fd69-abe7-468c-bea1-306a8aa1c81d
@returns `string` : 32 character uuid (see example)
*/
export const uuid = (): string => {
    const hashTable = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const uuid: string[] = [];
    for (let i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            uuid[i] = '-';
        } else {
            uuid[i] = hashTable[Math.ceil(Math.random() * hashTable.length - 1)];
        }
    }
    return uuid.join('');
};
