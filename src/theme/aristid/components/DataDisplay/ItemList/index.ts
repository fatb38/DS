import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {kitItemListThemeStyled} from '@theme/types/components/DataDisplay/ItemList';

const {colors, border, typography} = KitAristidThemeGeneral;

const kitItemListThemeStyled: kitItemListThemeStyled = {
    itemList: {
        colors: {
            background: {
                default: colors.neutral.typography.white,
                disabled: colors.primary.blue100
            },
            border: {
                default: colors.neutral.typography.white,
                disabled: colors.primary.blue100,
                hover: colors.primary.blue400
            }
        }
    },
    title: {
        typography: {
            fontWeight: typography.boldFontWeight,
            fontSize: typography.fontSize5
        },
        colors: {
            default: colors.primary.blue600,
            disabled: colors.primary.blue200
        }
    },
    description: {
        typography: {
            fontWeight: typography.regularFontWeight,
            fontSize: typography.fontSize5
        },
        colors: {
            default: colors.primary.blue600,
            disabled: colors.primary.blue200
        }
    },
    collexp: {
        colors: {
            default: colors.primary.blue600,
            disabled: colors.primary.blue200,
            hover: colors.primary.blue400
        }
    },
    rafter: {
        colors: {
            default: colors.neutral.gray.gray400,
            disabled: colors.primary.blue200,
            hover: colors.primary.blue400
        }
    }
};

export const kitItemListTheme = {
    ...kitItemListThemeStyled
};
