import {IKitTypography, IKitTypographyCssTokens} from '@theme/types/general/typography';

export const typography: IKitTypography = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    defaultFontWeight: 500,
    mediumfontWeight: 500,
    regularFontWeight: 400,
    boldFontWeight: 700,
    fontSize1: 30,
    fontSize2: 24,
    fontSize3: 18,
    fontSize4: 16,
    fontSize5: 14,
    fontSize6: 13,
    fontSize7: 12,
    lineHeight1: 1.2,
    lineHeight2: 1.2,
    lineHeight3: 1.2,
    lineHeight4: 1.2,
    lineHeight5: 1.2,
    lineHeight6: 1.2,
    lineHeight7: 1.2
};

const base = '--general-typography';

export const typographyCssTokens: IKitTypographyCssTokens = {
    fontFamily: `${base}-fontFamily`,
    fontStyle: `${base}-fontStyle`,
    defaultFontWeight: `${base}-defaultFontWeight`,
    mediumfontWeight: `${base}-mediumfontWeight`,
    regularFontWeight: `${base}-regularFontWeight`,
    boldFontWeight: `${base}-boldFontWeight`,
    fontSize1: `${base}-fontSize1`,
    fontSize2: `${base}-fontSize2`,
    fontSize3: `${base}-fontSize3`,
    fontSize4: `${base}-fontSize4`,
    fontSize5: `${base}-fontSize5`,
    fontSize6: `${base}-fontSize6`,
    fontSize7: `${base}-fontSize7`,
    lineHeight1: `${base}-lineHeight1`,
    lineHeight2: `${base}-lineHeight2`,
    lineHeight3: `${base}-lineHeight3`,
    lineHeight4: `${base}-lineHeight4`,
    lineHeight5: `${base}-lineHeight5`,
    lineHeight6: `${base}-lineHeight6`,
    lineHeight7: `${base}-lineHeight7`
};
