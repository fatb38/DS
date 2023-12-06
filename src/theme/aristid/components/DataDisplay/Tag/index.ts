import {IKitThemeGeneral} from '@theme/types';
import {IKitTagCssTokens, IKitTagTheme} from '@theme/types/components/DataDisplay/Tag';

export const getKitTagTokens = (generalTokens: IKitThemeGeneral): IKitTagTheme => {
    const {colors, typography, border} = generalTokens;

    return {
        colors: {
            default: {
                background: {
                    default: colors.primary.primary100
                },
                typography: {
                    default: colors.neutral.typography.black
                }
            }
        },
        typography: {
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize7,
            fontWeight: typography.regularFontWeight
        },
        border: {
            radius: border.radius.s
        }
    };
};

const base = '--components-Tag';

export const kitTagCssTokens: IKitTagCssTokens = {
    colors: {
        default: {
            background: {
                default: `${base}-colors-default-background-default`
            },
            typography: {
                default: `${base}-colors-typography-default`
            }
        }
    },
    typography: {
        fontFamily: `${base}-typography-fontFamily`,
        fontSize: `${base}-typography-fontSize`,
        fontWeight: `${base}-typography-fontWeight`
    },
    border: {
        radius: `${base}-border-radius`
    }
};
