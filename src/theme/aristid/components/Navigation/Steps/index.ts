import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitThemeGeneral} from '@theme/types';
import {IKitStepsTheme} from '@theme/types/components/Navigation/Steps';

export const getKitStepsTokens = (generalTokens: IKitThemeGeneral): IKitStepsTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            dot: {
                default: colors.primary.blue300
            },
            split: {
                default: colors.neutral.background
            },
            typography: {
                description: {
                    default: colors.neutral.typography.black60,
                    active: colors.primary.blue300
                },
                text: {
                    default: colors.neutral.typography.black,
                    active: colors.primary.blue300
                }
            }
        },
        typography: {
            fontfamily: typography.fontFamily,
            fontSize: typography.fontSize6
        }
    };
};
