import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitCardThemeStyled} from '@theme/types/components/DataDisplay/Card';

const {colors, typography} = KitAristidThemeGeneral;

const kitCardThemeStyled: IKitCardThemeStyled = {
    colors: {
        background: {
            default: 'none',
            disabled: colors.secondary.mediumGrey.mediumGrey100
        },
        typography: {
            headerTitle: {
                default: colors.primary.blue400,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            },
            contentTitle: {
                default: colors.primary.blue400,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            },
            description: {
                default: colors.neutral.typography.black,
                disabled: colors.secondary.mediumGrey.mediumGrey300
            },
            extra: {
                default: colors.primary.blue400,
                hover: colors.primary.blue300,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        },
        border: {
            default: colors.secondary.mediumGrey.mediumGrey200,
            focus: colors.primary.blue400,
            hover: colors.primary.blue400,
            disabled: colors.secondary.mediumGrey.mediumGrey200
        },
        separator: {
            default: colors.secondary.mediumGrey.mediumGrey200
        },
        actions: {
            default: colors.secondary.mediumGrey.mediumGrey500,
            disabled: colors.secondary.mediumGrey.mediumGrey300,
            hover: colors.primary.blue400
        },
        shadow: {
            default: colors.neutral.typography.black,
            disabled: colors.primary.blue400,
            hover: colors.primary.blue400,
            focus: colors.primary.blue400
        }
    },
    typography: {
        fontFamily: typography.fontFamily,
        headerTitle: {
            fontSize: typography.fontSize3,
            fontWeight: typography.boldFontWeight
        },
        contentTitle: {
            fontSize: typography.fontSize2,
            fontWeight: typography.boldFontWeight
        },
        desciption: {
            fontSize: typography.fontSize5,
            fontWeight: typography.regularFontWeight
        }
    }
};

export const KitCardTheme = {
    ...kitCardThemeStyled
};
