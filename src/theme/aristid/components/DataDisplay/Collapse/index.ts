import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitCollapseTheme} from '@theme/types/components/DataDisplay/Collapse';

const {colors, border} = KitAristidThemeGeneral;

export const KitCollapseTheme: IKitCollapseTheme = {
    colors: {
        background: {
            default: colors.neutral.background,
            active: colors.primary.blue100
        },
        border: {
            default: colors.secondary.mediumGrey.mediumGrey300,
            active: colors.primary.blue400
        }
    },
    border: {
        radius: border.radius.s
    }
};
