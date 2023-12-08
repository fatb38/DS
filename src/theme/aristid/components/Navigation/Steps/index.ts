import {IKitThemeGeneral} from '@theme/types';
import {IKitStepsCssTokens, IKitStepsTheme} from '@theme/types/components/Navigation/Steps';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitStepsTokens = (generalTokens: IKitThemeGeneral): IKitStepsTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            dot: {
                default: colors.primary.primary300
            },
            split: {
                default: colors.neutral.background
            },
            typography: {
                description: {
                    default: colors.neutral.typography.black60,
                    active: colors.primary.primary300
                },
                text: {
                    default: colors.neutral.typography.black,
                    active: colors.primary.primary300
                }
            }
        },
        typography: {
            fontfamily: typography.fontFamily,
            fontSize: typography.fontSize6
        }
    };
};

export const kitStepsCssTokens = generateCssTokens<IKitStepsCssTokens>('--components-Steps', {
    colors: {
        dot: {
            default: ''
        },
        split: {
            default: ''
        },
        typography: {
            description: {
                default: '',
                active: ''
            },
            text: {
                default: '',
                active: ''
            }
        }
    },
    typography: {
        fontfamily: '',
        fontSize: ''
    }
});
