import {IKitBorder, IKitBorderCssTokens} from '@theme/types/general/border';

export const border: IKitBorder = {
    radius: {
        square: 0,
        xxs: 2,
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
        xxl: 40,
        pills: 1000
    },
    width: 0
};

const base = '--general-border';

export const borderCssTokens: IKitBorderCssTokens = {
    radius: {
        square: `${base}-radius-square`,
        xxs: `${base}-radius-xxs`,
        xs: `${base}-radius-xs`,
        s: `${base}-radius-s`,
        m: `${base}-radius-m`,
        l: `${base}-radius-l`,
        xl: `${base}-radius-xl`,
        xxl: `${base}-radius-xxl`,
        pills: `${base}-radius-pills`
    },
    width: `${base}-width`
};
