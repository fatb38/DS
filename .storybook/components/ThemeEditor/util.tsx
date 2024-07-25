import {IKitTheme} from '../../../src/theme/types';
import {JSONValue} from './types';

export const getThemeData = (theme: Partial<IKitTheme>, path: string): JSONValue | undefined => {
    const parts = path.split('.');
    const lastElement = parts.slice(-1).toString();
    let val = theme as unknown as JSONValue;
    let currentPart;
    while ((currentPart = parts.shift()) && val) {
        val = val[currentPart] ?? null;
    }
    return {
        [lastElement]: val
    };
};

export const getValue = (theme: JSONValue, path: string): JSONValue | undefined => {
    const parts = path.split('.');
    let val = theme;
    while (parts.length > 0 && val) {
        let index = parts.shift();
        val = (index && val[index]) ?? undefined;
    }
    return val;
};
