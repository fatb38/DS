import {IKitThemeGeneral} from '@theme/types';
import {IKitRadioTheme} from '@theme/types/components/DataEntry/Radio';

export const getKitRadioTokens = (generalTokens: IKitThemeGeneral): IKitRadioTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            border: {
                default: colors.neutral.black60,
                checked: colors.primary.primary400,
                hover: colors.primary.primary500,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: colors.secondary.red.red400,
                    hover: colors.secondary.red.red500
                }
            },
            background: {
                default: colors.neutral.white,
                checked: colors.neutral.white,
                hover: colors.neutral.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                danger: {
                    default: colors.secondary.red.red200,
                    hover: colors.secondary.red.red200
                }
            },
            bullet: {
                default: colors.primary.primary400,
                hover: colors.primary.primary500,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                danger: {
                    default: colors.secondary.red.red400,
                    hover: colors.secondary.red.red500
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
            lineHeight: typography.lineHeight5
        }
    };
};
