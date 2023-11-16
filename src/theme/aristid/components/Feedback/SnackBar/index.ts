import {IKitThemeGeneral} from '@theme/types';
import {IKitSnackBarTheme} from '@theme/types/components/Feedback/SnackBar';

export const getKitSnackBarTokens = (generalTokens: IKitThemeGeneral): IKitSnackBarTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: colors.neutral.grey.grey700,
            border: colors.neutral.grey.grey700,
            typography: {
                title: colors.neutral.grey.grey400
            },
            cta: {
                border: {
                    default: colors.neutral.grey.grey200,
                    hover: colors.neutral.grey.grey400
                },
                typography: {
                    default: colors.neutral.grey.grey200,
                    hover: colors.neutral.grey.grey400
                }
            },
            closeIcon: {
                default: colors.neutral.grey.grey400,
                hover: colors.neutral.grey.grey500
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
