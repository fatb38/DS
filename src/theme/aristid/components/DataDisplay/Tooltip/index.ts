import {IKitThemeGeneral} from '@theme/types';
import {IKitTooltip} from '@theme/types/components/DataDisplay/Tooltip';

export const getKitTooltipTokens = (generalTokens: IKitThemeGeneral): IKitTooltip => {
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
