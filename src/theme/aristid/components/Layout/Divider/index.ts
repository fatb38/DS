import {IKitThemeGeneral} from '@theme/types';
import {IKitDividerTheme} from '@theme/types/components/Layout/Divider';

export const getKitDividerTokens = (generalTokens: IKitThemeGeneral): IKitDividerTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            typography: {
                default: colors.neutral.typography.black
            },
            split: {
                default: colors.neutral.black60,
                lightGrey: colors.secondary.mediumGrey.mediumGrey100
            }
        },
        typography: {
            fontWeight: typography.mediumfontWeight,
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize6,
            lineHeight: typography.lineHeight6
        }
    };
};
