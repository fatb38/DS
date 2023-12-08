import {IKitThemeGeneral} from '@theme/types';
import {IKitCheckboxCssTokens, IKitCheckboxTheme} from '@theme/types/components/DataEntry/Checkbox';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitCheckboxTokens = (generalTokens: IKitThemeGeneral): IKitCheckboxTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            background: {
                check: colors.primary.primary400,
                hover: colors.primary.primary500,
                focus: colors.neutral.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                danger: {
                    default: colors.secondary.red.red200,
                    hover: colors.secondary.red.red500
                }
            },
            border: {
                default: colors.neutral.black60,
                check: colors.primary.primary400,
                hover: colors.primary.primary400,
                focus: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: colors.secondary.red.red400,
                    hover: colors.secondary.red.red500,
                    focus: colors.secondary.red.red400
                }
            },
            typography: {
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                danger: {
                    disabled: colors.secondary.red.red200
                }
            }
        },
        typography: {
            fontWeight: typography.mediumfontWeight,
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5,
            lineHeight: typography.lineHeight5,
            lineWidth: 1
        },
        border: {
            radius: border.radius.xs
        }
    };
};

export const kitCheckboxCssTokens = generateCssTokens<IKitCheckboxCssTokens>('--components-Checkbox', {
    colors: {
        background: {
            check: '',
            hover: '',
            focus: '',
            disabled: '',
            danger: {
                default: '',
                hover: ''
            }
        },
        border: {
            default: '',
            check: '',
            hover: '',
            focus: '',
            disabled: '',
            danger: {
                default: '',
                hover: '',
                focus: ''
            }
        },
        typography: {
            disabled: '',
            danger: {
                disabled: ''
            }
        }
    },
    typography: {
        fontWeight: '',
        fontFamily: '',
        fontSize: '',
        lineHeight: '',
        lineWidth: ''
    },
    border: {
        radius: ''
    }
});
