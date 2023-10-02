import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitTooltip} from '@theme/types/components/DataDisplay/Tooltip';

const {colors, typography, border} = KitAristidThemeGeneral;

export const KitTooltipTheme: IKitTooltip = {
    colors: {
        background: {
            default: colors.primary.blue600
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
