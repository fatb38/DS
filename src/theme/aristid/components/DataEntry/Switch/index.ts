import {IKitThemeGeneral} from '@theme/types';
import {IKitSwitchTheme} from '@theme/types/components/DataEntry/Switch';

export const getKitSwitchTokens = (generalTokens: IKitThemeGeneral): IKitSwitchTheme => {
    const {colors} = generalTokens;

    return {
        colors: {
            background: {
                default: {
                    on: colors.primary.primary400,
                    off: colors.neutral.background
                },
                disabled: colors.secondary.mediumGrey.mediumGrey100
            },
            handle: {
                background: {
                    default: {
                        on: colors.neutral.white,
                        off: colors.secondary.mediumGrey.mediumGrey400
                    },
                    disabled: colors.secondary.mediumGrey.mediumGrey100
                },
                border: {
                    default: {
                        on: colors.primary.primary400,
                        off: colors.secondary.mediumGrey.mediumGrey400
                    },
                    disabled: colors.secondary.mediumGrey.mediumGrey200
                }
            }
        }
    };
};
