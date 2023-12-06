import {IKitSpacing, IKitSpacingCssTokens} from '@theme/types/general/spacing';

export const spacing: IKitSpacing = {
    none: 0,
    xxs: 4,
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 40,
    xxl: 48,
    huge: 56,
    veryHuge: 64
};

const base = '--general-spacing';

export const spacingCssTokens: IKitSpacingCssTokens = {
    none: `${base}-none`,
    xxs: `${base}-xxs`,
    xs: `${base}-xs`,
    s: `${base}-s`,
    m: `${base}-m`,
    l: `${base}-l`,
    xl: `${base}-xl`,
    xxl: `${base}-xxl`,
    huge: `${base}-huge`,
    veryHuge: `${base}-veryHuge`
};
