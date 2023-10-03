import {IKitThemeGeneral} from '@theme/types';
import {IKitMenuTheme} from '@theme/types/components/Navigation/Menu';

export const getKitMenuTokens = (generalTokens: IKitThemeGeneral): IKitMenuTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            background: {
                default: colors.neutral.typography.white
            }
        },
        itemMenu: {
            colors: {
                background: {
                    default: colors.neutral.typography.white,
                    active: colors.primary.primary100,
                    hover: colors.primary.primary100,
                    danger: colors.secondary.red.red100
                },
                border: {
                    active: colors.primary.primary400
                },
                value: {
                    default: colors.secondary.mediumGrey.mediumGrey300
                },
                rafter: {
                    default: colors.secondary.mediumGrey.mediumGrey300,
                    hover: colors.primary.primary400
                },
                title: {
                    default: colors.primary.primary400,
                    danger: colors.secondary.red.red400
                },
                icon: {
                    default: colors.secondary.mediumGrey.mediumGrey300,
                    danger: colors.secondary.red.red400
                }
            }
        }
    };
};
