import {IKitThemeGeneral} from '@theme/types';
import {IKitSliderTheme} from '@theme/types/components/DataEntry/Slider';

export const getKitSliderTokens = (generalTokens: IKitThemeGeneral): IKitSliderTheme => {
    const {colors} = generalTokens;

    return {
        handle: {
            colors: {
                background: {
                    hover: colors.primary.primary100,
                    focus: colors.primary.primary400
                },
                border: {
                    default: colors.primary.primary400,
                    disabled: colors.secondary.mediumGrey.mediumGrey200
                }
            },
            size: 14,
            border: 2
        },
        rail: {
            colors: {
                background: {
                    default: colors.secondary.mediumGrey.mediumGrey200,
                    hover: colors.secondary.mediumGrey.mediumGrey200
                }
            },
            size: 4
        },
        dot: {
            colors: {
                border: {
                    default: colors.secondary.mediumGrey.mediumGrey200,
                    active: colors.primary.primary400
                }
            },
            size: 8
        },
        track: {
            colors: {
                background: {
                    default: colors.primary.primary400,
                    hover: colors.primary.primary400
                }
            }
        },
        startIcon: {
            colors: {
                default: colors.neutral.typography.black60
            }
        },
        endIcon: {
            colors: {
                default: colors.neutral.typography.black60
            }
        }
    };
};
