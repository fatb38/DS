import {IKitThemeGeneral} from '@theme/types';
import {IKitHeaderTheme} from '@theme/types/components/Navigation/Header';

export const getKitHeaderTokens = (generalTokens: IKitThemeGeneral): IKitHeaderTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.typography.white
            },
            typography: {
                input: {
                    default: colors.secondary.mediumGrey.mediumGrey500
                }
            }
        }
    };
};
