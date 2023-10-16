import {IKitThemeGeneral} from '@theme/types';
import {IKitSnackBarTheme} from '@theme/types/components/Feedback/SnackBar';

export const getKitSnackBarTokens = (generalTokens: IKitThemeGeneral): IKitSnackBarTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: colors.neutral.gray.gray700,
            border: colors.neutral.gray.gray700,
            typography: {
                title: colors.neutral.gray.gray400
            },
            cta: {
                border: {
                    default: colors.neutral.gray.gray200,
                    hover: colors.neutral.gray.gray400
                },
                typography: {
                    default: colors.neutral.gray.gray200,
                    hover: colors.neutral.gray.gray400
                }
            },
            closeIcon: {
                default: colors.neutral.gray.gray400,
                hover: colors.neutral.gray.gray500
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            title: {
                fontSize: typography.fontSize5,
                fontWeight: typography.regularFontWeight
            },
            cta: {
                fontWeight: typography.mediumfontWeight
            }
        }
    };
};
