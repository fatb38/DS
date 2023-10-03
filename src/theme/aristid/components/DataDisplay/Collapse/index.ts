import {IKitThemeGeneral} from '@theme/types';
import {IKitCollapseTheme} from '@theme/types/components/DataDisplay/Collapse';

export const getKitCollapseTokens = (generalTokens: IKitThemeGeneral): IKitCollapseTheme => {
    const {colors, border} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.background,
                active: colors.primary.primary100
            },
            border: {
                default: colors.secondary.mediumGrey.mediumGrey300,
                active: colors.primary.primary400
            }
        },
        border: {
            radius: border.radius.s
        }
    };
};
