import {IKitThemeGeneral} from '@theme/types';
import {IKitProgressCssTokens, IKitProgressTheme} from '@theme/types/components/Feedback/Progress';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitProgressTokens = (generalTokens: IKitThemeGeneral): IKitProgressTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: colors.neutral.background,
            progress: {
                info: colors.primary.primary400,
                success: colors.secondary.green.green400,
                error: colors.secondary.red.red400
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize7
        },
        circle: {
            typography: {
                fontWeight: typography.boldFontWeight,
                fontSize: typography.fontSize2
            }
        }
    };
};

export const kitProgressCssTokens = generateCssTokens<IKitProgressCssTokens>('--components-Progress', {
    colors: {
        background: '',
        progress: {
            info: '',
            success: '',
            error: ''
        }
    },
    typography: {
        fontFamily: '',
        fontSize: ''
    },
    circle: {
        typography: {
            fontWeight: '',
            fontSize: ''
        }
    }
});
