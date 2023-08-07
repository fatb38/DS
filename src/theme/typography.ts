export interface KitTypography {
    fontFamily: string;
    fontStyle: string;
    defaultFontWeight: string | number;
    boldFontWeight: string | number;
    mediumfontWeight: string | number;
    regularFontWeight: string | number;
    fontSize5: number;
    fontSize6: number;
    fontSize7: number;
    lineHeight5: number;
    lineHeight6: number;
    lineHeight7: number;
    // fontSize5: string | number;
    // fontSize6: string | number;
    // fontSize7: string | number;
    // lineHeight5: string | number;
    // lineHeight6: string | number;
    // lineHeight7: string | number;
}

// reserved to Headings
export const typographyHeaders = {
    fontSize1: 30, //"1.875rem", // 30px
    lineHeight1: 1.2,
    fontSize2: 24, //"1.5rem", //'24px',
    lineHeight2: 1.2,
    fontSize3: 18, //"1.125rem", //'18px',
    lineHeight3: 1.2,
    fontSize4: 16, //"1rem", //'16px'
    lineHeight4: 1.2
};

export const Typography: KitTypography = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    defaultFontWeight: 500,
    mediumfontWeight: 500,
    regularFontWeight: 400,
    boldFontWeight: 700,
    fontSize5: 14, //'.875rem', // 14,
    fontSize6: 13, //'.8125rem', // 13,
    fontSize7: 12, //'.75rem', // 12,
    lineHeight5: 1.2,
    lineHeight6: 1.2,
    lineHeight7: 1.2
};
