import {IKitThemeGeneral} from '@theme/types';
import {IKitTypographyCssTokens, IKitTypographyTheme} from '@theme/types/components/General/Typography';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitTypographyTokens = (generalTokens: IKitThemeGeneral): IKitTypographyTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.neutral.typography.black
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontWeight: typography.defaultFontWeight,
            lineHeight: typography.lineHeight1
        },
        Title: {
            level1: {
                typography: {
                    fontSize: typography.fontSize1,
                    lineHeight: typography.lineHeight1
                }
            },
            level2: {
                typography: {
                    fontSize: typography.fontSize2,
                    lineHeight: typography.lineHeight2
                }
            },
            level3: {
                typography: {
                    fontSize: typography.fontSize3,
                    lineHeight: typography.lineHeight3
                }
            },
            level4: {
                typography: {
                    fontSize: typography.fontSize4,
                    lineHeight: typography.lineHeight4
                }
            }
        },
        Text: {
            fontWeight: {
                regular: typography.regularFontWeight,
                medium: typography.mediumfontWeight,
                bold: typography.boldFontWeight
            }
        },
        Paragraph: {
            fontWeight: {
                regular: typography.regularFontWeight,
                medium: typography.mediumfontWeight,
                bold: typography.boldFontWeight
            }
        },
        Link: {
            colors: {
                typography: {
                    default: colors.primary.primary400,
                    hover: colors.primary.primary300
                }
            },
            fontWeight: {
                regular: typography.regularFontWeight,
                medium: typography.mediumfontWeight,
                bold: typography.boldFontWeight
            }
        }
    };
};

export const kitTypographyCssTokens = generateCssTokens<IKitTypographyCssTokens>('--components-Typography', {
    colors: {
        typography: {
            default: ''
        }
    },
    typography: {
        fontFamily: '',
        fontWeight: '',
        lineHeight: ''
    },
    Title: {
        level1: {
            typography: {
                fontSize: '',
                lineHeight: ''
            }
        },
        level2: {
            typography: {
                fontSize: '',
                lineHeight: ''
            }
        },
        level3: {
            typography: {
                fontSize: '',
                lineHeight: ''
            }
        },
        level4: {
            typography: {
                fontSize: '',
                lineHeight: ''
            }
        }
    },
    Text: {
        fontWeight: {
            regular: '',
            medium: '',
            bold: ''
        }
    },
    Paragraph: {
        fontWeight: {
            regular: '',
            medium: '',
            bold: ''
        }
    },
    Link: {
        colors: {
            typography: {
                default: '',
                hover: ''
            }
        },
        fontWeight: {
            regular: '',
            medium: '',
            bold: ''
        }
    }
});
