import {IKitThemeGeneral} from '@theme/types';
import {IKitCheckboxTheme} from '@theme/types/components/DataEntry/Checkbox';

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
