import {IKitThemeGeneral} from '@theme/types';
import {IKitTreeTheme} from '@theme/types/components/DataDisplay/Tree';

export const getKitTreeTokens = (generalTokens: IKitThemeGeneral): IKitTreeTheme => {
    const {colors, typography} = generalTokens;

    return {
        colors: {
            background: {
                hover: colors.primary.primary100
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize5
        },
        icon: {
            fontSize: typography.fontSize5
        },
        checkbox: {
            colors: {
                background: {
                    default: colors.neutral.typography.white,
                    disabled: colors.neutral.typography.white,
                    checked: {
                        default: colors.primary.primary400,
                        hover: colors.primary.primary500
                    }
                },
                border: {
                    default: colors.neutral.typography.black60,
                    disabled: colors.neutral.typography.black60,
                    hover: colors.primary.primary400,
                    checked: {
                        default: colors.primary.primary400,
                        hover: colors.primary.primary500
                    }
                },
                icon: {
                    default: colors.neutral.typography.black60,
                    disabled: colors.neutral.typography.black60,
                    checked: colors.neutral.typography.white
                }
            }
        },
        treenode: {
            typography: {
                fontWeight: typography.regularFontWeight
            },
            colors: {
                typography: {
                    hover: colors.primary.primary400,
                    disabled: colors.neutral.typography.black60
                },
                background: {
                    hover: colors.primary.primary100,
                    selected: colors.primary.primary100,
                    indent: colors.neutral.typography.white
                }
            }
        }
    };
};
