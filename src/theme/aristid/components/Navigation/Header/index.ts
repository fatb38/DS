import {IKitThemeGeneral} from '@theme/types';
import {IKitHeaderCssTokens, IKitHeaderTheme} from '@theme/types/components/Navigation/Header';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitHeaderTokens = (generalTokens: IKitThemeGeneral): IKitHeaderTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.white
            },
            typography: {
                input: {
                    default: colors.secondary.mediumGrey.mediumGrey500
                }
            }
        }
    };
};

export const kitHeaderCssTokens = generateCssTokens<IKitHeaderCssTokens>('--components-Header', {
    colors: {
        background: {
            default: ''
        },
        typography: {
            input: {
                default: ''
            }
        }
    }
});
