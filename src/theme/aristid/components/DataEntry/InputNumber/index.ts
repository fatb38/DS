import {IKitThemeGeneral} from '@theme/types';
import {IKitInputNumberTheme} from '@theme/types/components/DataEntry/InputNumber';

export const getKitInputNumberTokens = (generalTokens: IKitThemeGeneral): IKitInputNumberTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.white,
                disabled: colors.secondary.mediumGrey.mediumGrey100,
                error: colors.secondary.red.red100,
                warning: colors.secondary.orange.orange100
            },
            border: {
                default: colors.secondary.mediumGrey.mediumGrey200,
                hover: colors.primary.primary400,
                focused: colors.primary.primary400,
                disabled: colors.secondary.mediumGrey.mediumGrey200,
                error: colors.secondary.red.red400,
                warning: colors.secondary.orange.orange400
            },
            prefix: {
                default: colors.secondary.mediumGrey.mediumGrey500,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                error: colors.secondary.red.red400,
                warning: colors.secondary.orange.orange400
            },
            typography: {
                content: {
                    default: colors.primary.primary300,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    error: colors.secondary.red.red400,
                    warning: colors.secondary.orange.orange400
                },
                placeholder: {
                    default: colors.secondary.mediumGrey.mediumGrey500,
                    disabled: colors.secondary.mediumGrey.mediumGrey400,
                    error: colors.secondary.red.red400,
                    warning: colors.secondary.orange.orange400
                }
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5,
            content: {
                fontWeight: typography.mediumfontWeight
            },
            placeholder: {
                fontWeight: typography.regularFontWeight
            }
        },
        border: {
            radius: border.radius.s
        }
    };
};
