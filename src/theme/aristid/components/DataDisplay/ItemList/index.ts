import {IKitThemeGeneral} from '@theme/types';
import {IKitItemListTheme} from '@theme/types/components/DataDisplay/ItemList';

export const getKitItemListTokens = (generalTokens: IKitThemeGeneral): IKitItemListTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        itemList: {
            colors: {
                background: {
                    default: colors.neutral.white,
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                },
                border: {
                    default: colors.secondary.mediumGrey.mediumGrey200,
                    disabled: colors.secondary.mediumGrey.mediumGrey200,
                    hover: colors.primary.primary400
                }
            },
            border: {
                radius: border.radius.s
            }
        },
        title: {
            typography: {
                fontWeight: typography.boldFontWeight,
                fontSize: typography.fontSize5
            },
            colors: {
                default: colors.primary.primary600,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        },
        description: {
            typography: {
                fontWeight: typography.regularFontWeight,
                fontSize: typography.fontSize5
            },
            colors: {
                default: colors.primary.primary600,
                disabled: colors.secondary.mediumGrey.mediumGrey400
            }
        },
        collexp: {
            colors: {
                default: colors.primary.primary600,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                hover: colors.primary.primary400
            }
        },
        rafter: {
            colors: {
                default: colors.neutral.grey.grey400,
                disabled: colors.secondary.mediumGrey.mediumGrey400,
                hover: colors.primary.primary400
            }
        }
    };
};
