import {IKitThemeGeneral} from '@theme/types';
import {
    IKitSelectColorBadgeCssTokens,
    IKitSelectColorBarTheme,
    IKitSelectCssTokens,
    IKitSelectDropDownCssTokens,
    IKitSelectDropDownTheme,
    IKitSelectTheme
} from '@theme/types/components/DataEntry/Select';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

const getKitDropDownTokens = (generalTokens: IKitThemeGeneral): IKitSelectDropDownTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                selected: colors.secondary.mediumGrey.mediumGrey500,
                active: colors.primary.primary400,
                group: colors.neutral.typography.black
            },
            background: {
                default: colors.secondary.mediumGrey.mediumGrey100,
                selected: colors.primary.primary100,
                active: colors.primary.primary100
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontWeight: {
                default: typography.mediumfontWeight,
                selected: typography.mediumfontWeight,
                active: typography.mediumfontWeight,
                group: typography.boldFontWeight
            }
        },
        border: {
            radius: border.radius.s
        }
    };
};

const getKitSelectColorBarTokens = (generalTokens: IKitThemeGeneral): IKitSelectColorBarTheme => {
    const {border} = generalTokens;
    return {
        height: 16,
        width: 16,
        border: {
            radius: border.radius.xxs
        }
    };
};

export const getKitSelectTokens = (generalTokens: IKitThemeGeneral): IKitSelectTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        height: 40,
        border: {
            radius: border.radius.s
        },
        colors: {
            border: {
                hover: colors.primary.primary400,
                focused: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                warning: colors.secondary.orange.orange400,
                error: colors.secondary.red.red400
            },
            typography: {
                content: {
                    default: colors.primary.primary300,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange500,
                    error: colors.secondary.red.red400
                },
                placeholder: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                }
            },
            icon: {
                arrow: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                },
                clear: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    warning: colors.secondary.orange.orange400,
                    error: colors.secondary.red.red400
                }
            },
            background: {
                default: colors.neutral.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                warning: colors.secondary.orange.orange100,
                error: colors.secondary.red.red100
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize6,
            fontWeight: {
                content: typography.mediumfontWeight,
                placeholder: typography.regularFontWeight
            }
        },
        DropDown: getKitDropDownTokens(generalTokens),
        ColorBadge: getKitSelectColorBarTokens(generalTokens)
    };
};

export const kitSelectCssTokens = generateCssTokens<IKitSelectCssTokens>('--components-Select', {
    height: '',
    border: {
        radius: ''
    },
    colors: {
        border: {
            hover: '',
            focused: '',
            disabled: '',
            warning: '',
            error: ''
        },
        typography: {
            content: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            },
            placeholder: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            }
        },
        icon: {
            arrow: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            },
            clear: {
                default: '',
                disabled: '',
                warning: '',
                error: ''
            }
        },
        background: {
            default: '',
            disabled: '',
            warning: '',
            error: ''
        }
    },
    typography: {
        fontFamily: '',
        fontSize: '',
        fontWeight: {
            content: '',
            placeholder: ''
        }
    }
});

export const kitSelectColorBadgeCssTokens = generateCssTokens<IKitSelectColorBadgeCssTokens>(
    '--components-Select-ColorBadge',
    {
        height: '',
        width: '',
        border: {
            radius: ''
        }
    }
);

export const kitSelectDropDownCssTokens = generateCssTokens<IKitSelectDropDownCssTokens>(
    '--components-Select-DropDown',
    {
        colors: {
            typography: {
                default: '',
                selected: '',
                active: '',
                group: ''
            },
            background: {
                default: '',
                selected: '',
                active: ''
            }
        },
        typography: {
            fontFamily: '',
            fontWeight: {
                default: '',
                selected: '',
                active: '',
                group: ''
            }
        },
        border: {
            radius: ''
        }
    }
);
