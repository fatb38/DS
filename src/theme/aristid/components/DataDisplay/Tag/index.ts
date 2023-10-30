import {IKitThemeGeneral} from '@theme/types';
import {IKitTagTheme} from '@theme/types/components/DataDisplay/Tag';

export const getKitTagTokens = (generalTokens: IKitThemeGeneral): IKitTagTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            default: {
                background: {
                    default: colors.primary.primary100
                },
                typography: {
                    default: colors.neutral.typography.black
                }
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize7,
            fontWeight: typography.regularFontWeight
        },
        border: {
            radius: border.radius.s
        }
    };
};
