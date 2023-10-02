import {KitAristidThemeGeneral} from '@theme/aristid/general';
import {IKitUploadTheme} from '@theme/types/components/DataEntry/Upload';

const {colors, typography} = KitAristidThemeGeneral;

const KitDraggerTheme: IKitUploadTheme['Dragger'] = {
    colors: {
        background: {
            default: colors.secondary.mediumGrey.mediumGrey100
        },
        border: {
            default: colors.neutral.gray.gray400,
            hover: colors.primary.blue400
        },
        dragIcon: {
            default: colors.primary.blue400
        },
        typography: {
            text: colors.neutral.typography.black,
            hint: colors.neutral.gray.gray400,
            item: colors.primary.blue400
        }
    },
    typography: {
        fontSize: typography.fontSize4,
        fontWeight: typography.regularFontWeight,
        lineHeight: typography.lineHeight4
    }
};

export const KitUploadTheme: IKitUploadTheme = {
    colors: {
        card: {
            border: {
                default: colors.primary.blue400
            },
            background: {
                default: colors.secondary.mediumGrey.mediumGrey100
            }
        },
        list: {
            preview: {
                hover: 'rgba(6, 32, 100, 0.5)'
            },
            border: {
                default: colors.neutral.gray.gray400,
                uploading: colors.primary.blue400,
                error: colors.secondary.red.red400
            },
            typography: {
                done: colors.primary.blue400,
                error: colors.secondary.red.red400
            }
        }
    },
    Dragger: KitDraggerTheme
};
