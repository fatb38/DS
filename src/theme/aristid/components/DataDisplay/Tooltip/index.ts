import {IKitThemeGeneral} from '@theme/types';
import {IKitTooltipCssTokens, IKitTooltipTheme} from '@theme/types/components/DataDisplay/Tooltip';
import {generateCssTokens} from '@theme/utils/css-tokens-generator';

export const getKitTooltipTokens = (generalTokens: IKitThemeGeneral): IKitTooltipTheme => {
    const {colors, border, typography} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.primary.primary600
            },
            typography: {
                default: colors.neutral.typography.white
            }
        },
        border: {
            radius: border.radius.s
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize7
        }
    };
};

export const kitTooltipCssToken = generateCssTokens<IKitTooltipCssTokens>('--components-Tooltip', {
    colors: {
        background: {
            default: ''
        },
        typography: {
            default: ''
        }
    },
    border: {
        radius: ''
    },
    typography: {
        fontFamily: '',
        fontSize: ''
    }
});
