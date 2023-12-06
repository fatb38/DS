import {IKitThemeGeneral} from '@theme/types';
import {IKitBadgeCssTokens, IKitBadgeTheme} from '@theme/types/components/DataDisplay/Badge';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitBadgeTokens = (generalTokens: IKitThemeGeneral): IKitBadgeTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.secondary.red.red400,
                primary: colors.primary.primary400,
                error: colors.secondary.red.red400,
                success: colors.secondary.green.green400,
                warning: colors.secondary.yellow.yellow400
            },
            typography: {
                default: colors.neutral.typography.white
            }
        },
        typography: {
            fontFamily: typography.fontFamily
        }
    };
};

export const kitBadgeCssTokens = generateCssTokens<IKitBadgeCssTokens>('--components-Badge', {
    colors: {
        background: {
            default: '',
            primary: '',
            error: '',
            success: '',
            warning: ''
        },
        typography: {
            default: ''
        }
    },
    typography: {
        fontFamily: ''
    }
});
