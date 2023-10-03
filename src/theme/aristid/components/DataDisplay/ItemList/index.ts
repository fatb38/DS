import {IKitThemeGeneral} from '@theme/types';
import {IKitItemListTheme} from '@theme/types/components/DataDisplay/ItemList';

export const getKitItemListTokens = (generalTokens: IKitThemeGeneral): IKitItemListTheme => {
    const {colors, typography} = generalTokens;

    return {
        itemList: {
            colors: {
                background: {
                    default: colors.neutral.typography.white,
                    disabled: colors.primary.primary100
                },
                border: {
                    default: colors.neutral.typography.white,
                    disabled: colors.primary.primary100,
                    hover: colors.primary.primary400
                }
            }
        },
        title: {
            typography: {
                fontWeight: typography.boldFontWeight,
                fontSize: typography.fontSize5
            },
            colors: {
                default: colors.primary.primary600,
                disabled: colors.primary.primary200
            }
        },
        description: {
            typography: {
                fontWeight: typography.regularFontWeight,
                fontSize: typography.fontSize5
            },
            colors: {
                default: colors.primary.primary600,
                disabled: colors.primary.primary200
            }
        },
        collexp: {
            colors: {
                default: colors.primary.primary600,
                disabled: colors.primary.primary200,
                hover: colors.primary.primary400
            }
        },
        rafter: {
            colors: {
                default: colors.neutral.gray.gray400,
                disabled: colors.primary.primary200,
                hover: colors.primary.primary400
            }
        }
    };
};
